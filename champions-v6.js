class Champion {
  constructor(name, cost, image) {
    this.name = name;
    this.cost = cost;
    this.image = image;
  }
}

exportedChamps = [
    {
        "name": "Caitlyn",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Caitlyn.png"
    },
    {
        "name": "Camille",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Camille.png"
    },
    {
        "name": "Darius",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Darius.png"
    },
    {
        "name": "Ezreal",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Ezreal.png"
    },
    {
        "name": "Garen",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Garen.png"
    },
    {
        "name": "Graves",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Graves.png"
    },
    {
        "name": "Illaoi",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Illaoi.png"
    },
    {
        "name": "Kassadin",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Kassadin.png"
    },
    {
        "name": "Poppy",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Poppy.png"
    },
    {
        "name": "Singed",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Singed.png"
    },
    {
        "name": "Twisted Fate",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/TwistedFate.png"
    },
    {
        "name": "Twitch",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Twitch.png"
    },
    {
        "name": "Ziggs",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/6/Ziggs.png"
    },
    {
        "name": "Blitzcrank",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Blitzcrank.png"
    },
    {
        "name": "Katarina",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Katarina.png"
    },
    {
        "name": "KogMaw",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/KogMaw.png"
    },
    {
        "name": "Lulu",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Lulu.png"
    },
    {
        "name": "Quinn",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Quinn.png"
    },
    {
        "name": "Swain",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Swain.png"
    },
    {
        "name": "Talon",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Talon.png"
    },
    {
        "name": "Tristana",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Tristana.png"
    },
    {
        "name": "Trundle",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Trundle.png"
    },
    {
        "name": "Vi",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Vi.png"
    },
    {
        "name": "Warwick",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Warwick.png"
    },
    {
        "name": "Zilean",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Zilean.png"
    },
    {
        "name": "Zyra",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/6/Zyra.png"
    },
    {
        "name": "Chogath",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Chogath.png"
    },
    {
        "name": "Ekko",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Ekko.png"
    },
    {
        "name": "Gangplank",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Gangplank.png"
    },
    {
        "name": "Heimerdinger",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Heimerdinger.png"
    },
    {
        "name": "Leona",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Leona.png"
    },
    {
        "name": "Lissandra",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Lissandra.png"
    },
    {
        "name": "Malzahar",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Malzahar.png"
    },
    {
        "name": "Miss Fortune",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/MissFortune.png"
    },
    {
        "name": "Samira",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Samira.png"
    },
    {
        "name": "Shaco",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Shaco.png"
    },
    {
        "name": "Taric",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Taric.png"
    },
    {
        "name": "Vex",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Vex.png"
    },
    {
        "name": "Zac",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/6/Zac.png"
    },
    {
        "name": "Braum",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Braum.png"
    },
    {
        "name": "Dr Mundo",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/DrMundo.png"
    },
    {
        "name": "Fiora",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Fiora.png"
    },
    {
        "name": "Janna",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Janna.png"
    },
    {
        "name": "Jhin",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Jhin.png"
    },
    {
        "name": "Lux",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Lux.png"
    },
    {
        "name": "Orianna",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Orianna.png"
    },
    {
        "name": "Seraphine",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Seraphine.png"
    },
    {
        "name": "Sion",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Sion.png"
    },
    {
        "name": "Urgot",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Urgot.png"
    },
    {
        "name": "Yone",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/6/Yone.png"
    },
    {
        "name": "Akali",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Akali.png"
    },
    {
        "name": "Galio",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Galio.png"
    },
    {
        "name": "Jayce",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Jayce.png"
    },
    {
        "name": "Jinx",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Jinx.png"
    },
    {
        "name": "Kaisa",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Kaisa.png"
    },
    {
        "name": "Tahm Kench",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/TahmKench.png"
    },
    {
        "name": "Veigar",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Veigar.png"
    },
    {
        "name": "Viktor",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Viktor.png"
    },
    {
        "name": "Yuumi",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/6/Yuumi.png"
    }
];

window.champions = exportedChamps.map(champ => new Champion(champ.name, champ.cost, champ.image));
