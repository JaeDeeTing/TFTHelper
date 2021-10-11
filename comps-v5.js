class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "Khazix",
        "champs": [
            "Khazix",
            "Gragas",
            "Pyke",
            "Soraka",
            "Nidalee"
        ],
        "fullItems": [
            "Hand of Justice",
            "Guardian Angel",
            "Infinity Edge"
        ]
    },
    {
        "name": "Gragas",
        "champs": [
            "Gragas",
            "Khazix",
            "Pyke",
            "Soraka",
            "Nidalee"
        ],
        "fullItems": [
            "Warmog's Armor",
            "Sunfire Cape",
            "Gargoyle Stoneplate"
        ]
    },
    {
        "name": "Kled",
        "champs": [
            "Kled",
            "Poppy",
            "Kennen",
            "Ziggs",
            "Nautilus"
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Last Whisper",
            "Infinity Edge"
        ]
    },
    {
        "name": "Vayne > Draven",
        "champs": [
            "Vayne",
            "Hecarim",
            "Thresh",
            "Nautilus",
            "Irelia",
            "Varus"
        ],
        "fullItems": [
            "Bloodthirster",
            "Guinsoo's Rageblade",
            "Infinity Edge"
        ]
    },
    {
        "name": "Vayne",
        "champs": [
            "Vayne",
            "Hecarim",
            "Thresh",
            "Nautilus",
            "Varus"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Runaan's Hurricane",
            "Runaan's Hurricane"
        ]
    },
    {
        "name": "Miss Fortune",
        "champs": [
            "Miss Fortune",
            "Vayne",
            "Hecarim",
            "Thresh",
            "Nautilus",
            "Sejuani"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Spear of Shojin",
            "Archangel's Staff"
        ]
    },
    {
        "name": "Tristana",
        "champs": [
            "Tristana",
            "Poppy",
            "Kennen",
            "Lulu",
            "Miss Fortune"
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Last Whisper",
            "Bloodthirster"
        ]
    }
]

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));