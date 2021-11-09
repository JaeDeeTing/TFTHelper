class TeamComp {
    constructor(name, champs, requiredItems) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
    }
}

let exportedComps = [
    {
        "name": "Twisted Fate > Lux (Arcanists)",
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
        "name": "Twitch > Urgot (Chemtech Twinshots)",
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
        "name": "Tristana (Yordles)",
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
        "name": "Quinn > Fiora (Enchanter Challengers)",
        "champs": [
            "Quinn",
            "Camille",
            "Warwick",
            "Zilean",
            "Samira",
        ],
        "fullItems": [
            "Infinity Edge",
            "Jeweled Gauntlet",
            "Hand of Justice"
        ]
    },
    {
        "name": "Shaco (Syndicate Assassins)",
        "champs": [
            "Shaco",
            "Darius",
            "Zyra",
            "Katarina",
            "Leona",
            "Twitch",
            "Ekko"
        ],
        "fullItems": [
            "Bloodthirster",
            "Infinity Edge",
            "Rapid Firecannon"
        ]
    },
    {
        "name": "Malzahar (Chemtech Mutants)",
        "champs": [
            "Malzahar",
            "Kassadin",
            "KogMaw",
            "Chogath",
            "Zac"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Blue Buff",
            "Hextech Gunblade"
        ]
    },
    {
        "name": "Ezreal > Orianna (Innovators)",
        "champs": [
            "Ezreal",
            "Singed",
            "Warwick",
            "Heimerdinger",
            "Lissandra"
        ],
        "fullItems": [
            "Spear of Shojin",
            "Jeweled Gauntlet",
            "Archangel's Staff"
        ]
    },
    {
        "name": "Ezreal > Sion (Imperial Colossus)",
        "champs": [
            "Ezreal",
            "Garen",
            "Kassadin",
            "Blitzcrank",
            "Leona"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Infinity Edge",
            "Hand of Justice"
        ]
    },
    {
        "name": "Gangplank (Twinshot Mercenaries)",
        "champs": [
            "Gangplank",
            "Illaoi",
            "KogMaw",
            "Vi",
            "Miss Fortune"
        ],
        "fullItems": [
            "Bloodthirster",
            "Infinity Edge",
            "Rapid Firecannon"
        ]
    },
    {
        "name": "KogMaw > Kaisa",
        "champs": [
            "KogMaw",
            "Kassadin",
            "Blitzcrank",
            "Illaoi",
            "Chogath"
        ],
        "fullItems": [
            "Hand of Justice",
            "Guinsoo's Rageblade",
            "Giant Slayer"
        ]
    },
    {
        "name": "KogMaw > Yone (Academy)",
        "champs": [
            "KogMaw",
            "Garen",
            "Graves",
            "Katarina",
            "Leona"
        ],
        "fullItems": [
            "Guardian Angel",
            "Guinsoo's Rageblade",
            "Runaan's Hurricane"
        ]
    },
    {
        "name": "Twitch > Yone (Academy)",
        "champs": [
            "Twitch",
            "Garen",
            "Graves",
            "Katarina",
            "Leona"
        ],
        "fullItems": [
            "Guardian Angel",
            "Guinsoo's Rageblade",
            "Runaan's Hurricane"
        ]
    }
]

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems));