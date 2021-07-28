function init() {
	appendChampions(1);
	appendChampions(2);
	appendChampions(3);
	
	for (var i = 0; i < window.baseItems.length; i++) {
		appendButton(window.baseItems[i], 'base-items', 'col-6', itemClickHandler);
	}
	
	initSeasonFeatures();
	resetChoices();
	logBestStarterItems();
}

function resetChoices() {
    window.selectedChamps = [];
    window.selectedItems = [];
    document.getElementById('selected-champions').innerHTML = '';
    document.getElementById('selected-items').innerHTML = '';
    document.getElementById('suggested-comps').innerHTML = '';
	$('#champions-wrapper button').prop('disabled', true);
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
    
    document.getElementById('suggested-comps').innerHTML = '';
    for (var i = 0; i < suggestedComps.length; i++) {
		appendComp(suggestedComps[i]);
		allChamps = allChamps.concat(suggestedComps[i].champs);
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