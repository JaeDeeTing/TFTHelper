let comps = document.getElementsByClassName("team-portrait");
for (let i = 0; i < comps.length; i++) {
    let comp = comps[i];
    let rank = comp.querySelector(".team-rank").innerText;
    let name = comp.querySelector(".team-name-elipsis").innerText.split('\n')[0];
    console.log(rank + ": " + name)
    comp.querySelector(".team-more").click()
    let champs = comp.querySelector(".mid .team-expanded-list").getElementsByClassName("characters-item");
    let champNames = [];
    for (let j = 0; j < champs.length; j++) {
        let champName = champs[j].querySelector(".character-icon").getAttribute("alt")
        console.log(champName);
        champNames.push(champName);
    }

    
}