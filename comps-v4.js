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

teamComps.push(new TeamComp('S: Chosen Keepers',
    [new EquippedChamp('Elise'),
     new EquippedChamp('Jarvan IV'),
     new EquippedChamp('Thresh'),
     new EquippedChamp('Kennen', ['Gargoyle Stoneplate', 'Guardian Angel', 'Morellonomicon'], true),
     new EquippedChamp('Riven', ['Ionic Spark', 'Quicksilver', 'Sunfire Cape']),
     new EquippedChamp('Cassiopeia'),
     new EquippedChamp('Azir'),
     new EquippedChamp('Lillia')],
    'Kennen in front'));
	
teamComps.push(new TeamComp('S: Chosen Duelists',
    [new EquippedChamp('Fiora', [], true),
     new EquippedChamp('Yasuo', ['Guardian Angel', 'Hand of Justice', 'Quicksilver'], true),
     new EquippedChamp('Jax', ['Sunfire Cape'], true),
	 new EquippedChamp('Irelia', [], false, true),
     new EquippedChamp('Kalista', ["Guinsoo's Rageblade", "Runaan's Hurricane"], true),
     new EquippedChamp('Janna'),
     new EquippedChamp('Shen'),
     new EquippedChamp('Lee Sin'),
     new EquippedChamp('Yone')],
    'Can maybe keep irelia for 9'));
	
teamComps.push(new TeamComp('S: Chosen Dusks',
    [new EquippedChamp('Elise', [], false, true),
	 new EquippedChamp('Pyke', [], false, true),
	 new EquippedChamp('Zed', [], false, true),
	 new EquippedChamp('Evelynn', [], false, true),
     new EquippedChamp('Riven', ['Ionic Spark', 'Quicksilver', 'Sunfire Cape']),
	 new EquippedChamp('Vayne', []),
     new EquippedChamp('Thresh', []),
     new EquippedChamp('Aatrox', ['Gargoyle Stoneplate']),
     new EquippedChamp('Cassiopeia', []),
     new EquippedChamp('Jhin', ['Infinity Edge', 'Last Whisper']),
     new EquippedChamp('Lillia', []),
     new EquippedChamp('Zilean', [])],
    '3 cultists, 2 shades early to sustain until you can build strong dusks'));
	
teamComps.push(new TeamComp('S: Chosen Hunters',
    [new EquippedChamp('Maokai', [], false, true),
     new EquippedChamp('Sylas', [], false, true),
     new EquippedChamp('Vi', [], false, true),
     new EquippedChamp('Nunu', [], false, true),
     new EquippedChamp('Ashe', ['Giant Slayer', "Guinsoo's Rageblade", 'Quicksilver']),
     new EquippedChamp('Aphelios'),
     new EquippedChamp('Yuumi'),
     new EquippedChamp('Irelia'),
     new EquippedChamp('Kindred', ['Blue Buff', 'Infinity Edge', 'Jeweled Gauntlet'], true),
     new EquippedChamp('Shen'),
     new EquippedChamp('Warwick'),
     new EquippedChamp('Yone')],
    'Early brawlers'));
	
teamComps.push(new TeamComp('S: Chosen Warlords',
    [new EquippedChamp('Garen', ['Gargoyle Stoneplate', 'Sunfire Cape'], true),
     new EquippedChamp('Jinx', [], false, true),
     new EquippedChamp('Katarina', ['Guardian Angel', 'Hextech Gunblade', 'Quicksilver'], true),
     new EquippedChamp('Nidalee'),
     new EquippedChamp('Sejuani', [], false, true),
     new EquippedChamp('Jarvan IV'),
     new EquippedChamp('Pyke', ["Warlord's Banner"]),
     new EquippedChamp('Vi'),
     new EquippedChamp('Xin Zhao'),
     new EquippedChamp('Azir')],
    'Early fortune'));
	
teamComps.push(new TeamComp('S: Chosen Cultists',
    [new EquippedChamp('Elise'),
     new EquippedChamp('Pyke'),
     new EquippedChamp('Zed', [], false, true),
     new EquippedChamp('Evelynn', ['Guardian Angel', "Guinsoo's Rageblade", 'Ionic Spark'], true),
     new EquippedChamp('Riven', [], false, true),
     new EquippedChamp('Twisted Fate'),
     new EquippedChamp('Kalista'),
     new EquippedChamp('Aatrox', ['Sunfire Cape']),
     new EquippedChamp('Jhin', ['Infinity Edge', 'Last Whisper']),
     new EquippedChamp('Zilean')],
    'Needs double cultist for 9'));
	
teamComps.push(new TeamComp('A: Enlightened Adepts',
    [new EquippedChamp('Garen', [], false, true),
     new EquippedChamp('Wukong', [], false, true),
     new EquippedChamp('Irelia'),
     new EquippedChamp('Lux'),
     new EquippedChamp('Morgana', ['Blue Buff', 'Morellonomicon', "Rabadon's Deathcap"]),
     new EquippedChamp('Janna'),
     new EquippedChamp('Pyke'),
     new EquippedChamp('Shen'),
     new EquippedChamp('Talon', ['Giant Slayer', 'Guardian Angel', 'Infinity Edge']),
     new EquippedChamp('Yone')],
    ''));
	
