function initSeasonFeatures() {
}

function resetSeasonFeatures() {
}

function shadowItemClickHandler(e) {
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