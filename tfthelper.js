const currentSet = 6;
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
		appendImageButton(selectChamps[i].image, selectChamps[i].name, 'champions-' + cost, 'col-2', championClickHandler);
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
}

function selectedItemClickHandler(e) {
	e.currentTarget.remove();
	var selected = e.currentTarget.getAttribute('aria-label');
	var index = window.selectedItems.indexOf(selected);
    window.selectedItems.splice(index, 1);
    updateSuggestedComps();
}

function appendImageButton(src, alt, container, className, handler) {
	var image = document.createElement('img');
	image.src = src;
	var button = document.createElement('button');
	button.setAttribute("aria-label", alt);
	button.appendChild(image);
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