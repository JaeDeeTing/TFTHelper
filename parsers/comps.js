Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === v) return true;
    }
    return false;
  };

let comps = document.getElementsByClassName("team-portrait");
let exportedComps = [];
for (let i = 0; i < comps.length; i++) {
    let comp = comps[i];
    
    //get name
    let rank = comp.querySelector(".team-rank").innerText;
    let name = comp.querySelector(".team-name-elipsis").innerText.split('\n')[0];
    //console.log(rank + ": " + name);

    //get early comp
    comp.querySelector(".team-more").click()
    let champs = comp.querySelector(".mid .team-expanded-list").getElementsByClassName("characters-item");
    let champNames = [];
    for (let j = 0; j < champs.length; j++) {
        let champName = champs[j].querySelector(".character-icon").getAttribute("alt")
        //console.log(champName);
        champNames.push(champName);
    }

    //get early items
    let fullItems = comp.querySelector(".carousel-items").getElementsByClassName("carousel-full");
    let itemNames = [];
    for (let j = 0; j < fullItems.length; j++) {
        let itemName = fullItems[j].querySelector(".character-icon").getAttribute("alt");
        if (!itemNames.contains(itemName)) {
            itemNames.push(itemName);
            //console.log("ITEMIZE: ", itemName)
        }
    }

    exportedComps.push({
        name: rank + ": " + name,
        rawChamps: champNames,
        fullItems: itemNames
    })
}

console.log(exportedComps);