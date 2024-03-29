class Item {
	constructor(name, image) {
		this.name = name;
		this.image = image;
    }
}

window.baseItems = [
	new Item("BF Sword", "https://rerollcdn.com/items/BFSword.png"),
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

window.combinedItems = [
	new CombinedItem("Archangel's Staff", "Needlessly Large Rod", "Tear of the Goddess"),
	new CombinedItem("Bloodthirster", "BF Sword", "Negatron Cloak"),
	new CombinedItem("Blue Buff", "Tear of the Goddess", "Tear of the Goddess"),
	new CombinedItem("Bramble Vest", "Chain Vest", "Chain Vest"),
	new CombinedItem("Chalice of Power", "Negatron Cloak", "Tear of the Goddess"),
	new CombinedItem("Deathblade", "BF Sword", "BF Sword"),
	new CombinedItem("Dragon's Claw", "Negatron Cloak", "Negatron Cloak"),
	new CombinedItem("Frozen Heart", "Chain Vest", "Tear of the Goddess"),
	new CombinedItem("Gargoyle Stoneplate", "Chain Vest", "Negatron Cloak"),
	new CombinedItem("Giant Slayer", "BF Sword", "Recurve Bow"),
	new CombinedItem("Guardian Angel", "BF Sword", "Chain Vest"),
	new CombinedItem("Guinsoo's Rageblade", "Needlessly Large Rod", "Recurve Bow"),
	new CombinedItem("Hand of Justice", "Sparring Gloves", "Tear of the Goddess"),
	new CombinedItem("Hextech Gunblade", "BF Sword", "Needlessly Large Rod"),
	new CombinedItem("Infinity Edge", "BF Sword", "Sparring Gloves"),
	new CombinedItem("Ionic Spark", "Needlessly Large Rod", "Negatron Cloak"),
	new CombinedItem("Jeweled Gauntlet", "Needlessly Large Rod", "Sparring Gloves"),
	new CombinedItem("Last Whisper", "Recurve Bow", "Sparring Gloves"),
	new CombinedItem("Locket of the Iron Solari", "Chain Vest", "Needlessly Large Rod"),
	new CombinedItem("Morellonomicon", "Giant's Belt", "Needlessly Large Rod"),
	new CombinedItem("Quicksilver", "Negatron Cloak", "Sparring Gloves"),
	new CombinedItem("Rabadon's Deathcap", "Needlessly Large Rod", "Needlessly Large Rod"),
	new CombinedItem("Rapid Firecannon", "Recurve Bow", "Recurve Bow"),
	new CombinedItem("Redemption", "Giant's Belt", "Tear of the Goddess"),
	new CombinedItem("Runaan's Hurricane", "Negatron Cloak", "Recurve Bow"),
	new CombinedItem("Shroud of Stillness", "Chain Vest", "Sparring Gloves"),
	new CombinedItem("Spear of Shojin", "BF Sword", "Tear of the Goddess"),
	new CombinedItem("Statikk Shiv", "Recurve Bow", "Tear of the Goddess"),
	new CombinedItem("Sunfire Cape", "Chain Vest", "Giant's Belt"),
	new CombinedItem("Thief's Gloves", "Sparring Gloves", "Sparring Gloves"),
	new CombinedItem("Titan's Resolve", "Chain Vest", "Recurve Bow"),
	new CombinedItem("Trap Claw", "Giant's Belt", "Sparring Gloves"),
	new CombinedItem("Warmog's Armor", "Giant's Belt", "Giant's Belt"),
	new CombinedItem("Zeke's Herald", "BF Sword", "Giant's Belt"),
	new CombinedItem("Zephyr", "Giant's Belt", "Negatron Cloak"),
	new CombinedItem("Zz'Rot Portal", "Giant's Belt", "Recurve Bow"),
	new CombinedItem("Duelist's Zeal", "Recurve Bow", "Spatula"),
	new CombinedItem("Elderwood Heirloom", "Negatron Cloak", "Spatula"),
	new CombinedItem("Force of Nature", "Spatula", "Spatula"),
	new CombinedItem("Mage's Cap", "Tear of the Goddess", "Spatula"),
	new CombinedItem("Mantle of Dusk", "Needlessly Large Rod", "Spatula"),
	new CombinedItem("Sword of the Divine", "BF Sword", "Spatula"),
	new CombinedItem("Vanguard's Cuirass", "Chain Vest", "Spatula"),
	new CombinedItem("Warlord's Banner", "Giant's Belt", "Spatula"),
	new CombinedItem("Youmuu's Ghostblade", "Sparring Gloves", "Spatula"),
]
