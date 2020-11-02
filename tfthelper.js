function init() {
	appendChampions(1);
	appendChampions(2);
	
	for (var i = 0; i < window.baseItems.length; i++) {
		appendButton(window.baseItems[i], 'base-items', 'col-6', itemClickHandler);
	}
}

function appendChampions(cost) {
	var selectChamps = window.champions.filter(_ => _.cost == cost);
	for (var i = 0; i < selectChamps.length; i++) {
		appendButton(selectChamps[i].name, 'champions-' + cost, 'col-3', championClickHandler);
	}
}

function championClickHandler(e) {
	appendButton(e.currentTarget.innerHTML, 'selected-champions', 'col-3', selectedObjectClickHandler);
}

function itemClickHandler(e) {
	appendButton(e.currentTarget.innerHTML, 'selected-items', 'col-6', selectedObjectClickHandler);
}

function selectedObjectClickHandler(e) {
	e.currentTarget.remove();
}

function appendButton(text, container, className, handler) {
	var button = document.createElement('button');
	button.innerHTML = text;
	button.className = className;
	button.onclick = handler;
	document.getElementById(container).appendChild(button);
}

$(window).on('load', init);