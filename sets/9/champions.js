class Champion {
    constructor(name, cost, image) {
      this.name = name;
      this.cost = cost;
      this.image = image;
    }
  }
  
  exportedChamps = [
    {
        "name": "Cassiopeia",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Cassiopeia.png"
    },
    {
        "name": "Chogath",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Chogath.png"
    },
    {
        "name": "Irelia",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Irelia.png"
    },
    {
        "name": "Jhin",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Jhin.png"
    },
    {
        "name": "Kayle",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Kayle.png"
    },
    {
        "name": "Malzahar",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Malzahar.png"
    },
    {
        "name": "Maokai",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Maokai.png"
    },
    {
        "name": "Orianna",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Orianna.png"
    },
    {
        "name": "Poppy",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Poppy.png"
    },
    {
        "name": "Renekton",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Renekton.png"
    },
    {
        "name": "Samira",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Samira.png"
    },
    {
        "name": "Tristana",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Tristana.png"
    },
    {
        "name": "Viego",
        "cost": 1,
        "image": "https://rerollcdn.com/characters/Skin/9/Viego.png"
    },
    {
        "name": "Ashe",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Ashe.png"
    },
    {
        "name": "Galio",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Galio.png"
    },
    {
        "name": "Jinx",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Jinx.png"
    },
    {
        "name": "Kassadin",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Kassadin.png"
    },
    {
        "name": "Kled",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Kled.png"
    },
    {
        "name": "Sett",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Sett.png"
    },
    {
        "name": "Soraka",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Soraka.png"
    },
    {
        "name": "Swain",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Swain.png"
    },
    {
        "name": "Taliyah",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Taliyah.png"
    },
    {
        "name": "Teemo",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Teemo.png"
    },
    {
        "name": "Vi",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Vi.png"
    },
    {
        "name": "Warwick",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Warwick.png"
    },
    {
        "name": "Zed",
        "cost": 2,
        "image": "https://rerollcdn.com/characters/Skin/9/Zed.png"
    },
    {
        "name": "Akshan",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Akshan.png"
    },
    {
        "name": "Darius",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Darius.png"
    },
    {
        "name": "Ekko",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Ekko.png"
    },
    {
        "name": "Garen",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Garen.png"
    },
    {
        "name": "Jayce",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Jayce.png"
    },
    {
        "name": "Kalista",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Kalista.png"
    },
    {
        "name": "Karma",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Karma.png"
    },
    {
        "name": "Katarina",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Katarina.png"
    },
    {
        "name": "Lissandra",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Lissandra.png"
    },
    {
        "name": "RekSai",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/RekSai.png"
    },
    {
        "name": "Sona",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Sona.png"
    },
    {
        "name": "Taric",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Taric.png"
    },
    {
        "name": "Velkoz",
        "cost": 3,
        "image": "https://rerollcdn.com/characters/Skin/9/Velkoz.png"
    },
    {
        "name": "Aphelios",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Aphelios.png"
    },
    {
        "name": "Azir",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Azir.png"
    },
    {
        "name": "Gwen",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Gwen.png"
    },
    {
        "name": "Jarvan IV",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/JarvanIV.png"
    },
    {
        "name": "Kaisa",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Kaisa.png"
    },
    {
        "name": "Lux",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Lux.png"
    },
    {
        "name": "Nasus",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Nasus.png"
    },
    {
        "name": "Sejuani",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Sejuani.png"
    },
    {
        "name": "Shen",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Shen.png"
    },
    {
        "name": "Urgot",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Urgot.png"
    },
    {
        "name": "Yasuo",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Yasuo.png"
    },
    {
        "name": "Zeri",
        "cost": 4,
        "image": "https://rerollcdn.com/characters/Skin/9/Zeri.png"
    },
    {
        "name": "Aatrox",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/Aatrox.png"
    },
    {
        "name": "Ahri",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/Ahri.png"
    },
    {
        "name": "Belveth",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/Belveth.png"
    },
    {
        "name": "Heimerdinger",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/Heimerdinger.png"
    },
    {
        "name": "KSante",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/KSante.png"
    },
    {
        "name": "Ryze Bandle City",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeBandleCity.png"
    },
    {
        "name": "Ryze Demacia",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeDemacia.png"
    },
    {
        "name": "Ryze Freljord",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeFreljord.png"
    },
    {
        "name": "Ryze Ionia",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeIonia.png"
    },
    {
        "name": "Ryze Noxus",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeNoxus.png"
    },
    {
        "name": "Ryze Piltover",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzePiltover.png"
    },
    {
        "name": "Ryze Shadow Isles",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeShadowIsles.png"
    },
    {
        "name": "Ryze Shurima",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeShurima.png"
    },
    {
        "name": "Ryze Targon",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeTargon.png"
    },
    {
        "name": "Ryze Zaun",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/RyzeZaun.png"
    },
    {
        "name": "Senna",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/Senna.png"
    },
    {
        "name": "Sion",
        "cost": 5,
        "image": "https://rerollcdn.com/characters/Skin/9/Sion.png"
    }
];
  
window.champions = exportedChamps.map(champ => new Champion(champ.name, champ.cost, champ.image));
  