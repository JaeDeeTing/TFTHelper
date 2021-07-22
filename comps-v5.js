class TeamComp {
    constructor(name, champs, notes) {
        this.name = name;
        this.champs = champs;
        this.notes = notes;
        this.requiredItems = [];
        
        for (var i = 0; i < this.champs.length; i++) {
            this.requiredItems = this.requiredItems.concat(this.champs[i].requiredItems);
        }
        this.requiredItems = this.requiredItems.sort();
    }
    
    get rawChamps() {
        return this.champs.map(_ => _.name); 
    }
}

class EquippedChamp {
    constructor(name, items, threeStar, onlyEarly) {
        this.name = name;
        this.items = items || [];
        this.threeStar = threeStar || false;
		this.onlyEarly = onlyEarly || false;
        this.requiredItems = [];
        
        for (var i = 0; i < this.items.length; i++) {
            var item = window.combinedItems.find(item => item.name == this.items[i]);
            this.requiredItems = this.requiredItems.concat(item.baseItems);
        }
    }
}

window.teamComps = [];

teamComps.push(new TeamComp('S: Dawnbringer Invokers',
    [new EquippedChamp('Aatrox', [], false, true),
     new EquippedChamp('Leona', [], false, true),
     new EquippedChamp('Syndra', [], false, true),
     new EquippedChamp('Thresh', [], false, true),
     new EquippedChamp('Gragas'),
     new EquippedChamp('Soraka'),
     new EquippedChamp('Riven'),
     new EquippedChamp('Nidalee'),
     new EquippedChamp('Ivern'),
     new EquippedChamp('Karma', ['Blue Buff', 'Jeweled Gauntlet', 'Infinity Edge']),
     new EquippedChamp('Garen', ['Sunfire Cape', "Dragon's Claw", "Warmog's Armor"]),
     new EquippedChamp('Volibear')],
    'Equip Aatrox and Syndra early'));
	
teamComps.push(new TeamComp('S: Abomination Revenants',
    [new EquippedChamp('Kalista', ["Runaan's Hurricane"]),
        new EquippedChamp('Brand', ["Last Whisper"]),
        new EquippedChamp('Sett', [], false, true),
        new EquippedChamp('Nunu'),
        new EquippedChamp('Zyra', ["Archangel's Staff", "Guinsoo's Rageblade", "Spear of Shojin"], true),
        new EquippedChamp('Ivern'),
        new EquippedChamp('Ryze', ["Runaan's Hurricane"]),
        new EquippedChamp('Kindred'),
        new EquippedChamp('Volibear'),],
    'Zyra Kindred > Heimer Teemo'));

teamComps.push(new TeamComp('S: Nightbringer Dragonslayers',
    [new EquippedChamp('Kalista', [], false, true),
    new EquippedChamp('Sejuani', [], false, true),
    new EquippedChamp('Wukong'),
    new EquippedChamp('Lee Sin'),
    new EquippedChamp('Morgana'),
    new EquippedChamp('Pantheon'),
    new EquippedChamp('Yasuo', ["Jeweled Gauntlet", "Rapid Firecannon", "Runaan's Hurricane"], true),
    new EquippedChamp('Diana', ['Frozen Heart']),
    new EquippedChamp('Mordekaiser', ["Warmog's Armor", "Hextech Gunblade"]),
    new EquippedChamp('Kindred'),],
    ''))

teamComps.push(new TeamComp('S: Redeemed Ironclad',
    [new EquippedChamp('Leona'),
        new EquippedChamp('Vayne', [], false, true),
        new EquippedChamp('Nautilus'),
        new EquippedChamp('Varus'),
        new EquippedChamp('Lux', ["Archangel's Staff", "Spear of Shojin", "Guinsoo's Rageblade"]),
        new EquippedChamp('Syndra'),
        new EquippedChamp('Rell'),
        new EquippedChamp('Velkoz', ["Hextech Gunblade", "Jeweled Gauntlet", "Spear of Shojin"]),
        new EquippedChamp('Kindred'),],
    ''));

teamComps.push(new TeamComp('A: Abomination Brawlers',
    [new EquippedChamp('Kalista', [], false, true),
        new EquippedChamp('Warwick'),
        new EquippedChamp('Brand'),
        new EquippedChamp('Sett', ["Bloodthirster", "Infinity Edge", "Titan's Resolve"], true),
        new EquippedChamp('Nunu', ["Hextech Gunblade", "Sunfire Cape", "Warmog's Armor"], true),
        new EquippedChamp('Zyra', [], false, true),
        new EquippedChamp('Ivern'),
        new EquippedChamp('Ryze'),
        new EquippedChamp('Heimerdinger'),
        new EquippedChamp('Volibear')],
    ''));
	
// teamComps.push(new TeamComp('',
    // [new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true),
     // new EquippedChamp('', [], false, true)],
    // ''));