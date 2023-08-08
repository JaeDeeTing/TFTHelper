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
            "Vayne"
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
            "Vayne"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "Lucian (Supers)",
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
        "name": "Lulu (Supers)",
        "champs": [
            "Lulu",
            "Pantheon",
            "Renekton",
            "Lee Sin",
            "Sona",
            "Gangplank",
            "Malphite"
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
            "Riven"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Infinity Edge",
            "Hand of Justice"
        ]
    },
    {
        "name": "Vayne Alt",
        "champs": [
            "Vayne",
            "Nasus",
            "Sylas",
            "Jinx",
            "Riven"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Infinity Edge",
            "Giant Slayer"
        ]
    },
    {
        "name": "Yasuo > TF (Duelists)",
        "champs": [
            "Yasuo",
            "Kayle",
            "Annie",
            "Fiora",
            "Nilah"
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
        "name": "Lulu > TF (Ox Force Spellslingers)",
        "champs": [
            "Lulu",
            "Poppy",
            "Annie",
            "Fiora",
            "Sona"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Statikk Shiv",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Yasuo > Warwick (LaserCorps Hackers)",
        "champs": [
            "Yasuo",
            "Ashe",
            "Renekton",
            "Vi",
            "Vayne"
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
            "Annie"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "XP: Fiora > Jhin (Riftwalker Mascots)",
        "champs": [
            "Fiora",
            "Nasus",
            "Malphite",
            "Vex",
            "Alistar",
            "Pyke"
        ],
        "fullItems": [
            "Infinity Edge",
            "Last Whisper",
            "Giant Slayer"
        ]
    },
    {
        "name": "Camille > Jhin (Renegades)",
        "champs": [
            "Camille",
            "Blitzcrank",
            "Lucian",
            "Sylas",
            "Vi",
            "Pyke"
        ],
        "fullItems": [
            "Infinity Edge",
            "Last Whisper",
            "Giant Slayer"
        ]
    },
    {
        "name": "Lucian (Quickdraws)",
        "champs": [
            "Lucian",
            "Blitzcrank",
            "Sylas",
            "Camille",
            "Ezreal"
        ],
        "fullItems": [
            "Blue Buff",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ]
    },
    {
        "name": "Ashe > Belveth (Aegis Threats)",
        "champs": [
            "Ashe",
            "Renekton",
            "Vi",
            "Yasuo",
            "Vayne"
        ],
        "fullItems": [
            "Last Whisper",
            "Hextech Gunblade",
            "Giant Slayer"
        ]
    },
    {
        "name": "Ashe > Samira (Defender Sureshot)",
        "champs": [
            "Ashe",
            "Renekton",
            "Vi",
            "Yasuo",
            "Vayne"
        ],
        "fullItems": [
            "Giant Slayer",
            "Hextech Gunblade",
            "Last Whisper"
        ]
    }
];

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));