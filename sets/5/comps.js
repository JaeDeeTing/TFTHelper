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
    },
    {
        "name": "Tristana > Jax",
        "champs": [
            "Tristana",
            "Olaf",
            "Senna",
            "Irelia",
            "Lee Sin"
        ],
        "fullItems": [
            "Bloodthirster",
            "Runaan's Hurricane",
            "Last Whisper"
        ]
    },
    {
        "name": "Olaf > Akshan",
        "champs": [
            "Olaf",
            "Senna",
            "Irelia",
            "Tristana",
            "Lee Sin"
        ],
        "fullItems": [
            "Deathblade",
            "Bloodthirster",
            "Infinity Edge"
        ]
    },
    {
        "name": "Syndra > Karma",
        "champs": [
            "Syndra",
            "Aatrox",
            "Leona",
            "Thresh",
            "Riven",
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet",
            "Infinity Edge"
        ]
    },
    {
        "name": "Riven",
        "champs": [
            "Riven",
            "Olaf",
            "Irelia",
            "Nidalee",
            "Rakan",
        ],
        "fullItems": [
            "Bloodthirster",
            "Last Whisper",
            "Runaan's Hurricane"
        ]
    },
    {
        "name": "Nidalee",
        "champs": [
            "Nidalee",
            "Olaf",
            "Irelia",
            "Riven",
            "Rakan",
        ],
        "fullItems": [
            "Hand of Justice",
            "Runaan's Hurricane",
            "Bloodthirster"
        ]
    },
    {
        "name": "Kalista",
        "champs": [
            "Kalista",
            "Aatrox",
            "Leona",
            "Syndra",
            "Thresh",
        ],
        "fullItems": [
            "Infinity Edge",
            "Runaan's Hurricane",
            "Last Whisper"
        ]
    },
    {
        "name": "Yasuo",
        "champs": [
            "Yasuo",
            "Vladimir",
            "Sejuani",
            "Kalista",
            "Lee Sin",
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Jeweled Gauntlet",
            "Rapid Firecannon"
        ]
    },
    {
        "name": "Tristana > Kayle",
        "champs": [
            "Tristana",
            "Leona",
            "Poppy",
            "Nautilus",
            "Thresh",
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Guardian Angel",
            "Hand of Justice"
        ]
    },
    {
        "name": "Vayne > Velkoz",
        "champs": [
            "Vayne",
            "Leona",
            "Thresh",
            "Varus",
            "Lux",
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Spear of Shojin",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Olaf > Nocturne",
        "champs": [
            "Olaf",
            "Irelia",
            "Pyke",
            "Lee Sin",
            "Nocturne",
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Infinity Edge",
            "Last Whisper"
        ]
    },
    {
        "name": "Olaf > Nocturne",
        "champs": [
            "Olaf",
            "Irelia",
            "Pyke",
            "Lee Sin",
            "Nocturne",
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Infinity Edge",
            "Last Whisper"
        ]
    }
]

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));