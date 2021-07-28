function initSeasonFeatures() {
	// $('#seasonFeaturesTitle').text('Shadow Items');
	
	// for (var i = 0; i < window.baseItems.length; i++) {
	// 	appendButton(window.baseItems[i], 'season-features', 'col-2', shadowItemClickHandler);
	// }
}

function resetSeasonFeatures() {
	// window.selectedElement = null;
	// $('#season-features button').removeClass('selected');
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
            if (!window.selectedItems.some(selectedItem => firstItem.baseItems.includes(selectedItem))) {
                return false;
            }

            for (var i = 0; i < window.selectedItems.length; i++) {
                var compItems = comp.requiredItems.map(fullItem => window.combinedItems.find(item => item.name == fullItem).baseItems).flat()
                if (!compItems.contains(window.selectedItems[i]))
                    return false;
            }

            return true;
        });
   
    return suggestedComps;
}