// data
data = {
  originIndex: [
    0, 0, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8
  ],
  origins: [
    {name: 'Mutant', powersets: '1', SFX: 2, limit: 1, step: 1, powers: [], expert: 0, master: 0, mutant: true, altered: false, trained: false, gear: false},
    {name: 'Mutant', powersets: '2', SFX: 1, limit: 1, step: 0, powers: [], expert: 0, master: 0, mutant: true, altered: false, trained: false, gear: false},
    {name: 'Altered Human', powersets: '1', SFX: 2, limit: 1, step: 0, powers: [8], expert: 1, master: 0, mutant: false, altered: true, trained: false, gear: false},
    {name: 'Altered Human', powersets: '2', SFX: 1, limit: 1, step: 0, powers: [8], expert: 1, master: 0, mutant: false, altered: true, trained: false, gear: false},
    {name: 'Non-Human', powersets: '1', SFX: 3, limit: 2, step: 0, powers: [], expert: 0, master: 0, mutant: false, altered: false, trained: false, gear: false},
    {name: 'Non-Human', powersets: '2', SFX: 2, limit: 2, step: 0, powers: [], expert: 0, master: 0, mutant: false, altered: false, trained: false, gear: false},
    {name: 'Trained Human', powersets: '1', SFX: 1, limit: 1, step: 0, powers: [], expert: 1, master: 1, mutant: false, altered: false, trained: true, gear: false},
    {name: 'Trained Human', powersets: '2', SFX: 1, limit: 1, step: 0, powers: [], expert: 0, master: 1, mutant: false, altered: false, trained: true, gear: true},
    {name: 'Roll two'}
  ],
  affiliations: [
    {solo: 10, buddy: 8, team: 6},
    {solo: 10, team: 8, buddy: 6},
    {buddy: 10, solo: 8, team: 6},
    {buddy: 10, team: 8, solo: 6},
    {team: 10, buddy: 8, solo: 6},
    {team: 10, solo: 8, buddy: 6}
  ],
  primaryIndex: [
    0, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9
  ],
  secondaryIndex: [
    1, 1, 1, 10, 10, 2, 2, 11, 11, 9
  ],
  powersets: [
    {powers: [10], SFX: 1},
    {powers: [8, 8], SFX: 0},
    {powers: [10, 8], SFX: 0},
    {powers: [8, 8, 8], SFX: 0},
    {powers: [10, 8, 8], SFX: 0},
    {powers: [10, 10, 8], SFX: 0},
    {powers: [10, 10, 8, 8], SFX: 0},
    {powers: [10, 10, 8, 8, 8], SFX: 0},
    {powers: [10, 10, 10, 8, 8], SFX: 0},
    {powers: [], SFX: 0},
    {powers: [10], SFX: 0},
    {powers: [10, 10], SFX: 0}
  ],
  themes: {
    Mutant: [0, 0, 0, 0, 1, 1, 1, 3, 3, 2],
    'Altered Human': [0, 0, 0, 0, 1, 1, 1, 4, 2, 3],
    'Non-Human': [0, 0, 0, 0, 0, 1, 1, 4, 2, 3],
    'Trained Human': [0, 0, 0, 0, 4, 4, 4, 2, 2, 1]
  },
  themes2: {
    Mutant: [1, 1, 1, 3, 3, 2],
    'Altered Human': [1, 1, 1, 4, 2, 3],
    'Non-Human': [1, 1, 4, 2, 3],
    'Trained Human': [4, 4, 4, 2, 2, 1]
  },
  powers: [
    {name: 'Common Powers', options: [
      {name: 'Attack Power', energy: true, linkcontrol: false, stepback: true, choices: ['Weapon', '[ENERGY] Blast']},
      {name: 'Durability', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Movement-Based Power', energy: false, linkcontrol: false, stepback: true, choices: ['Airwalking', 'Burrowing', 'Flight', 'Leaping', 'Speed', 'Swimming', 'Swingline']},
      {name: 'Reflexes', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: '[ENERGY] Resistance', energy: true, linkcontrol: true, stepback: false, choices: []},
      {name: 'Senses', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Stamina', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Strength', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Uncommon Powers', movechart: 1},
      {name: 'Re-roll', movechart: 999}
    ]},
    {name: 'Uncommon Powers', options: [
      {name: 'Elemental Control Power', energy: true, linkcontrol: false, stepback: true, choices: ['[ENERGY] Control']},
      {name: 'Intangibility', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Invisibility', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Mimic', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Animal Control', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Plant Control', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Shapeshifting', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Size-Changing', energy: false, linkcontrol: false, stepback: false, choices: ['Growth', 'Shrinking']},
      {name: 'Stretching', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Teleport', energy: false, linkcontrol: false, stepback: false, choices: []}
    ]},
    {name: 'Mystic Powers', options: [
      {name: 'Sorcery', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Sorcery', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Blast', energy: true, linkcontrol: false, stepback: false, choices: ['Energy Blast', '[ENERGY] Blast']},
      {name: 'Elemental Control Power', energy: true, linkcontrol: false, stepback: false, choices: ['[ENERGY] Control'], energies: [
        'Air', 'Cosmic', 'Darkforce', 'Earth', 'Electric', 'Fire', 'Heat', 'Gravity', 'Ice', 'Cold', 'Kinetic', 'Light', 'Magnetic', 'Sonic', 'Weather', 'Water']},
      {name: 'Movement-Based Power', energy: false, linkcontrol: false, stepback: false, choices: ['Airwalking', 'Flight', 'Speed']},
      {name: 'Senses', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Teleport', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Transmutation', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Uncommon Powers', movechart: 1},
      {name: 'Uncommon Powers', movechart: 1}
    ]},
    {name: 'Psychic Powers', options: [
      {name: 'Telepathy', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Telepathy', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Psychic Blast', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Elemental Control Power', energy: true, linkcontrol: false, stepback: false, choices: ['[ENERGY] Psychic Control'], energies: [
        'Cosmic', 'Electric', 'Fire', 'Gravity', 'Ice', 'Kinetic', 'Light', 'Magnetic', 'Water']},
      {name: 'Invisibility', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Mind Control', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Animal Control', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Psychic Resistance', energy: true, linkcontrol: true, stepback: false, choices: []},
      {name: 'Senses', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Teleport', energy: false, linkcontrol: false, stepback: false, choices: []}
    ]},
    {name: 'Technological Powers', options: [
      {name: 'Attack Power', energy: true, linkcontrol: false, stepback: false, choices: ['Weapon', '[ENERGY] Blast']},
      {name: 'Durability', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Invisibility', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Movement-Based Power', energy: false, linkcontrol: false, stepback: false, choices: ['Burrowing', 'Flight', 'Leaping', 'Speed', 'Swimming', 'Swingline']},
      {name: 'Reflexes', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Senses', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Stamina', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Strength', energy: false, linkcontrol: false, stepback: false, choices: []},
      {name: 'Uncommon Powers', movechart: 1},
      {name: 'Uncommon Powers', movechart: 1}
    ]},
  ],
  energies: [
    'Air', 'Cosmic', 'Darkforce', 'Earth', 'Electric', 'Fire', 'Heat',
    'Gravity',  'Ice', 'Cold', 'Kinetic', 'Light', 'Magnetic', 'Sonic',
    'Technology', 'Weather', 'Water'
  ],
  specIndex: [
    0, 0, 1, 1, 2, 2, 3, 3, 4, 4
  ],
  specialties: [
    {expert: 2, master: 0},
    {expert: 1, master: 1},
    {expert: 2, master: 1},
    {expert: 3, master: 0},
    {expert: 3, master: 1},
  ],
  specTypes: [
    'Acrobatic',
    'Business',
    'Covert',
    'Crime',
    'Medical',
    'Menace',
    'Psych',
    'Science',
    'Tech',
    'Vehicle'
  ],
  distinctions: [
    'Personality Trait',
    'Outlook or Reputation',
    'History/Backstory',
    'Catchphrase or Title',
    'Notable Feature',
    'Profession'
  ],
  milestonesIndex: [
    0, 0, 1, 1, 2, 2, 3, 3, 4, 4
  ],
  milestones: [
    'Affiliation',
    'Origin',
    'Power',
    'Distinction',
    'Specialty'
  ]
};

$(document).ready(function(){
  $('#datafile').html(buildDatafile());
});

function buildDatafile() {
  var ds = '';
  
  // roll origin
  var originRoll = Math.ceil(Math.random() * data.originIndex.length);
  var origin = jQuery.extend({}, data.origins[data.originIndex[originRoll - 1]]);
  var primaryOrigin = origin.name;
  // check for double
  if (originRoll == data.originIndex.length) {
    originRoll = Math.ceil(Math.random() * (data.originIndex.length - 1));
    origin = jQuery.extend({}, data.origins[data.originIndex[originRoll - 1]]);
    primaryOrigin = origin.name;
    var r = originRoll;
    var o = origin;
    while (origin.name == o.name) {
      r = Math.ceil(Math.random() * (data.originIndex.length - 1));
      o = data.origins[data.originIndex[r - 1]];
    }
    origin.name += ' ' + o.name;
    origin.powersets = Math.max(origin.powersets, o.powersets);
    origin.SFX += o.SFX - 1;
    origin.limit += o.limit - 1;
    origin.step += o.step;
    origin.powers = origin.powers.concat(o.powers);
    origin.expert += o.expert;
    origin.master += o.master;
    origin.mutant = origin.mutant || o.mutant;
    origin.altered = origin.altered || o.altered;
    origin.trained = origin.trained || o.trained;
    origin.gear = origin.gear || o.gear;
    originRoll = data.originIndex.length;
  }
  setType(origin);
  ds += '<h2>Origin: ' + origin.name + '</h2>';
  
  // roll affiliation
  var affiliationRoll = Math.ceil(Math.random() * data.affiliations.length);
  var affiliation = jQuery.extend({}, data.affiliations[affiliationRoll - 1]);
  ds += '<p><b>Affiliations:</b> Solo d' + affiliation.solo + ', Buddy d' + affiliation.buddy + ', Team d' + affiliation.team + '</p>';
  
  // roll distinctions
  ds += '<p><b>Distinctions:</b><br />';
  for (d = 0; d < 3; d++) {
    r = Math.ceil(Math.random() * data.distinctions.length);
    dis = data.distinctions[r - 1];
    ds += dis + (d < 2 ? ', ' : '');
  }
  ds += '</p>';
  
  // roll powersets
  for (p = 0; p < origin.powersets; p++) {
    var index = p == 0 ? data.primaryIndex : data.secondaryIndex;
    var powersetRoll = Math.ceil(Math.random() * index.length);
    var powerset = jQuery.extend({}, data.powersets[index[powersetRoll - 1]]);
    var powerful = false;
    // check for double
    if (powersetRoll == index.length) {
      powersetRoll = Math.ceil(Math.random() * (index.length - 1));
      powerset = jQuery.extend({}, data.powersets[index[powersetRoll - 1]]);
      r = Math.ceil(Math.random() * (index.length - 1));
      p2 = data.powersets[index[r - 1]];
      powerset.powers = powerset.powers.concat(p2.powers);
      powerset.SFX += p2.SFX;
      powersetRoll = index.length;
    }
    // adjust from origin
    origin.SFX += p == 0 ? powerset.SFX : 0;
    if (p == 0) {
      powerset.powers = powerset.powers.concat(origin.powers);
      powerset.powers.sort(function(a,b){return b-a});
      for (s = 0; s < Math.min(origin.step, powerset.powers.length); s++) {
        powerset.powers[s] += 2;
      }
    }
    // theme
    var themeRoll = Math.ceil(Math.random() * data.themes[primaryOrigin].length);
    var theme = jQuery.extend({}, data.powers[data.themes[primaryOrigin][themeRoll - 1]]);
    var themeIndex = data.themes[primaryOrigin][themeRoll - 1];
    updateType(themeIndex, origin);
    var powerlist = {};
    var energycontrol, controltrip;
    for (t = 0; t < powerset.powers.length; t++) {
      die = powerset.powers[t];
      var traitRoll, trait, traitName = 'BLANK';
      while (powerlist[traitName] || traitName == 'BLANK') {
        trait = chooseTrait(theme, primaryOrigin, origin);
        traitName = trait.choices.length > 0 ? trait.choices[Math.ceil(Math.random() * trait.choices.length) - 1] : trait.name;
        // energy
        if (trait.energy) {
          energy = trait.energies ?
            trait.energies[Math.ceil(Math.random() * trait.energies.length) - 1] :
            data.energies[Math.ceil(Math.random() * data.energies.length) - 1];
          // worry about linking with control powers?
          if (trait.name == 'Elemental Control Power' || trait.linkcontrol) {
            if (trait.name == 'Elemental Control Power' && powerlist['Psychic Resistance'] && !powerlist[energy + ' Resistance']) {
              powerlist[energy + ' Resistance'] = powerlist['Psychic Resistance'];
              delete powerlist['Psychic Resistance'];
            } else if (energycontrol && trait.name == 'Elemental Control Power' && powerlist[energycontrol + ' Resistance'] && !powerlist[energy + ' Resistance']) {
              powerlist[energy + ' Resistance'] = powerlist[energycontrol + ' Resistance'];
              delete powerlist[energycontrol + ' Resistance'];
            } else if (trait.name == 'Elemental Control Power' && energycontrol && !controltrip || trait.linkcontrol && controltrip) {
              energy = energycontrol;
              if (trait.name == 'Psychic Resistance') {
                traitName = trait.name = energy + ' Resistance';
              }
            }
            controltrip = trait.name == 'Elemental Control Power' && !energycontrol || trait.name == 'Elemental Control Power' && controltrip;
            if (trait.linkcontrol || trait.name == 'Elemental Control Power' && controltrip) {
              energycontrol = energy;
            } else if (trait.name == 'Elemental Control Power') {
              energycontrol = null;
            }
          }
          traitName = traitName.replace('[ENERGY]', energy);
        }
      }
      // stepback
      if (trait.stepback) {
        die += -2;
      }
      powerlist[traitName] = die;
      powerful = die == 12 || powerful;
    }
    powerset.powers.sort();
    // write
    ds += '<p><b>' + theme.name + '</b><br />';
    for (traitName in powerlist) {
      ds += traitName + ' d' + powerlist[traitName] + '<br />';
    }
    ds = ds.substring(0, ds.length - 2) + '<br />';
    for (sfx = 0; sfx < origin.SFX; sfx++) {
      ds += 'SFX: ' + chooseSfx(origin, powerset.powers.length, themeIndex == 4, themeIndex == 2, themeIndex == 3) + '<br />';
    }
    for (l = 0; l < (p == 0 ? origin.limit : 1); l++) {
      ds += 'Limit: ' + chooseLimit(origin, p == 0, themeIndex == 2, themeIndex == 3, powerful, l) + '<br />';
    }
    ds += '</p>';
  }
  
  // roll specialties
  var specRoll = Math.ceil(Math.random() * data.specIndex.length);
  var spec = jQuery.extend({}, data.specialties[data.specIndex[specRoll - 1]]);
  spec.expert += origin.expert;
  spec.master += origin.master;
  chooseSpec(spec, origin);
  ds += '<p><b>Specialties:</b>';
  for (s in spec.specialties) {
    ds += spec.specialties[s] + '<br />';
  }
  ds = ds.substring(0, ds.length - 2);
  ds += '</p>';
  
  // roll milestones
  ds += '<p><b>Milestones:</b></p>';
  ds += '<p>'
  for (m = 0; m < 2; m++) {
    r = Math.ceil(Math.random() * data.milestonesIndex.length);
    ms = data.milestones[data.milestonesIndex[r - 1]];
    ds += ms + ', ';
  }
  ds = ds.substring(0, ds.length - 2);
  ds += '</p>'
  
  return ds;
}

function chooseLimit(origin, primary, mystic, psychic, powerful, index) {
  limit = 'Choose one.';
  
  suggestions = [];
  if (origin.mutant) {
    suggestions.push('Conscious Activation');
  }
  if (origin.altered) {
    suggestions.push('Exhausted');
  }
  if (mystic) {
    suggestions.push('Growing Dread');
    suggestions.push('Uncontrollable');
  }
  if (psychic) {
    suggestions.push('Conscious Activation');
    suggestions.push('Uncontrollable');
  }
  if (origin.powersets == 2) {
    suggestions.push('Mutually Exclusive');
  }
  if (powerful) {
    suggestions.push('Growing Dread');
    suggestions.push('Uncontrollable');
  }

  if (primary && index == 0 && origin.mutant) {
    limit = 'Mutant';
  } else if (primary && index == 0 && origin.gear) {
    limit = 'Gear or Power Surge';
  } else if (!primary && index == 0 && origin.mutant && origin.gear) {
    limit = 'Gear or Power Surge';
  } else if (suggestions.length > 0) {
    limit += ' Suggested - ';
    suggestions = dedupe(suggestions);
    suggestions.sort();
    for (s = 0; s < suggestions.length; s++) {
      limit += suggestions[s];
      if (s < suggestions.length - 2) {
        limit += ', ';
      } else if (s == suggestions.length - 2) {
        limit += ' or ';
      } else {
        limit += '.';
      }
    }
  }
  return limit;
}

function chooseSfx(origin, powers, techno, mystic, psychic) {
  sfx = 'Choose one.';
  
  suggestions = [];
  if (origin.powersets == 1) {
    suggestions.push('Unleashed');
    suggestions.push('Versatile');
  }
  if (powers >= 4) {
    suggestions.push('Focus');
    suggestions.push('Multipower');
  }
  if (powers < 4) {
    suggestions.push('Affliction');
    suggestions.push('Constructs');
    suggestions.push('Counterattack');
  }
  if (origin.mutant) {
    suggestions.push('Dangerous');
    suggestions.push('Unleashed');
  }
  if (origin.altered) {
    suggestions.push('Absorption');
    suggestions.push('Counterattack');
  }
  if (origin.trained) {
    suggestions.push('Focus');
    suggestions.push('Second Wind');
  }
  if (techno) {
    suggestions.push('Afflict');
    suggestions.push('Area Attack');
    suggestions.push('Boost');
    suggestions.push('Burst');
  }
  if (mystic) {
    suggestions.push('Constructs');
    suggestions.push('Healing');
  }
  if (psychic) {
    suggestions.push('Constructs');
    suggestions.push('Unleashed');
  }
  
  if (suggestions.length > 0) {
    sfx += ' Suggested - ';
    suggestions = dedupe(suggestions);
    suggestions.sort();
    for (s = 0; s < suggestions.length; s++) {
      sfx += suggestions[s];
      if (s < suggestions.length - 2) {
        sfx += ', ';
      } else if (s == suggestions.length - 2) {
        sfx += ' or ';
      } else {
        sfx += '.';
      }
    }
  }
  return sfx;
}

function chooseSpec(spec, origin) {
  master = spec.master;
  expert = spec.expert;
  total = master + expert;
  list = [];
  
  if (origin.types.mystic) {
    oneOrBoth(list, 'Mystic', 'Cosmic');
  }
  if (origin.types.psychic) {
    oneOrBoth(list, 'Psych', 'Menace');
  }
  if (origin.types.tech) {
    oneOrBoth(list, 'Science', 'Tech');
  }
  if (origin.types.uncommon) {
    oneOrNone(list, 'Cosmic');
  }
  oneOrNone(list, 'Combat');
  list = dedupe(list);
  list = list.slice(0, total);
  
  while (list.length < total) {
    r = Math.ceil(Math.random() * data.specTypes.length);
    s = data.specTypes[r - 1];
    list.push(s);
    list = dedupe(list);
  }
  list.sort();
  for (i = 0; i < list.length; i++) {
    r = Math.ceil(Math.random() * 2);
    if (master > 0 && r == 1 || master > 0 && expert == 0) {
      list[i] += ' Master';
      master += -1;
    } else if (expert > 0 && r == 2 || expert > 0 && master == 0) {
      list[i] += ' Expert';
      expert += -1;
    }
  }
  spec.specialties = list;
}

function oneOrBoth(a, b, c) {
  r = Math.ceil(Math.random() * 3);
  switch (r) {
    case 1:
      a.push(b);
    case 2:
      a.push(c);
      break;
    case 3:
      a.push(b);
  }
}

function oneOrNone(a, b) {
  r = Math.ceil(Math.random() * 2);
  if (r == 1) {
      a.push(b);
  }
}

function chooseTrait(theme, primaryOrigin, origin) {
  traitRoll = Math.ceil(Math.random() * theme.options.length);
  trait = theme.options[traitRoll - 1];
  // move to another chart?
  if (trait.movechart) {
    themeRoll = Math.ceil(Math.random() * (data.themes2[primaryOrigin].length - 1));
    move = trait.movechart == 999 ? data.themes2[primaryOrigin][themeRoll] : trait.movechart;
    otherTheme = jQuery.extend({}, data.powers[move]);
    if (move == 1) {
      updateType(move, origin);
    }
    trait = chooseTrait(otherTheme, primaryOrigin, origin);
  }
  return trait;
}

function setType(origin) {
  origin.types = {
    mystic: false,
    psychic: false,
    tech: false,
    uncommon: false
  };
}

function updateType(theme, origin) {
  if (theme == 1) {
    origin.types.uncommon = true;
  } else if (theme == 2) {
    origin.types.mystic = true;
  } else if (theme == 3) {
    origin.types.psychic = true;
  } else if (theme == 4) {
    origin.types.tech = true;
  }
}

function dedupe(a) {
  var u = {};
  var a2 = [];
  for (v in a) { 
    if (!u[a[v]] ) {
      u[a[v]] = true;
      a2.push(a[v]);
    }
  };
  return a2;
}
