class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "Lulu > TF (Ox Force Spellslingers)",
        "champs": [
            "Lulu",
            "Poppy",
            "Annie",
            "Fiora",
            "Sona",
            "Alistar"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Statikk Shiv",
            "Hextech Gunblade"
        ]
    },
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
            "Gangplank",
            "Malphite",
            "Alistar"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet",
            "Giant Slayer"
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
        "name": "Kayle > Twisted Fate",
        "champs": [
            "Kayle",
            "Annie",
            "Fiora",
            "Yasuo",
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
        "name": "Yasuo > Twisted Fate",
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
            "Pyke",
            "Leblanc",
            "Shen"
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
            "Pantheon",
            "Riven"
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
            "Lee Sin",
            "Alistar"
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
            "Malphite",
            "Alistar",
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
            "Malphite",
            "Alistar",
            "Vex"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    }
];

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));