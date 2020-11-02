function init() {
	appendChampions(1);
	appendChampions(2);
	
	for (var i = 0; i < window.baseItems.length; i++) {
		appendButton(window.baseItems[i], 'base-items', 'col-6', itemClickHandler);
	}
    
    window.selectedChamps = [];
    window.selectedItems = [];
}

function resetChoices() {
    window.selectedChamps = [];
    window.selectedItems = [];
    document.getElementById('selected-champions').innerHTML = '';
    document.getElementById('selected-items').innerHTML = '';
    document.getElementById('suggested-comps').innerHTML = '';
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
    if (!window.selectedChamps.length && !window.selectedItems.length) {
        return [];
    }
    
    var suggestedComps = window.teamComps
        .filter(comp => {
            for (var i = 0; i < window.selectedChamps.length; i++) {
                if (!comp.rawChamps.contains(window.selectedChamps[i]))
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

function updateSuggestedComps() {
    var suggestedComps = getSuggestedComps();
    
    document.getElementById('suggested-comps').innerHTML = '';
    for (var i = 0; i < suggestedComps.length; i++) {
        appendButton(suggestedComps[i].name, 'suggested-comps');   
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