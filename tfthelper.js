const currentSet = 8.5;

loadScript("champions");
loadScript("items");
loadScript("seasonFeatures");
loadScript("comps");

function init() {
	appendChampions(1);
	appendChampions(2);
	appendChampions(3);
	
	for (var i = 0; i < window.baseItems.length; i++) {
		appendImageButton(window.baseItems[i].image, window.baseItems[i].name, 'base-items', 'col-2', itemClickHandler);
	}
	
	initSeasonFeatures();
	resetChoices();
	logBestStarterItems();
}

function resetChoices() {
    window.selectedChamps = [];
	window.selectedItems = [];
    document.getElementById('selected-items').innerHTML = '';
	document.getElementById('suggested-comps').innerHTML = '';
	appendCombineButton();
	endCombiningItems();
	$('#champions-wrapper button')
		.prop('disabled', true)
		.removeClass('selected')
		.removeClass('priority');
	resetSeasonFeatures();
}

function logBestStarterItems() {
	var allItems = [];
	for (var i = 0; i < window.teamComps.length; i++) {
		var compItems = window.teamComps[i].requiredItems.map(fullItem => window.combinedItems.find(item => item.name == fullItem).baseItems).flat()
		allItems = allItems.concat(compItems);
	}
	
	allItems = allItems.sort();
	for (var i = 0; i < allItems.length;) {
		var currentItem = allItems[i];
		var lastIndex = allItems.lastIndexOf(currentItem) + 1;
		var formattedItem = allItems[i] + ' x' + (lastIndex - i);
		console.log(formattedItem);
		i = lastIndex;
	}
}

function appendChampions(cost) {
	var selectChamps = window.champions.filter(_ => _.cost == cost);
	for (var i = 0; i < selectChamps.length; i++) {
		appendImageButton(selectChamps[i].image, selectChamps[i].name, 'champions-' + cost, 'col-2', championClickHandler, true);
	}
}

function championClickHandler(e) {
	$(e.currentTarget).toggleClass('selected');
    var selected = e.currentTarget.getAttribute('aria-label');
	if (!window.selectedChamps.contains(selected)) {
        window.selectedChamps.push(selected);
        updateSuggestedComps();
    } else {
		var index = window.selectedChamps.indexOf(selected);
		window.selectedChamps.splice(index, 1);
		updateSuggestedComps();
	}
}

function itemClickHandler(e) {
	var selected = e.currentTarget.getAttribute('aria-label');
	var image = e.currentTarget.getElementsByTagName('img')[0].getAttribute('src');
	appendImageButton(image, selected, 'selected-items', 'col-2', selectedItemClickHandler);
    window.selectedItems.push(selected);
    updateSuggestedComps();
	checkCombinableItems();
}

function selectedItemClickHandler(e) {
	if (window.combiningItems) {
		if (window.combinedItems.some(i => i.name == e.currentTarget.getAttribute('aria-label')))
			return;
		addItemComponentToCombination(e.currentTarget);
	} else {
		removeSelectedItem(e.currentTarget);
		updateSuggestedComps();
		checkCombinableItems();
	}
}

function removeSelectedItem(target) {
	target.remove();
	var selected = target.getAttribute('aria-label');
	var index = window.selectedItems.indexOf(selected);
	if (index < 0) return;
	window.selectedItems.splice(index, 1);
}

function beginCombiningItems(e) {
	$('#base-items button').prop('disabled', true);
	window.combiningItems = true;
	window.comboItems = [];
}

function endCombiningItems() {
	$('#base-items button').prop('disabled', false);
	window.combiningItems = false;
	window.comboItems = [];
}

function addItemComponentToCombination(target) {
	if (!window.comboItems.length) {
		window.comboItems.push(target);
		return;
	} 

	var combinedItem = getCombinedItem(window.comboItems[0].getAttribute('aria-label'), target.getAttribute('aria-label'));
	appendImageButton(combinedItem.image, combinedItem.name, 'selected-items', 'col-2', selectedItemClickHandler);
	window.selectedItems.push(combinedItem.name);
	removeSelectedItem(target);
	removeSelectedItem(window.comboItems[0]);
	endCombiningItems();
	updateSuggestedComps();
	checkCombinableItems();
}