teamComps.push(new TeamComp('A: Enlightened Mages',
    [new EquippedChamp('Nami', ["Luden's Echo", "Luden's Echo", 'Quicksilver'], true),
     new EquippedChamp('Annie', ['Gargoyle Stoneplate', 'Ionic Spark', 'Sunfire Cape'], true),
     new EquippedChamp('Janna'),
     new EquippedChamp('Irelia'),
     new EquippedChamp('Shen'),
     new EquippedChamp('Fiora'),
     new EquippedChamp('Morgana'),
     new EquippedChamp('Talon')],
    'Store Fiora'));
	
teamComps.push(new TeamComp('A: Chosen Assassins',
    [new EquippedChamp('Pyke'),
     new EquippedChamp('Zed'),
     new EquippedChamp('Akali', ['Blue Buff', 'Infinity Edge', 'Rapid Firecannon'], true),
     new EquippedChamp('Kennen', ['Guardian Angel', 'Ionic Spark', 'Morellonomicon'], true),
     new EquippedChamp('Shen'),
     new EquippedChamp('Janna'),
     new EquippedChamp('Talon')],
    'Lvl 8 Irelia/Yone'));
	
teamComps.push(new TeamComp('A: Chosen Brawlers',
    [new EquippedChamp('Lissandra', [], false, true),
     new EquippedChamp('Aphelios', [], false, true),
     new EquippedChamp('Sylas'),
     new EquippedChamp('Lux'),
     new EquippedChamp('Warwick'),
     new EquippedChamp('Maokai'),
     new EquippedChamp('Tahm Kench'),
     new EquippedChamp('Vi'),
     new EquippedChamp('Nunu'),
     new EquippedChamp('Ashe', ['Giant Slayer', "Guinsoo's Rageblade", 'Quicksilver']),
     new EquippedChamp('Sett', ['Ionic Spark', 'Jeweled Gauntlet', 'Sunfire Cape'])],
    'Early moonlights'));
	
teamComps.push(new TeamComp('A: Chosen Elderwood',
    [new EquippedChamp('Twisted Fate', [], false, true),
     new EquippedChamp('Maokai'),
     new EquippedChamp('Lulu'),
     new EquippedChamp('Nunu'),
     new EquippedChamp('Veigar', [], false, true),
     new EquippedChamp('Lux'),
     new EquippedChamp('Ashe', ['Giant Slayer', "Guinsoo's Rageblade", 'Quicksilver']),
     new EquippedChamp('Warwick'),
     new EquippedChamp('Ezreal'),
     new EquippedChamp('Sett', ['Ionic Spark', 'Jeweled Gauntlet', 'Sunfire Cape'])],
    'Can swap Lux for Hecarim + Veig'));
	
teamComps.push(new TeamComp('A: Chosen Sharpshooters',
    [new EquippedChamp('Garen', [], false, true),
     new EquippedChamp('Nidalee'),
     new EquippedChamp('Jinx'),
     new EquippedChamp('Katarina', [], false, true),
     new EquippedChamp('Sejuani', [], false, true),
     new EquippedChamp('Vayne'),
     new EquippedChamp('Jarvan IV'),
     new EquippedChamp('Teemo'),
     new EquippedChamp('Kennen'),
     new EquippedChamp('Jhin', ['Guardian Angel', 'Infinity Edge', 'Last Whisper']),
     new EquippedChamp('Riven', ['Ionic Spark', 'Quicksilver', 'Sunfire Cape']),
     new EquippedChamp('Azir')],
    ''));
	
teamComps.push(new TeamComp('A: Dusk Cultists',
    [new EquippedChamp('Elise'),
     new EquippedChamp('Pyke'),
     new EquippedChamp('Zed', [], false, true),
     new EquippedChamp('Evelynn', [], false, true),
     new EquippedChamp('Riven', ['Ionic Spark', 'Quicksilver', 'Sunfire Cape']),
     new EquippedChamp('Kalista'),
     new EquippedChamp('Aatrox', ['Guardian Angel']),
     new EquippedChamp('Cassiopeia'),
     new EquippedChamp('Jhin', ['Infinity Edge', 'Last Whisper']),
     new EquippedChamp('Zilean')],
    ''));
	
teamComps.push(new TeamComp('A: Vanguard Mystics',
    [new EquippedChamp('Garen', [], false, true),
     new EquippedChamp('Thresh'),
     new EquippedChamp('Yuumi'),
     new EquippedChamp('Kindred', [], false, true),
     new EquippedChamp('Cassiopeia'),
     new EquippedChamp('Aatrox'),
     new EquippedChamp('Ahri', ['Guardian Angel', 'Jeweled Gauntlet', 'Jeweled Gauntlet']),
     new EquippedChamp('Sejuani', ['Gargoyle Stoneplate', 'Ionic Spark', 'Sunfire Cape']),
     new EquippedChamp('Shen'),
     new EquippedChamp('Zilean')],
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