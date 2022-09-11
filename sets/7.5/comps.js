class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "S: Scalescorn Assassins",
        "champs": [
            "Qiyana",
            "Jax",
            "Diana",
            "Lee Sin",
            "Olaf"
        ],
        "fullItems": [
            "Bloodthirster",
            "Giant Slayer"
        ]
    },
    {
        "name": "S: Mirage Cavaliers",
        "champs": [
            "Lillia",
            "Rell",
            "Yone",
            "Nunu",
            "Olaf"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer"
        ]
    },
    {
        "name": "S: Ragewing Guild",
        "champs": [
            "Ezreal",
            "Braum",
            "Qiyana",
            "Diana",
            "Rakan"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer"
        ]
    },
    {
        "name": "S: Tempest Dragonmancer",
        "champs": [
            "Sett",
            "Kaisa",
            "Qiyana",
            "Lee Sin",
            "Volibear"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Infinity Edge"
        ]
    },
    {
        "name": "S: Scalescorn Warriors",
        "champs": [
            "Qiyana",
            "Jax",
            "Diana",
            "Lee Sin",
            "Olaf"
        ],
        "fullItems": [
            "Bloodthirster",
            "Giant Slayer"
        ]
    },
    {
        "name": "A: Darkflights",
        "champs": [
            "Ezreal",
            "Sejuani",
            "Qiyana",
            "Rell",
            "Rengar"
        ],
        "fullItems": [
            "Protector's Vow",
            "Morellonomicon"
        ]
    },
    {
        "name": "A: Lagoon Mages",
        "champs": [
            "Malphite",
            "Taliyah",
            "Kaisa",
            "Lux",
            "Sylas"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "B: Prodigy Cannoneers",
        "champs": [
            "Senna",
            "Zac",
            "Rakan",
            "Seraphine",
            "Zeri"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Spear of Shojin"
        ]
    },
    {
        "name": "B: Astral Mages",
        "champs": [
            "Skarner",
            "Vladimir",
            "Lux",
            "Zyra",
            "Sylas"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Archangel's Staff"
        ]
    },
    {
        "name": "B: Astral Swiftshots",
        "champs": [
            "Skarner",
            "Lux",
            "Twitch",
            "Sylas",
            "Varus"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Deathblade"
        ]
    },
    {
        "name": "B: Jade Warriors",
        "champs": [
            "Karma",
            "Jax",
            "Wukong",
            "Diana",
            "Olaf"
        ],
        "fullItems": [
            "Rapid Firecannon",
            "Infinity Edge"
        ]
    },
    {
        "name": "B: Prodigy Evokers",
        "champs": [
            "Skarner",
            "Vladimir",
            "Lux",
            "Zyra",
            "Sylas"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Archangel's Staff"
        ]
    },
    {
        "name": "B: Prodigy Mages",
        "champs": [
            "Skarner",
            "Vladimir",
            "Lux",
            "Zyra",
            "Sylas"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Archangel's Staff"
        ]
    }
];

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));