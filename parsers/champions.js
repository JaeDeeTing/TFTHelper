let champs = [];
for (let rank = 1; rank <= 5; rank++) {
    let champIcons = document.getElementsByClassName("c" + rank);
    for (let i = 0; i < champIcons.length; i++) {
        let champ = champIcons[i].querySelector(".character-icon").getAttribute("alt");
        let image = champIcons[i].querySelector(".character-icon").getAttribute("src");
        champs.push({
            name: champ,
            cost: rank,
            image: image
        })
    }
}

console.log(champs);