function getCombinedItem(baseItem1, baseItem2) {
	var str1 = `${baseItem1},${baseItem2}`;
	var str2 = `${baseItem2},${baseItem1}`;
	return window.combinedItems.find(i => 
		i.baseItems.toString() == str1 
		|| i.baseItems.toString() == str2);
}

function appendImageButton(src, alt, container, className, handler, addName = false) {
	var image = document.createElement('img');
	image.src = src;
	var button = document.createElement('button');
	button.setAttribute("aria-label", alt);
	button.appendChild(image);
	
	if (addName)
	{
		var name = document.createElement('span');
		name.innerText = alt;
		button.appendChild(name);
	}

	button.className = className;
	button.onclick = handler;
	document.getElementById(container).appendChild(button);
}

function appendCombineButton() {
	appendImageButton('./img/anvil.png', 'Combine Items', 'selected-items', 'col-2', beginCombiningItems);
	checkCombinableItems();
}

function checkCombinableItems() {
	var baseItemNames = window.baseItems.map(i => i.name);
	var selectedBaseItems = window.selectedItems.filter(i => baseItemNames.contains(i));
	var disableCombining = selectedBaseItems.length < 2;
	$('#selected-items button')[0].disabled = disableCombining;
}

function appendComp(comp) {
	var paragraph = document.createElement('p');
	var compHtml = '<b>' + comp.name + '</b> ||&nbsp;';
	compHtml += comp.champs.join(', ');
	
	compHtml += '<br/><b>Itemize</b> || &nbsp;';
	compHtml += comp.requiredItems.join(', ') + ' ';
	
	paragraph.innerHTML = compHtml;
	paragraph.className = 'col-12';
	paragraph.title = comp.notes;
	document.getElementById('suggested-comps').appendChild(paragraph);
}

function updateSuggestedComps() {
    var suggestedComps = getSuggestedComps();
	var allChamps = [];
	var priorityChamps = [];
    
    document.getElementById('suggested-comps').innerHTML = '';
    for (var i = 0; i < suggestedComps.length; i++) {
		appendComp(suggestedComps[i]);
		allChamps = allChamps.concat(suggestedComps[i].champs);
		priorityChamps.push(suggestedComps[i].champs[0]);
    }
	
	allChamps = allChamps.unique();
	$('#champions-wrapper button').prop('disabled', true);
	for (var i = 0; i < allChamps.length; i++) {
		$('#champions-wrapper').find("button[aria-label='" + allChamps[i] + "']").prop('disabled', false);
	}

	selectedChamps = selectedChamps.filter(champ => allChamps.includes(champ));
	$('#champions-wrapper button').removeClass('selected');
	for (var i = 0; i < selectedChamps.length; i++) {
		$('#champions-wrapper').find("button[aria-label='" + selectedChamps[i] + "']").addClass('selected');
	}

	priorityChamps = priorityChamps.unique();
	$('#champions-wrapper button').removeClass('priority');
	for (var i = 0; i < priorityChamps.length; i++) {
		$('#champions-wrapper').find("button[aria-label='" + priorityChamps[i] + "']").addClass('priority');
	}
}

function getSuggestedComps() {
    if (!window.selectedChamps.length && !window.selectedItems.length) {
        return [];
    }
    
    var suggestedComps = window.teamComps
        .filter(comp => {
            for (var i = 0; i < window.selectedChamps.length; i++) {
                if (!comp.champs.contains(window.selectedChamps[i]))
                    return false;
            }

            let firstItem = window.combinedItems.find(item => item.name == comp.requiredItems[0]);			
            if (!window.selectedItems.some(selectedItem => firstItem.name == selectedItem || firstItem.baseItems.includes(selectedItem))) {
                return false;
            }

            for (var i = 0; i < window.selectedItems.length; i++) {
				var selectedItem = window.selectedItems[i];
                var compItems = comp.requiredItems.map(fullItem => window.combinedItems.find(item => item.name == fullItem).baseItems).flat()
                if (!(compItems.contains(selectedItem) || comp.requiredItems.includes(selectedItem)))
                    return false;
            }

            return true;
        });
   
    return suggestedComps;
}

function loadScript(name) {
	var script = document.createElement('script');
	script.src = `./sets/${currentSet}/${name}.js`;
	document.head.appendChild(script);
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