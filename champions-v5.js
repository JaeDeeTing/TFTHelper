class Champion {
  constructor(name, cost, image) {
    this.name = name;
    this.cost = cost;
    this.image = image;
  }
}

exportedChamps = [
    {
        "name": "Olaf",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Olaf.png"
    },
    {
        "name": "Senna",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Senna.png"
    },
    {
        "name": "Aatrox",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Aatrox.png"
    },
    {
        "name": "Gragas",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Gragas.png"
    },
    {
        "name": "Kalista",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Kalista.png"
    },
    {
        "name": "Khazix",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Khazix.png"
    },
    {
        "name": "Kled",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Kled.png"
    },
    {
        "name": "Leona",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Leona.png"
    },
    {
        "name": "Poppy",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Poppy.png"
    },
    {
        "name": "Udyr",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Udyr.png"
    },
    {
        "name": "Vayne",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Vayne.png"
    },
    {
        "name": "Vladimir",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Vladimir.png"
    },
    {
        "name": "Ziggs",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Ziggs.png"
    },
    {
        "name": "Irelia",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Irelia.png"
    },
    {
        "name": "Pyke",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Pyke.png"
    },
    {
        "name": "Tristana",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Tristana.png"
    },
    {
        "name": "Brand",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Brand.png"
    },
    {
        "name": "Hecarim",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Hecarim.png"
    },
    {
        "name": "Kennen",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Kennen.png"
    },
    {
        "name": "Nautilus",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Nautilus.png"
    },
    {
        "name": "Sejuani",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Sejuani.png"
    },
    {
        "name": "Sett",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Sett.png"
    },
    {
        "name": "Soraka",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Soraka.png"
    },
    {
        "name": "Syndra",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Syndra.png"
    },
    {
        "name": "Thresh",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Thresh.png"
    },
    {
        "name": "Varus",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Varus.png"
    },
    {
        "name": "Miss Fortune",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/MissFortune.png"
    },
    {
        "name": "Rakan",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Rakan.png"
    },
    {
        "name": "Ashe",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Ashe.png"
    },
    {
        "name": "Lee Sin",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/LeeSin.png"
    },
    {
        "name": "Lulu",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Lulu.png"
    },
    {
        "name": "Lux",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Lux.png"
    },
    {
        "name": "Nidalee",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Hecarim.png"
    },
    {
        "name": "Nocturne",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Nocturne.png"
    },
    {
        "name": "Nunu",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Nunu.png"
    },
    {
        "name": "Riven",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Riven.png"
    },
    {
        "name": "Yasuo",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Yasuo.png"
    },
    {
        "name": "Zyra",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Zyra.png"
    },
    {
        "name": "Fiddlesticks",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Fiddlesticks.png"
    },
    {
        "name": "Galio",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Galio.png"
    },
    {
        "name": "Lucian",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Lucian.png"
    },
    {
        "name": "Diana",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Diana.png"
    },
    {
        "name": "Aphelios",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Aphelios.png"
    },
    {
        "name": "Draven",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Draven.png"
    },
    {
        "name": "Ivern",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Ivern.png"
    },
    {
        "name": "Jax",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Jax.png"
    },
    {
        "name": "Karma",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Karma.png"
    },
    {
        "name": "Rell",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Rell.png"
    },
    {
        "name": "Velkoz",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Velkoz.png"
    },
    {
        "name": "Akshan",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Akshan.png"
    },
    {
        "name": "Gwen",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Gwen.png"
    },
    {
        "name": "Garen",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Garen.png"
    },
    {
        "name": "Kayle",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Kayle.png"
    },
    {
        "name": "Heimerdinger",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png"
    },
    {
        "name": "Teemo",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Teemo.png"
    },
    {
        "name": "Viego",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Viego.png"
    },
    {
        "name": "Volibear",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/5.5/Volibear.png"
    }
]

window.champions = exportedChamps.map(champ => new Champion(champ.name, champ.cost, champ.image));
