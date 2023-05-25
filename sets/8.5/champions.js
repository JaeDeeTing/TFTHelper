class Champion {
    constructor(name, cost, image) {
      this.name = name;
      this.cost = cost;
      this.image = image;
    }
  }
  
  exportedChamps = [
    {
        "name": "Ashe",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Ashe.png"
    },
    {
        "name": "Blitzcrank",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Blitzcrank.png"
    },
    {
        "name": "Gangplank",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Gangplank.png"
    },
    {
        "name": "Kayle",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Kayle.png"
    },
    {
        "name": "Lucian",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Lucian.png"
    },
    {
        "name": "Lulu",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Lulu.png"
    },
    {
        "name": "Lux",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Lux.png"
    },
    {
        "name": "Nasus",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Nasus.png"
    },
    {
        "name": "Pantheon",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Pantheon.png"
    },
    {
        "name": "Poppy",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Poppy.png"
    },
    {
        "name": "Renekton",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Renekton.png"
    },
    {
        "name": "Sylas",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Sylas.png"
    },
    {
        "name": "Wukong",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Wukong.png"
    },
    {
        "name": "Annie",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Annie.png"
    },
    {
        "name": "Camille",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Camille.png"
    },
    {
        "name": "Draven",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Draven.png"
    },
    {
        "name": "Ezreal",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Ezreal.png"
    },
    {
        "name": "Fiora",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Fiora.png"
    },
    {
        "name": "Jinx",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Jinx.png"
    },
    {
        "name": "Lee Sin",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/LeeSin.png"
    },
    {
        "name": "Malphite",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Malphite.png"
    },
    {
        "name": "Pyke",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Pyke.png"
    },
    {
        "name": "Rell",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Rell.png"
    },
    {
        "name": "Sivir",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Sivir.png"
    },
    {
        "name": "Vi",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Vi.png"
    },
    {
        "name": "Yasuo",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Yasuo.png"
    },
    {
        "name": "Alistar",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Alistar.png"
    },
    {
        "name": "Gnar",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Gnar.png"
    },
    {
        "name": "Jax",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Jax.png"
    },
    {
        "name": "Kaisa",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Kaisa.png"
    },
    {
        "name": "Leblanc",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Leblanc.png"
    },
    {
        "name": "Morgana",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Morgana.png"
    },
    {
        "name": "Nilah",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Nilah.png"
    },
    {
        "name": "Rammus",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Rammus.png"
    },
    {
        "name": "Riven",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Riven.png"
    },
    {
        "name": "Shen",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Shen.png"
    },
    {
        "name": "Sona",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Sona.png"
    },
    {
        "name": "Vayne",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Vayne.png"
    },
    {
        "name": "Vex",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Vex.png"
    },
    {
        "name": "Aatrox",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Aatrox.png"
    },
    {
        "name": "Aurelion Sol",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/AurelionSol.png"
    },
    {
        "name": "Belveth",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Belveth.png"
    },
    {
        "name": "Ekko",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Ekko.png"
    },
    {
        "name": "Garen",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Garen.png"
    },
    {
        "name": "Jhin",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Jhin.png"
    },
    {
        "name": "Miss Fortune",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/MissFortune.png"
    },
    {
        "name": "Neeko",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Neeko.png"
    },
    {
        "name": "Samira",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Samira.png"
    },
    {
        "name": "Twisted Fate",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/TwistedFate.png"
    },
    {
        "name": "Viego",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Viego.png"
    },
    {
        "name": "Warwick",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Warwick.png"
    },
    {
        "name": "Fiddlesticks",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Fiddlesticks.png"
    },
    {
        "name": "Janna",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Janna.png"
    },
    {
        "name": "Leona",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Leona.png"
    },
    {
        "name": "Mordekaiser",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Mordekaiser.png"
    },
    {
        "name": "Nunu",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Nunu.png"
    },
    {
        "name": "Syndra",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Syndra.png"
    },
    {
        "name": "Ultimate Ezreal",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/UltimateEzreal.png"
    },
    {
        "name": "Urgot",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/8.5/Urgot.png"
    }
];
  
window.champions = exportedChamps.map(champ => new Champion(champ.name, champ.cost, champ.image));
  