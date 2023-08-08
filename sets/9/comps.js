class TeamComp {
    constructor(name, champs, requiredItems, link, tier) {
        this.name = name;
        this.champs = champs;
        this.requiredItems = requiredItems;
        this.link = link;
        this.tier = tier;
    }
}

let exportedComps = [
    {
        "name": "Jhin > Aphelios (Freljord Deadeyes)",
        "champs": [
            "Jhin",
            "Irelia",
            "Ashe",
            "Sett",
            "Warwick"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer",
            "Infinity Edge"
        ],
        "tier": 1
    },
    {
        "name": "Jhin > Aphelios Alt",
        "champs": [
            "Jhin",
            "Renekton",
            "Chogath",
            "Ashe",
            "Vi"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Deathblade",
            "Infinity Edge"
        ],
        "link": "https://app.mobalytics.gg/tft/comps-guide/icy-deadeyes-2QiAZoiRvOxnNFV1LHr3YJE98SU",
        "tier": 2
    },
    {
        "name": "Ionian Invokers",
        "champs": [
            "Karma",
            "Cassiopeia",
            "Galio",
            "Soraka",
            "Taric"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Hextech Gunblade",
            "Giant Slayer"
        ],
        "tier": 1
    },
    {
        "name": "Malzahar > Kaisa (Voids)",
        "champs": [
            "Malzahar",
            "Chogath",
            "Orianna",
            "Kassadin",
            "RekSai"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Jeweled Gauntlet",
            "Hextech Gunblade"
        ],
        "tier": 1
    },
    {
        "name": "Trist > Zeri",
        "champs": [
            "Tristana",
            "Orianna",
            "Renekton",
            "Vi",
            "Jinx"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer",
            "Infinity Edge"
        ],
        "link": "https://app.mobalytics.gg/tft/comps-guide/guns-out-2QklJSwBOI9OO20rnrkb8gyJKeK",
        "tier": 1
    },
    {
        "name": "Jinx > Kalista (Challengers)",
        "champs": [
            "Jinx",
            "Irelia",
            "Sett",
            "Warwick",
            "Zed"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer",
            "Statikk Shiv"
        ],
        "tier": 2
    },
    {
        "name": "Kayle > Garen (Demacian Juggernauts)",
        "champs": [
            "Kayle",
            "Galio",
            "Sett",
            "Zed",
            "Garen",
            "Warwick"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Bloodthirster",
            "Zeke's Herald"
        ],
        "tier": 2
    },
    {
        "name": "Malzahar > Lux (Demacian Sorcerers)",
        "champs": [
            "Malzahar",
            "Kassadin",
            "Swain",
            "Taric",
            "Velkoz"
        ],
        "fullItems": [
            "Jeweled Gauntlet",
            "Hextech Gunblade",
            "Giant Slayer"
        ],
        "tier": 1
    },
    {
        "name": "Teemo > Lux (Sorcerer Emblem)",
        "champs": [
            "Teemo",
            "Malzahar",
            "Renekton",
            "Swain"
        ],
        "fullItems": [
            "Archangel's Staff",
            "Jeweled Gauntlet",
            "Hextech Gunblade"
        ],
        "link": "https://app.mobalytics.gg/tft/comps-guide/arcane-wizards-2R6SVs7dl4KgkAF8wFJ4Tyol9B3",
        "tier": 1
    },
    {
        "name": "Zed > Yasuo (Ionian Challengers)",
        "champs": [
            "Zed",
            "Irelia",
            "Jinx",
            "Sett",
            "Warwick"
        ],
        "fullItems": [
            "Bloodthirster",
            "Titan's Resolve",
            "Giant Slayer"
        ],
        "tier": 2
    },
    {
        "name": "Ashe > Azir (Strategists)",
        "champs": [
            "Ashe",
            "Cassiopeia",
            "Renekton",
            "Vi",
            "Akshan",
            "Taliyah",
            "Teemo",
            "Swain"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ],
        "tier": 2
    },
    {
        "name": "Ashe > Azir (Shurimans)",
        "champs": [
            "Ashe",
            "Cassiopeia",
            "Renekton",
            "Vi",
            "Akshan",
            "Taliyah"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Jeweled Gauntlet",
            "Giant Slayer"
        ],
        "tier": 2
    },
    {
        "name": "Vi > RekSai (Void Bruisers)",
        "champs": [
            "Vi",
            "Chogath",
            "Malzahar",
            "Teemo",
            "Velkoz",
            "RekSai"
        ],
        "fullItems": [
            "Titan's Resolve",
            "Bloodthirster",
            "Infinity Edge"
        ],
        "tier": 2
    },
    {
        "name": "Rogue Slayers",
        "champs": [
            "Zed",
            "Samira",
            "Kled",
            "Warwick",
            "Darius",
            "Kayle",
            "Viego"
        ],
        "fullItems": [
            "Bloodthirster",
            "Titan's Resolve",
            "Infinity Edge"
        ],
        "tier": 2
    },
    {
        "name": "Yordle Gunners (HR:3-1)",
        "champs": [
            "Tristana",
            "Maokai",
            "Poppy",
            "Viego",
            "Kalista",
            "Jinx"
        ],
        "fullItems": [
            "Last Whisper",
            "Giant Slayer",
            "Hextech Gunblade"
        ],
        "tier": 2
    },
    {
        "name": "Shadow Isles Rogues (HR:3-1)",
        "champs": [
            "Viego",
            "Maokai",
            "Kassadin",
            "Zed",
            "Kalista",
            "Ekko"
        ],
        "fullItems": [
            "Bloodthirster",
            "Infinity Edge",
            "Titan's Resolve"
        ],
        "tier": 2
    },
    {
        "name": "Shadow Isles",
        "champs": [
            "Kalista",
            "Irelia",
            "Maokai",
            "Poppy",
            "Samira",
            "Warwick"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Statikk Shiv",
            "Hand of Justice"
        ],
        "link": "https://app.mobalytics.gg/tft/comps-guide/shadow-spears-2RDUx5ac3OOF6kLMfbzvwxdOsqa",
        "tier": 1
    },
    {
        "name": "Jhin > Aphelios (Exp: Targons)",
        "champs": [
            "Jhin",
            "Ashe",
            "Soraka",
            "Galio",
            "Taric"
        ],
        "fullItems": [
            "Guinsoo's Rageblade",
            "Giant Slayer",
            "Infinity Edge"
        ],
        "tier": 2
    },
    {
        "name": "Samira > NOXUS",
        "champs": [
            "Samira",
            "Orianna",
            "Kled",
            "Swain"
        ],
        "fullItems": [
            "Hand of Justice",
            "Infinity Edge",
            "Jeweled Gauntlet"
        ],
        "link": "https://app.mobalytics.gg/tft/comps-guide/noxus-empire-2Qi9L1kpHOoGk0kUNcsZtPe8c9D",
        "tier": 1
    },
    {
        "name": "Jhin > Akshan",
        "champs": [
            "Jhin",
            "Cassiopeia",
            "Renekton",
            "Chogath",
            "Ashe"
        ],
        "fullItems": [
            "Runaan's Hurricane",
            "Deathblade",
            "Infinity Edge"
        ],
        "link": "https://app.mobalytics.gg/tft/comps-guide/icy-rogue-2ST7ipaAtopFAGD83AgpWh3cokS",
        "tier": 2
    }
];

window.teamComps = exportedComps.map(comp => new TeamComp(comp.name, comp.champs, comp.fullItems, comp.link, comp.tier));