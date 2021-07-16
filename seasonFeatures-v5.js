function initSeasonFeatures() {
	$('#seasonFeaturesTitle').text('Shadow Items');
	
	for (var i = 0; i < window.baseItems.length; i++) {
		appendButton(window.baseItems[i], 'season-features', 'col-2', shadowItemClickHandler);
	}
}

function resetSeasonFeatures() {
	window.selectedElement = null;
	$('#season-features button').removeClass('selected');
}

function shadowItemClickHandler(e) {
	// $('#special-elements button').removeClass('selected');
	// if (e.currentTarget.innerHTML !== window.selectedElement) {
		// $(e.currentTarget).addClass('selected');
		// window.selectedElement = e.currentTarget.innerHTML;
	// } else {
		// window.selectedElement = null;
	// }
	// updateSuggestedComps();
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
			
			// if (window.selectedElement && comp.requiredElement !== window.selectedElement) {
				// return false;
			// }
            
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