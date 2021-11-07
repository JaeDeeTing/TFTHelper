class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "Ezreal > Jinx",
        "champs": [
            "Ezreal",
            "Ziggs",
            "Blitzcrank",
            "Trundle",
            "Vi"
        ],
        "fullItems": [
            "Hand of Justice",
            "Guinsoo's Rageblade",
            "Giant Slayer"
        ]
    },
    {
        "name": "Twisted Fate > Lux",
        "champs": [
            "Twisted Fate",
            "Darius",
            "Blitzcrank",
            "Zyra",
            "Vex"
        ],
        "fullItems": [
            "Blue Buff",
            "Infinity Edge",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "Twitch > Urgot",
        "champs": [
            "Twitch",
            "Singed",
            "Warwick",
            "Lissandra",
            "Zac"
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Hand of Justice",
            "Giant Slayer"
        ]
    },
    {
        "name": "Tristana",
        "champs": [
            "Tristana",
            "Ziggs",
            "Blitzcrank",
            "KogMaw",
            "Vex"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Bloodthirster",
            "Giant Slayer"
        ]
    },
    {
        "name": "Twisted Fate > Yone",
        "champs": [
            "Twisted Fate",
            "Garen",
            "Ziggs",
            "Blitzcrank",
            "Leona"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Bloodthirster",
            "Infinity Edge"
        ]
    },
    {
        "name": "Quinn > Fiora",
        "champs": [
            "Quinn",
            "Camille",
            "Warwick",
            "Zilean",
            "Samira",
        ],
        "fullItems": [
            "Hand of Justice",
            "Infinity Edge",
            "Jeweled Gauntlet"
        ]
    },
    {
        "name": "Warwick > Jayce",
        "champs": [
            "Warwick",
            "Singed",
            "Zilean",
            "Heimerdinger",
            "Lissandra"
        ],
        "fullItems": [
            "Titan's Resolve",
            "Spear of Shojin"
        ]
    },
    {
        "name": "Shaco",
        "champs": [
            "Shaco",
            "Darius",
            "Katarina",
            "Zyra",
            "Leona"
        ],
        "fullItems": [
            "Bloodthirster",
            "Infinity Edge",
            "Rapid Firecannon"
        ]
    }
]

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));