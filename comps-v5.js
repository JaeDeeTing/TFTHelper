class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "S: Revenant Mystics",
        "rawChamps": [
            "Aatrox",
            "Leona",
            "Syndra",
            "Thresh",
            "Riven"
        ],
        "fullItems": [
            "Archangel's Staff",
            "Spear of Shojin"
        ]
    },
    {
        "name": "S: Knight Skirmishers",
        "rawChamps": [
            "Olaf",
            "Senna",
            "Irelia",
            "Tristana",
            "Lee Sin"
        ],
        "fullItems": [
            "Bloodthirster",
            "Runaan's Hurricane"
        ]
    },
    {
        "name": "S: Forgotten Ironclad",
        "rawChamps": [
            "Vayne",
            "Hecarim",
            "Nautilus",
            "Thresh",
            "Varus"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "S: Nightbringer Skirmishers",
        "rawChamps": [
            "Vladimir",
            "Kalista",
            "Sejuani",
            "Lee Sin",
            "Yasuo"
        ],
        "fullItems": [
            "Rapid Firecannon",
            "Runaan's Hurricane",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "S: Abomination Revenants",
        "rawChamps": [
            "Kalista",
            "Brand",
            "Sett",
            "Nunu",
            "Zyra"
        ],
        "fullItems": [
            "Archangel's Staff",
            "Spear of Shojin"
        ]
    },
    {
        "name": "S: Redeemed Ironclad",
        "rawChamps": [
            "Leona",
            "Vayne",
            "Nautilus",
            "Varus",
            "Lux"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Spear of Shojin"
        ]
    },
    {
        "name": "S: Revenant Assassins",
        "rawChamps": [
            "Olaf",
            "Irelia",
            "Pyke",
            "Lee Sin",
            "Nocturne"
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Infinity Edge"
        ]
    },
    {
        "name": "S: Sentinel Cannoneers",
        "rawChamps": [
            "Olaf",
            "Senna",
            "Irelia",
            "Tristana",
            "Lee Sin"
        ],
        "fullItems": [
            "Bloodthirster",
            "Morellonomicon"
        ]
    },
    {
        "name": "A: Dawnbringer Invokers",
        "rawChamps": [
            "Aatrox",
            "Leona",
            "Syndra",
            "Thresh",
            "Riven"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "A: Forgotten Cavaliers",
        "rawChamps": [
            "Brand",
            "Hecarim",
            "Sejuani",
            "Thresh",
            "Zyra"
        ],
        "fullItems": [
            "Blue Buff",
            "Bramble Vest",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "A: Revenant Invokers",
        "rawChamps": [
            "Aatrox",
            "Leona",
            "Syndra",
            "Thresh",
            "Riven"
        ],
        "fullItems": [
            "Archangel's Staff",
            "Spear of Shojin"
        ]
    },
    {
        "name": "A: Hellion Revenants",
        "rawChamps": [
            "Kled",
            "Poppy",
            "Ziggs",
            "Kennen",
            "Lulu"
        ],
        "fullItems": [
            "Morellonomicon",
            "Guardian Angel"
        ]
    },
    {
        "name": "A: Sentinel Skirmishers",
        "rawChamps": [
            "Olaf",
            "Senna",
            "Irelia",
            "Tristana",
            "Lee Sin"
        ],
        "fullItems": [
            "Morellonomicon",
            "Bloodthirster"
        ]
    },
    {
        "name": "B: Nightbringer Abominations",
        "rawChamps": [
            "Vladimir",
            "Kalista",
            "Sejuani",
            "Lee Sin",
            "Yasuo"
        ],
        "fullItems": [
            "Rapid Firecannon",
            "Runaan's Hurricane",
            "Last Whisper"
        ]
    },
    {
        "name": "B: Forgotten Rangers",
        "rawChamps": [
            "Vayne",
            "Hecarim",
            "Nautilus",
            "Thresh",
            "Varus"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Runaan's Hurricane"
        ]
    }
]

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.rawChamps, comp.fullItems));