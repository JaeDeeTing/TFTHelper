class Champion {
    constructor(name, cost, image) {
      this.name = name;
      this.cost = cost;
      this.image = image;
    }
  }
  
  exportedChamps = [
    {
        "name": "Ezreal",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Ezreal.png"
    },
    {
        "name": "Heimerdinger",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Heimerdinger.png"
    },
    {
        "name": "Karma",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Karma.png"
    },
    {
        "name": "Leona",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Leona.png"
    },
    {
        "name": "Malphite",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Malphite.png"
    },
    {
        "name": "Nasus",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Nasus.png"
    },
    {
        "name": "Nidalee",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Nidalee.png"
    },
    {
        "name": "Sejuani",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Sejuani.png"
    },
    {
        "name": "Senna",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Senna.png"
    },
    {
        "name": "Sett",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Sett.png"
    },
    {
        "name": "Skarner",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Skarner.png"
    },
    {
        "name": "Taliyah",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Taliyah.png"
    },
    {
        "name": "Vladimir",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Vladimir.png"
    },
    {
        "name": "Wukong",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Wukong.png"
    },
    {
        "name": "Aphelios",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Aphelios.png"
    },
    {
        "name": "Braum",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Braum.png"
    },
    {
        "name": "Gnar",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Gnar.png"
    },
    {
        "name": "Jax",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Jax.png"
    },
    {
        "name": "Kaisa",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Kaisa.png"
    },
    {
        "name": "Lillia",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Lillia.png"
    },
    {
        "name": "Lux",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Lux.png"
    },
    {
        "name": "Qiyana",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Qiyana.png"
    },
    {
        "name": "Rell",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Rell.png"
    },
    {
        "name": "Tristana",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Tristana.png"
    },
    {
        "name": "Twitch",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Twitch.png"
    },
    {
        "name": "Yone",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Yone.png"
    },
    {
        "name": "Zac",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Zac.png"
    },
    {
        "name": "Zyra",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Zyra.png"
    },
    {
        "name": "Diana",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Diana.png"
    },
    {
        "name": "Lee Sin",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/LeeSin.png"
    },
    {
        "name": "Lulu",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Lulu.png"
    },
    {
        "name": "Nunu",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Nunu.png"
    },
    {
        "name": "Olaf",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Olaf.png"
    },
    {
        "name": "Rakan",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Rakan.png"
    },
    {
        "name": "Rengar",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Rengar.png"
    },
    {
        "name": "Seraphine",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Seraphine.png"
    },
    {
        "name": "Sylas",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Sylas.png"
    },
    {
        "name": "Varus",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Varus.png"
    },
    {
        "name": "Volibear",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Volibear.png"
    },
    {
        "name": "Zeri",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Zeri.png"
    },
    {
        "name": "Graves",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Graves.png"
    },
    {
        "name": "Hecarim",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Hecarim.png"
    },
    {
        "name": "Jayce",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Jayce.png"
    },
    {
        "name": "Nilah",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Nilah.png"
    },
    {
        "name": "Pantheon",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Pantheon.png"
    },
    {
        "name": "Xayah",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Xayah.png"
    },
    {
        "name": "Bard",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Bard.png"
    },
    {
        "name": "Soraka",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Soraka.png"
    },
    {
        "name": "Yasuo",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Yasuo.png"
    },
    {
        "name": "Zoe",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/7.5/Zoe.png"
    }
];
  
window.champions = exportedChamps.map(champ => new Champion(champ.name, champ.cost, champ.image));
  