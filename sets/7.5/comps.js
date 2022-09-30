class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "Yone > Daeja (Mirage Guild/Cavaliers)",
        "champs": [
            "Yone",
            "Lillia",
            "Nunu",
            "Rell",
            "Olaf"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Lux > Nomsy (Astral Mages)",
        "champs": [
            "Lux",
            "Skarner",
            "Vladimir",
            "Zyra",
            "Sylas"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Archangel's Staff",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Taliyah > Sohm (Lagoon Mages)",
        "champs": [
            "Taliyah",
            "Malphite",
            "Kaisa",
            "Sylas",
            "Lux"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "Ezreal > Xayah (Ragewings)",
        "champs": [
            "Ezreal",
            "Braum",
            "Qiyana",
            "Diana",
            "Rakan"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer",
            "Infinity Edge"
        ]
    },
    {
        "name": "Ezreal > Ao Shin (Tempest)",
        "champs": [
            "Ezreal",
            "Braum",
            "Qiyana",
            "Diana",
            "Rakan"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Archangel's Staff",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Darkflight Cannoneers",
        "champs": [
            "Senna",
            "Sejuani",
            "Aphelios",
            "Rell",
            "Rakan"
        ],
        "fullItems": [
            "Zeke's Herald",
            "Last Whisper",
            "Guinsoo's Rageblade"
        ]
    },
    {
        "name": "Ezreal > Swain",
        "champs": [
            "Ezreal",
            "Sejuani",
            "Qiyana",
            "Rell",
            "Rengar"
        ],
        "fullItems": [
            "Protector's Vow",
            "Morellonomicon",
            "Titan's Resolve"
        ]
    },
    {
        "name": "Lagoon Cannoneers",
        "champs": [
            "Seraphine",
            "Zac",
            "Zyra",
            "Rakan",
            "Zeri"
        ],
        "fullItems": [
            "Morellonomicon",
            "Spear of Shojin",
            "Rabadon's Deathcap"
        ]
    },
    {
        "name": "Scalescorn Assassins/Warriors",
        "champs": [
            "Olaf",
            "Jax",
            "Diana",
            "Qiyana",
            "Lee Sin"
        ],
        "fullItems": [
            "Bloodthirster",
            "Giant Slayer",
            "Runaan's Hurricane"
        ]
    },
    {
        "name": "Astral Swiftshots",
        "champs": [
            "Varus",
            "Skarner",
            "Lux",
            "Twitch",
            "Sylas"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Deathblade",
            "Runaan's Hurricane"
        ]
    },
    {
        "name": "Jade Warriors",
        "champs": [
            "Wukong",
            "Karma",
            "Jax",
            "Diana",
            "Olaf"
        ],
        "fullItems": [
            "Rapid Firecannon",
            "Infinity Edge",
            "Runaan's Hurricane"
        ]
    }
];

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));