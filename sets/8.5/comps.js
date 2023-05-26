class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "Gadgeteens",
        "champs": [
            "Gnar",
            "Poppy",
            "Annie",
            "Jinx",
            "Alistar"
        ],
        "fullItems": [
            "Bloodthirster",
            "Titan's Resolve",
            "Hand of Justice"
        ]
    },
    {
        "name": "Aegis Quickdraw",
        "champs": [
            "Kaisa",
            "Kayle",
            "Ezreal",
            "Lee Sin",
            "Vi",
            "Rell",
            "Nilah"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Statikk Shiv",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Ezreal > MF (Anima Squad)",
        "champs": [
            "Ezreal",
            "Nasus",
            "Sylas",
            "Jinx",
            "Riven",
            "Vayne",
            "Alistar"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "Lucian > MF (Anima Squad)",
        "champs": [
            "Lucian",
            "Nasus",
            "Sylas",
            "Jinx",
            "Riven",
            "Vayne",
            "Alistar"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "League of Draven",
        "champs": [
            "Draven",
            "Poppy",
            "Wukong",
            "Vi",
            "Jax",
            "Gangplank",
            "Malphite"
        ],
        "fullItems": [
            "Infinity Edge",
            "Last Whisper",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Lucian",
        "champs": [
            "Lucian",
            "Pantheon",
            "Ezreal",
            "Lee Sin",
            "Shen",
            "Gangplank",
            "Malphite"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "Lulu",
        "champs": [
            "Lulu",
            "Pantheon",
            "Renekton",
            "Lee Sin",
            "Sona",
            "Gangplank"
        ],
        "fullItems": [
            "Blue Buff",
            "Hextech Gunblade",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "Vayne",
        "champs": [
            "Vayne",
            "Nasus",
            "Sylas",
            "Jinx",
            "Riven",
            "Alistar",
            "Nilah"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Infinity Edge",
            "Hand of Justice"
        ]
    },
    {
        "name": "Yasuo > TF (Duelists)",
        "champs": [
            "Yasuo",
            "Kayle",
            "Annie",
            "Fiora",
            "Nilah",
            "Vayne"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Statikk Shiv",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Gadgeteen Hackers",
        "champs": [
            "Gnar",
            "Poppy",
            "Annie",
            "Jinx",
            "Alistar",
            "Pyke"
        ],
        "fullItems": [
            "Bloodthirster",
            "Titan's Resolve",
            "Hand of Justice"
        ]
    },
    {
        "name": "Hacker Spellslingers",
        "champs": [
            "Leblanc",
            "Blitzcrank",
            "Lee Sin",
            "Pyke",
            "Sona",
            "Pantheon"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "Hearts",
        "champs": [
            "Sona",
            "Lulu",
            "Poppy",
            "Annie",
            "Fiora",
            "Pantheon",
            "Lee Sin"
        ],
        "fullItems": [
            "Blue Buff",
            "Hextech Gunblade",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "Yasuo > Warwick (LaserCorps Hackers)",
        "champs": [
            "Yasuo",
            "Ashe",
            "Renekton",
            "Pyke",
            "Vayne",
            "Sona",
            "Shen"
        ],
        "fullItems": [
            "Bloodthirster",
            "Titan's Resolve",
            "Edge of Night"
        ]
    },
    {
        "name": "Lucian > Vex (Riftwalker Mascots)",
        "champs": [
            "Lucian",
            "Pantheon",
            "Ezreal",
            "Lee Sin",
            "Shen",
            "Nasus",
            "Vex"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "Lucian > Vex (Riftwalker Supers)",
        "champs": [
            "Lucian",
            "Pantheon",
            "Ezreal",
            "Lee Sin",
            "Shen",
            "Gangplank",
            "Pyke",
            "Vex"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "Lux > Neeko (Star Guardian Spellslingers)",
        "champs": [
            "Lux",
            "Lulu",
            "Poppy",
            "Rell",
            "Annie",
            "Nilah",
            "Alistar"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet",
            "Hextech Gunblade"
        ]
    }
];

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));