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