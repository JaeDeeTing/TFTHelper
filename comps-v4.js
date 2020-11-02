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
        return this.champs.map(_ => _.champ); 
    }
}

class EquippedChamp {
    constructor(champ, items, threeStar) {
        this.champ = champ;
        this.items = items || [];
        this.threeStar = threeStar || false;
        this.requiredItems = [];
        
        for (var i = 0; i < this.items.length; i++) {
            var item = window.combinedItems.find(item => item.name == this.items[i]);
            this.requiredItems = this.requiredItems.concat(item.baseItems);
        }
    }
}

window.teamComps = [];

teamComps.push(new TeamComp('Chosen Keepers',
    [new EquippedChamp('Elise'),
     new EquippedChamp('Jarvan IV'),
     new EquippedChamp('Thresh'),
     new EquippedChamp('Kennen', ['Gargoyle Stoneplate', 'Guardian Angel', 'Morellonomicon'], true),
     new EquippedChamp('Cassiopeia'),
     new EquippedChamp('Riven', ['Ionic Spark', 'Quicksilver', 'Sunfire Cape']),
     new EquippedChamp('Azir'),
     new EquippedChamp('Lillia')],
    'Kennen in front'));