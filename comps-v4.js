class TeamComp {
    constructor(name, champs, notes, requiredElement) {
        this.name = name;
        this.champs = champs;
        this.notes = notes;
		this.requiredElement = requiredElement || null;
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

teamComps.push(new TeamComp('S: Chosen Keepers | *Keeper*',
    [new EquippedChamp('Elise'),
     new EquippedChamp('Jarvan IV'),
     new EquippedChamp('Thresh'),
     new EquippedChamp('Kennen', ['Morellonomicon', 'Guardian Angel', 'Gargoyle Stoneplate'], true),
     new EquippedChamp('Riven', ['Sunfire Cape', 'Ionic Spark', 'Quicksilver']),
     new EquippedChamp('Cassiopeia'),
     new EquippedChamp('Azir'),
     new EquippedChamp('Lillia')],
    'Kennen in front',
	'Keeper'));
	
teamComps.push(new TeamComp('S: Chosen Duelists | *Duelist*',
    [new EquippedChamp('Fiora', [], true),
     new EquippedChamp('Yasuo', ['Guardian Angel', 'Hand of Justice', 'Quicksilver'], true),
     new EquippedChamp('Jax', ['Sunfire Cape'], true),
	 new EquippedChamp('Irelia', [], false, true),
     new EquippedChamp('Kalista', ["Guinsoo's Rageblade", "Runaan's Hurricane"], true),
     new EquippedChamp('Janna'),
     new EquippedChamp('Shen'),
     new EquippedChamp('Lee Sin'),
     new EquippedChamp('Yone')],
    'Can maybe keep irelia for 9',
	'Duelist'));
	
teamComps.push(new TeamComp('S: Chosen Dusks | *Dusk*',
    [new EquippedChamp('Elise', [], false, true),
	 new EquippedChamp('Pyke', [], false, true),
	 new EquippedChamp('Zed', [], false, true),
	 new EquippedChamp('Evelynn', [], false, true),
     new EquippedChamp('Riven', ['Sunfire Cape', 'Ionic Spark', 'Quicksilver']),
	 new EquippedChamp('Vayne', []),
     new EquippedChamp('Thresh', []),
     new EquippedChamp('Aatrox', ['Gargoyle Stoneplate']),
     new EquippedChamp('Cassiopeia', []),
     new EquippedChamp('Jhin', ['Infinity Edge', 'Last Whisper']),
     new EquippedChamp('Lillia', []),
     new EquippedChamp('Zilean', [])],
    '3 cultists, 2 shades early to sustain until you can build strong dusks',
	'Dusk'));
	
teamComps.push(new TeamComp('S: Chosen Hunters | *Hunter*',
    [new EquippedChamp('Maokai', [], false, true),
     new EquippedChamp('Sylas', [], false, true),
     new EquippedChamp('Vi', [], false, true),
     new EquippedChamp('Nunu', [], false, true),
     new EquippedChamp('Ashe', ['Giant Slayer', "Guinsoo's Rageblade", 'Quicksilver']),
     new EquippedChamp('Aphelios'),
     new EquippedChamp('Yuumi'),
     new EquippedChamp('Irelia'),
     new EquippedChamp('Kindred', ['Infinity Edge', 'Jeweled Gauntlet', 'Blue Buff'], true),
     new EquippedChamp('Shen'),
     new EquippedChamp('Warwick'),
     new EquippedChamp('Yone')],
    'Early brawlers',
	'Hunter'));
	
teamComps.push(new TeamComp('S: Chosen Warlords | *Warlord*',
    [new EquippedChamp('Garen', ['Sunfire Cape', 'Gargoyle Stoneplate'], true),
     new EquippedChamp('Jinx', [], false, true),
     new EquippedChamp('Katarina', ['Guardian Angel', 'Hextech Gunblade', 'Quicksilver'], true),
     new EquippedChamp('Nidalee'),
     new EquippedChamp('Sejuani', [], false, true),
     new EquippedChamp('Jarvan IV'),
     new EquippedChamp('Pyke', ["Warlord's Banner"]),
     new EquippedChamp('Vi'),
     new EquippedChamp('Xin Zhao'),
     new EquippedChamp('Azir')],
    'Early fortune',
	'Warlord'));
	
teamComps.push(new TeamComp('A: Chosen Cultists | *Cultist*',
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
    'Lvl 9 Janna Yuumi or Shen',
	'Cultist'));
	
teamComps.push(new TeamComp('A: Enlightened Adepts | *Adept*',
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
    '',
	'Adept'));
	
teamComps.push(new TeamComp('A: Enlightened Mages | *Mage*',
    [new EquippedChamp('Nami', ["Luden's Echo", "Luden's Echo", 'Quicksilver'], true),
     new EquippedChamp('Annie', ['Gargoyle Stoneplate', 'Ionic Spark', 'Sunfire Cape'], true),
     new EquippedChamp('Janna'),
     new EquippedChamp('Irelia'),
     new EquippedChamp('Shen'),
     new EquippedChamp('Fiora'),
     new EquippedChamp('Morgana'),
     new EquippedChamp('Talon')],
    'Store Fiora',
	'Mage'));
	
teamComps.push(new TeamComp('A: Chosen Assassins | *Assassin*',
    [new EquippedChamp('Pyke'),
     new EquippedChamp('Zed'),
     new EquippedChamp('Akali', ['Blue Buff', 'Infinity Edge', 'Rapid Firecannon'], true),
     new EquippedChamp('Kennen', ['Guardian Angel', 'Ionic Spark', 'Morellonomicon'], true),
     new EquippedChamp('Shen'),
     new EquippedChamp('Janna'),
     new EquippedChamp('Talon')],
    'Lvl 8 Irelia/Yone',
	'Assassin'));
	
teamComps.push(new TeamComp('A: Chosen Brawlers | *Brawler*',
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
    'Early moonlights',
	'Brawler'));
	
teamComps.push(new TeamComp('A: Chosen Elderwood | *Elderwood*',
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
    'Can swap Lux for Hecarim + Veig',
	'Elderwood'));
	
teamComps.push(new TeamComp('A: Chosen Sharpshooters | *Sharpshooter*',
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
    '',
	'Sharpshooter'));
	
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
	
teamComps.push(new TeamComp('A: Vanguard Mystics | *Vanguard*',
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
    '',
	'Vanguard'));
	
teamComps.push(new TeamComp('B: Chosen Keepers | *Keeper*',
    [new EquippedChamp('Elise'),
     new EquippedChamp('Jarvan IV'),
     new EquippedChamp('Thresh'),
     new EquippedChamp('Kennen', ['Morellonomicon', 'Guardian Angel', 'Gargoyle Stoneplate'], true),
     new EquippedChamp('Riven', ['Sunfire Cape', 'Ionic Spark', 'Quicksilver']),
     new EquippedChamp('Cassiopeia'),
     new EquippedChamp('Azir'),
     new EquippedChamp('Lillia')],
    'Elise swappable with vayne',
	'Keeper'));
	
teamComps.push(new TeamComp('B: Adept Mystics | *Enlightened*',
    [new EquippedChamp('Garen', [], false, true),
     new EquippedChamp('Wukong', [], false, true),
     new EquippedChamp('Janna'),
     new EquippedChamp('Irelia'),
     new EquippedChamp('Shen'),
     new EquippedChamp('Yuumi'),
     new EquippedChamp('Morgana', ['Morellonomicon', 'Blue Buff', "Rabadon's Deathcap"]),
     new EquippedChamp('Ezreal'),
     new EquippedChamp('Yone', ['Guardian Angel', 'Blue Buff', "Warmog's Armor"]),
     new EquippedChamp('Zilean')],
    'Yone, Zilean swappable with Cassiopeia, Riven',
	'Enlightened'));
	
teamComps.push(new TeamComp('B: Chosen Adepts',
    [new EquippedChamp('Maokai', [], false, true),
     new EquippedChamp('Sylas', [], false, true),
     new EquippedChamp('Vi', [], false, true),
     new EquippedChamp('Nunu', [], false, true),
     new EquippedChamp('Ashe', [], false, true),
     new EquippedChamp('Janna', [], false, true),
     new EquippedChamp('Irelia', [], false, true),
     new EquippedChamp('Kindred', [], false, true),
     new EquippedChamp('Yuumi', [], false, true),
     new EquippedChamp('Cassiopeia', [], false, true),
     new EquippedChamp('Shen', [], false, true)],
    '',
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
    // '',
	// ''));