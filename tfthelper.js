function init() {
	appendChampions(1);
	appendChampions(2);
	appendChampions(3);
	
	for (var i = 0; i < window.baseItems.length; i++) {
		appendButton(window.baseItems[i], 'base-items', 'col-6', itemClickHandler);
	}
	
	for (var i = 0; i < window.specialElements.length; i++) {
		appendButton(window.specialElements[i], 'special-elements', 'col-2', specialElementClickHandler);
	}
	
    resetChoices();
}

function resetChoices() {
    window.selectedChamps = [];
    window.selectedItems = [];
	window.selectedElement = null;
    document.getElementById('selected-champions').innerHTML = '';
    document.getElementById('selected-items').innerHTML = '';
    document.getElementById('suggested-comps').innerHTML = '';
	$('#special-elements button').removeClass('selected');
	$('#champions-wrapper button').prop('disabled', true);
}

function appendChampions(cost) {
	var selectChamps = window.champions.filter(_ => _.cost == cost);
	for (var i = 0; i < selectChamps.length; i++) {
		appendButton(selectChamps[i].name, 'champions-' + cost, 'col-3', championClickHandler);
	}
}

function championClickHandler(e) {
    var selected = e.currentTarget.innerHTML;
    if (!window.selectedChamps.contains(selected)) {
        appendButton(selected, 'selected-champions', 'col-3', selectedChampClickHandler);
        window.selectedChamps.push(selected);
        updateSuggestedComps();
    } else {
		$('#selected-champions').find("button:contains('" + selected + "')").remove();
		var index = window.selectedChamps.indexOf(selected);
		window.selectedChamps.splice(index, 1);
		updateSuggestedComps();
	}
}

function itemClickHandler(e) {
    var selected = e.currentTarget.innerHTML;
	appendButton(selected, 'selected-items', 'col-6', selectedItemClickHandler);
    window.selectedItems.push(selected);
    updateSuggestedComps();
}

function selectedChampClickHandler(e) {
	e.currentTarget.remove();
    var index = window.selectedChamps.indexOf(e.currentTarget.innerHTML);
    window.selectedChamps.splice(index, 1);
    updateSuggestedComps();
}

function specialElementClickHandler(e) {
	$('#special-elements button').removeClass('selected');
	if (e.currentTarget.innerHTML !== window.selectedElement) {
		$(e.currentTarget).addClass('selected');
		window.selectedElement = e.currentTarget.innerHTML;
	} else {
		window.selectedElement = null;
	}
	updateSuggestedComps();
}

function selectedItemClickHandler(e) {
	e.currentTarget.remove();
    var index = window.selectedItems.indexOf(e.currentTarget.innerHTML);
    window.selectedItems.splice(index, 1);
    updateSuggestedComps();
}

function appendButton(text, container, className, handler) {
	var button = document.createElement('button');
	button.innerHTML = text;
	button.className = className;
	button.onclick = handler;
	document.getElementById(container).appendChild(button);
}

function getSuggestedComps() {
    if (!window.selectedChamps.length && !window.selectedItems.length && !window.selectedElement) {
        return [];
    }
    
    var suggestedComps = window.teamComps
        .filter(comp => {
            for (var i = 0; i < window.selectedChamps.length; i++) {
                if (!comp.rawChamps.contains(window.selectedChamps[i]))
                    return false;
            }
			
			if (window.selectedElement && comp.requiredElement && comp.requiredElement !== window.selectedElement) {
				return false;
			}
            
            var compItems = comp.requiredItems.slice();
            for (var i = 0; i < window.selectedItems.length; i++) {
                if (compItems.contains(window.selectedItems[i]))
                    compItems.splice(compItems.indexOf(window.selectedItems[i]), 1)
                else
                    return false;
            }
            return true;
        });
   
    return suggestedComps;
}

function appendComp(comp) {
	var paragraph = document.createElement('p');
	var compHtml = '<b>' + comp.name + '</b> ||&nbsp;';
	for (var i = 0; i < comp.champs.length; i++) {
		if (comp.champs[i].onlyEarly) {
			compHtml += '<del>' + comp.champs[i].name + '</del>  ';
		} else if (comp.champs[i].threeStar) {
			compHtml += '<b>' + comp.champs[i].name + '*</b>  ';
		} else {
			compHtml += comp.champs[i].name + '  ';
		}
	}
	
	compHtml += '<br/><b>Itemize</b> || &nbsp;';
	var itemizedChamps = comp.champs.filter(_ => _.items.length > 0);
	for (var i = 0; i < itemizedChamps.length; i++) {
		var champ = itemizedChamps[i];
		compHtml += champ.name + '(' + champ.items.join(', ') + ')  ';
	}
	
    var compItems = comp.requiredItems.slice();
	for (var i = 0; i < window.selectedItems.length; i++) {
		compItems.splice(compItems.indexOf(window.selectedItems[i]), 1)
	}
	var sortedItems = [];
	for (var i = 0; i < compItems.length;) {
		var currentItem = compItems[i];
		var lastIndex = compItems.lastIndexOf(currentItem) + 1;
		sortedItems.push(compItems[i] + ' x' + (lastIndex - i));
		i = lastIndex;
	}	
	compHtml += '<br/><b>Missing Items</b> ||&nbsp;';
	compHtml += sortedItems.join(', ');
	
	paragraph.innerHTML = compHtml;
	paragraph.className = 'col-12';
	paragraph.title = comp.notes;
	document.getElementById('suggested-comps').appendChild(paragraph);
}

function updateSuggestedComps() {
    var suggestedComps = getSuggestedComps();
	var allChamps = [];
    
    document.getElementById('suggested-comps').innerHTML = '';
    for (var i = 0; i < suggestedComps.length; i++) {
		appendComp(suggestedComps[i]);
		allChamps = allChamps.concat(suggestedComps[i].rawChamps);
    }
	
	allChamps = allChamps.unique();
	$('#champions-wrapper button').prop('disabled', true);
	for (var i = 0; i < allChamps.length; i++) {
		$('#champions-wrapper').find("button:contains('" + allChamps[i] + "')").prop('disabled', false);
	}
}

Array.prototype.contains = function(v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}

$(window).on('load', init);