let items = [];

let itemIcons = document.querySelectorAll('.character-wrapper[type=Combined]');
for (let i = 0; i < itemIcons.length; i++) {
    let item = itemIcons[i].querySelector(".character-icon").getAttribute("alt");
    let image = itemIcons[i].querySelector(".character-icon").getAttribute("src");
    
    itemIcons[i].click();
    var components = document.querySelectorAll(".table.main .rt-tbody .character-icon");
    if (components.length < 2) {
        console.warn(`Failed to find components for ${item}`);
        continue;
    }

    items.push({
        name: item,
        image: image,
        component1: components[0].getAttribute("alt"),
        component2: components[1].getAttribute("alt")
    })
}

console.log(items);