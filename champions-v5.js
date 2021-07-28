class Champion {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

exportedChamps = [
    {
        "name": "Olaf",
        "cost": 1
    },
    {
        "name": "Senna",
        "cost": 1
    },
    {
        "name": "Aatrox",
        "cost": 1
    },
    {
        "name": "Gragas",
        "cost": 1
    },
    {
        "name": "Kalista",
        "cost": 1
    },
    {
        "name": "Khazix",
        "cost": 1
    },
    {
        "name": "Kled",
        "cost": 1
    },
    {
        "name": "Leona",
        "cost": 1
    },
    {
        "name": "Poppy",
        "cost": 1
    },
    {
        "name": "Udyr",
        "cost": 1
    },
    {
        "name": "Vayne",
        "cost": 1
    },
    {
        "name": "Vladimir",
        "cost": 1
    },
    {
        "name": "Ziggs",
        "cost": 1
    },
    {
        "name": "Irelia",
        "cost": 2
    },
    {
        "name": "Pyke",
        "cost": 2
    },
    {
        "name": "Tristana",
        "cost": 2
    },
    {
        "name": "Brand",
        "cost": 2
    },
    {
        "name": "Hecarim",
        "cost": 2
    },
    {
        "name": "Kennen",
        "cost": 2
    },
    {
        "name": "Nautilus",
        "cost": 2
    },
    {
        "name": "Sejuani",
        "cost": 2
    },
    {
        "name": "Sett",
        "cost": 2
    },
    {
        "name": "Soraka",
        "cost": 2
    },
    {
        "name": "Syndra",
        "cost": 2
    },
    {
        "name": "Thresh",
        "cost": 2
    },
    {
        "name": "Varus",
        "cost": 2
    },
    {
        "name": "Miss Fortune",
        "cost": 3
    },
    {
        "name": "Rakan",
        "cost": 3
    },
    {
        "name": "Ashe",
        "cost": 3
    },
    {
        "name": "Lee Sin",
        "cost": 3
    },
    {
        "name": "Lulu",
        "cost": 3
    },
    {
        "name": "Lux",
        "cost": 3
    },
    {
        "name": "Nidalee",
        "cost": 3
    },
    {
        "name": "Nocturne",
        "cost": 3
    },
    {
        "name": "Nunu",
        "cost": 3
    },
    {
        "name": "Riven",
        "cost": 3
    },
    {
        "name": "Yasuo",
        "cost": 3
    },
    {
        "name": "Zyra",
        "cost": 3
    },
    {
        "name": "Fiddlesticks",
        "cost": 4
    },
    {
        "name": "Galio",
        "cost": 4
    },
    {
        "name": "Lucian",
        "cost": 4
    },
    {
        "name": "Diana",
        "cost": 4
    },
    {
        "name": "Aphelios",
        "cost": 4
    },
    {
        "name": "Draven",
        "cost": 4
    },
    {
        "name": "Ivern",
        "cost": 4
    },
    {
        "name": "Jax",
        "cost": 4
    },
    {
        "name": "Karma",
        "cost": 4
    },
    {
        "name": "Rell",
        "cost": 4
    },
    {
        "name": "Velkoz",
        "cost": 4
    },
    {
        "name": "Akshan",
        "cost": 5
    },
    {
        "name": "Gwen",
        "cost": 5
    },
    {
        "name": "Garen",
        "cost": 5
    },
    {
        "name": "Kayle",
        "cost": 5
    },
    {
        "name": "Heimerdinger",
        "cost": 5
    },
    {
        "name": "Teemo",
        "cost": 5
    },
    {
        "name": "Viego",
        "cost": 5
    },
    {
        "name": "Volibear",
        "cost": 5
    }
]

window.champions = exportedChamps.map(champ => new Champion(champ.name, champ.cost));
