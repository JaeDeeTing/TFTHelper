class Item {
	constructor(name, image) {
		this.name = name;
		this.image = image;
    }
}

window.baseItems = [
	new Item("B.F. Sword", "https://rerollcdn.com/items/BFSword.png"),
	new Item("Chain Vest", "https://rerollcdn.com/items/ChainVest.png"),
	new Item("Giant's Belt", "https://rerollcdn.com/items/GiantsBelt.png"),
	new Item("Needlessly Large Rod", "https://rerollcdn.com/items/NeedlesslyLargeRod.png"),
	new Item("Negatron Cloak", "https://rerollcdn.com/items/NegatronCloak.png"),
	new Item("Recurve Bow", "https://rerollcdn.com/items/RecurveBow.png"),
	new Item("Sparring Gloves", "https://rerollcdn.com/items/SparringGloves.png"),
	new Item("Tear of the Goddess", "https://rerollcdn.com/items/TearoftheGoddess.png"),
	new Item("Spatula", "https://rerollcdn.com/items/Spatula.png")
]

class CombinedItem extends Item {
	constructor(name, baseItem1, baseItem2, image) {
		super(name, image);
		this.baseItems = [baseItem1, baseItem2];
	}
}

let exportedItems = [
    {
        "name": "A.D.M.I.N. Emblem",
        "image": "https://rerollcdn.com/items/ADMINEmblem.png",
        "component1": "Spatula",
        "component2": "Negatron Cloak"
    },
    {
        "name": "Anima Squad Emblem",
        "image": "https://rerollcdn.com/items/AnimaSquadEmblem.png",
        "component1": "Spatula",
        "component2": "Needlessly Large Rod"
    },
    {
        "name": "Duelist Emblem",
        "image": "https://rerollcdn.com/items/DuelistEmblem.png",
        "component1": "Spatula",
        "component2": "Recurve Bow"
    },
    {
        "name": "Heart Emblem",
        "image": "https://rerollcdn.com/items/HeartEmblem.png",
        "component1": "Spatula",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "InfiniTeam Emblem",
        "image": "https://rerollcdn.com/items/InfiniTeamEmblem.png",
        "component1": "B.F. Sword",
        "component2": "Spatula"
    },
    {
        "name": "Mascot Emblem",
        "image": "https://rerollcdn.com/items/MascotEmblem.png",
        "component1": "Spatula",
        "component2": "Giant's Belt"
    },
    {
        "name": "Ox Force Emblem",
        "image": "https://rerollcdn.com/items/OxForceEmblem.png",
        "component1": "Spatula",
        "component2": "Chain Vest"
    },
    {
        "name": "Renegade Emblem",
        "image": "https://rerollcdn.com/items/RenegadeEmblem.png",
        "component1": "Spatula",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Archangel's Staff",
        "image": "https://rerollcdn.com/items/ArchangelsStaff.png",
        "component1": "Needlessly Large Rod",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "Bloodthirster",
        "image": "https://rerollcdn.com/items/Bloodthirster.png",
        "component1": "B.F. Sword",
        "component2": "Negatron Cloak"
    },
    {
        "name": "Blue Buff",
        "image": "https://rerollcdn.com/items/BlueBuff.png",
        "component1": "Tear of the Goddess",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "Bramble Vest",
        "image": "https://rerollcdn.com/items/BrambleVest.png",
        "component1": "Chain Vest",
        "component2": "Chain Vest"
    },
    {
        "name": "Chalice of Power",
        "image": "https://rerollcdn.com/items/ChaliceofPower.png",
        "component1": "Negatron Cloak",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "Deathblade",
        "image": "https://rerollcdn.com/items/Deathblade.png",
        "component1": "B.F. Sword",
        "component2": "B.F. Sword"
    },
    {
        "name": "Dragon's Claw",
        "image": "https://rerollcdn.com/items/DragonsClaw.png",
        "component1": "Negatron Cloak",
        "component2": "Negatron Cloak"
    },
    {
        "name": "Edge of Night",
        "image": "https://rerollcdn.com/items/EdgeofNight.png",
        "component1": "B.F. Sword",
        "component2": "Chain Vest"
    },
    {
        "name": "Gargoyle Stoneplate",
        "image": "https://rerollcdn.com/items/GargoyleStoneplate.png",
        "component1": "Chain Vest",
        "component2": "Negatron Cloak"
    },
    {
        "name": "Giant Slayer",
        "image": "https://rerollcdn.com/items/GiantSlayer.png",
        "component1": "B.F. Sword",
        "component2": "Recurve Bow"
    },
    {
        "name": "Guardbreaker",
        "image": "https://rerollcdn.com/items/Guardbreaker.png",
        "component1": "Giant's Belt",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Guinsoo's Rageblade",
        "image": "https://rerollcdn.com/items/GuinsoosRageblade.png",
        "component1": "Needlessly Large Rod",
        "component2": "Recurve Bow"
    },
    {
        "name": "Hand of Justice",
        "image": "https://rerollcdn.com/items/HandofJustice.png",
        "component1": "Tear of the Goddess",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Hextech Gunblade",
        "image": "https://rerollcdn.com/items/HextechGunblade.png",
        "component1": "B.F. Sword",
        "component2": "Needlessly Large Rod"
    },
    {
        "name": "Infinity Edge",
        "image": "https://rerollcdn.com/items/InfinityEdge.png",
        "component1": "B.F. Sword",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Ionic Spark",
        "image": "https://rerollcdn.com/items/IonicSpark.png",
        "component1": "Needlessly Large Rod",
        "component2": "Negatron Cloak"
    },
    {
        "name": "Jeweled Gauntlet",
        "image": "https://rerollcdn.com/items/JeweledGauntlet.png",
        "component1": "Needlessly Large Rod",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Last Whisper",
        "image": "https://rerollcdn.com/items/LastWhisper.png",
        "component1": "Recurve Bow",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Locket of the Iron Solari",
        "image": "https://rerollcdn.com/items/LocketoftheIronSolari.png",
        "component1": "Chain Vest",
        "component2": "Needlessly Large Rod"
    },
    {
        "name": "Morellonomicon",
        "image": "https://rerollcdn.com/items/Morellonomicon.png",
        "component1": "Giant's Belt",
        "component2": "Needlessly Large Rod"
    },
    {
        "name": "Protector's Vow",
        "image": "https://rerollcdn.com/items/ProtectorsVow.png",
        "component1": "Chain Vest",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "Quicksilver",
        "image": "https://rerollcdn.com/items/Quicksilver.png",
        "component1": "Negatron Cloak",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Rabadon's Deathcap",
        "image": "https://rerollcdn.com/items/RabadonsDeathcap.png",
        "component1": "Needlessly Large Rod",
        "component2": "Needlessly Large Rod"
    },
    {
        "name": "Rapid Firecannon",
        "image": "https://rerollcdn.com/items/RapidFirecannon.png",
        "component1": "Recurve Bow",
        "component2": "Recurve Bow"
    },
    {
        "name": "Redemption",
        "image": "https://rerollcdn.com/items/Redemption.png",
        "component1": "Giant's Belt",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "Runaan's Hurricane",
        "image": "https://rerollcdn.com/items/RunaansHurricane.png",
        "component1": "Negatron Cloak",
        "component2": "Recurve Bow"
    },
    {
        "name": "Shroud of Stillness",
        "image": "https://rerollcdn.com/items/ShroudofStillness.png",
        "component1": "Chain Vest",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Spear of Shojin",
        "image": "https://rerollcdn.com/items/SpearofShojin.png",
        "component1": "B.F. Sword",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "Statikk Shiv",
        "image": "https://rerollcdn.com/items/StatikkShiv.png",
        "component1": "Recurve Bow",
        "component2": "Tear of the Goddess"
    },
    {
        "name": "Sunfire Cape",
        "image": "https://rerollcdn.com/items/SunfireCape.png",
        "component1": "Chain Vest",
        "component2": "Giant's Belt"
    },
    {
        "name": "Tactician's Crown",
        "image": "https://rerollcdn.com/items/TacticiansCrown.png",
        "component1": "Spatula",
        "component2": "Spatula"
    },
    {
        "name": "Thief's Gloves",
        "image": "https://rerollcdn.com/items/ThiefsGloves.png",
        "component1": "Sparring Gloves",
        "component2": "Sparring Gloves"
    },
    {
        "name": "Titan's Resolve",
        "image": "https://rerollcdn.com/items/TitansResolve.png",
        "component1": "Chain Vest",
        "component2": "Recurve Bow"
    },
    {
        "name": "Warmog's Armor",
        "image": "https://rerollcdn.com/items/WarmogsArmor.png",
        "component1": "Giant's Belt",
        "component2": "Giant's Belt"
    },
    {
        "name": "Zeke's Herald",
        "image": "https://rerollcdn.com/items/ZekesHerald.png",
        "component1": "B.F. Sword",
        "component2": "Giant's Belt"
    },
    {
        "name": "Zephyr",
        "image": "https://rerollcdn.com/items/Zephyr.png",
        "component1": "Giant's Belt",
        "component2": "Negatron Cloak"
    },
    {
        "name": "Zz'Rot Portal",
        "image": "https://rerollcdn.com/items/ZzRotPortal.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Deathblade",
        "image": "https://rerollcdn.com/items/Deathblade.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Edge of Night",
        "image": "https://rerollcdn.com/items/EdgeofNight.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Zeke's Herald",
        "image": "https://rerollcdn.com/items/ZekesHerald.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Hextech Gunblade",
        "image": "https://rerollcdn.com/items/HextechGunblade.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Bloodthirster",
        "image": "https://rerollcdn.com/items/Bloodthirster.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Giant Slayer",
        "image": "https://rerollcdn.com/items/GiantSlayer.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Infinity Edge",
        "image": "https://rerollcdn.com/items/InfinityEdge.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "InfiniTeam Emblem",
        "image": "https://rerollcdn.com/items/InfiniTeamEmblem.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Spear of Shojin",
        "image": "https://rerollcdn.com/items/SpearofShojin.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Deathblade",
        "image": "https://rerollcdn.com/items/Deathblade.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Edge of Night",
        "image": "https://rerollcdn.com/items/EdgeofNight.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Zeke's Herald",
        "image": "https://rerollcdn.com/items/ZekesHerald.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Hextech Gunblade",
        "image": "https://rerollcdn.com/items/HextechGunblade.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Bloodthirster",
        "image": "https://rerollcdn.com/items/Bloodthirster.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Giant Slayer",
        "image": "https://rerollcdn.com/items/GiantSlayer.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Infinity Edge",
        "image": "https://rerollcdn.com/items/InfinityEdge.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "InfiniTeam Emblem",
        "image": "https://rerollcdn.com/items/InfiniTeamEmblem.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    },
    {
        "name": "Spear of Shojin",
        "image": "https://rerollcdn.com/items/SpearofShojin.png",
        "component1": "Giant's Belt",
        "component2": "Recurve Bow"
    }
];

window.combinedItems = exportedItems.map(item => new CombinedItem(item.name, item.component1, item.component2));