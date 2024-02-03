export const allTypes = [
  {
    type: 'Normal',
    zh_Type: '一般',
    color: '#A8A77A',
    damage: {
      doubleDamageFrom: ['Fighting'],
      halfDamageFrom: [],
      noDamageFrom: ['Ghost'],
    },
  },
  {
    type: 'Fighting',
    zh_Type: '格鬥',
    color: '#C22E28',
    damage: {
      doubleDamageFrom: ['Flying', 'Psychic', 'Fairy'],
      halfDamageFrom: ['Rock', 'Bug', 'Dark'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Flying',
    zh_Type: '飛行',
    color: '#A98FF3',
    damage: {
      doubleDamageFrom: ['Rock', 'Electric', 'Ice'],
      halfDamageFrom: ['Fighting', 'Bug', 'Grass'],
      noDamageFrom: ['Ground'],
    },
  },
  {
    type: 'Poison',
    zh_Type: '毒',
    color: '#A33EA1',
    damage: {
      doubleDamageFrom: ['Ground', 'Psychic'],
      halfDamageFrom: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Ground',
    zh_Type: '地面',
    color: '#E2BF65',
    damage: {
      doubleDamageFrom: ['Water', 'Grass', 'Ice'],
      halfDamageFrom: ['Poison', 'Rock'],
      noDamageFrom: ['Electric'],
    },
  },
  {
    type: 'Rock',
    zh_Type: '岩石',
    color: '#B6A136',
    damage: {
      doubleDamageFrom: ['Fighting', 'Ground', 'Steel', 'Water', 'Grass'],
      halfDamageFrom: ['Normal', 'Flying', 'Poison', 'Fire'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Bug',
    zh_Type: '蟲',
    color: '#A6B91A',
    damage: {
      doubleDamageFrom: ['Flying', 'Rock', 'Fire'],
      halfDamageFrom: ['Fighting', 'Ground', 'Grass'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Ghost',
    zh_Type: '幽靈',
    color: '#735797',
    damage: {
      doubleDamageFrom: ['Ghost', 'Dark'],
      halfDamageFrom: ['Poison', 'Bug'],
      noDamageFrom: ['Normal', 'Fighting'],
    },
  },
  {
    type: 'Steel',
    zh_Type: '鋼',
    color: '#B7B7CE',
    damage: {
      doubleDamageFrom: ['Fighting', 'Ground', 'Fire'],
      halfDamageFrom: [
        'Normal',
        'Flying',
        'Rock',
        'Bug',
        'Steel',
        'Grass',
        'Psychic',
        'Ice',
        'Dragon',
        'Fairy',
      ],
      noDamageFrom: ['Poison'],
    },
  },
  {
    type: 'Fire',
    zh_Type: '火',
    color: '#EE8130',
    damage: {
      doubleDamageFrom: ['Ground', 'Rock', 'Water'],
      halfDamageFrom: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice', 'Fairy'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Water',
    zh_Type: '水',
    color: '#6390F0',
    damage: {
      doubleDamageFrom: ['Grass', 'Electric'],
      halfDamageFrom: ['Steel', 'Fire', 'Water', 'Ice'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Grass',
    zh_Type: '草',
    color: '#7AC74C',
    damage: {
      doubleDamageFrom: ['Flying', 'Poison', 'Bug', 'Fire', 'Ice'],
      halfDamageFrom: ['Ground', 'Water', 'Grass', 'Electric'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Electric',
    zh_Type: '電',
    color: '#F7D02C',
    damage: {
      doubleDamageFrom: ['Ground'],
      halfDamageFrom: ['Flying', 'Steel', 'Electric'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Psychic',
    zh_Type: '超能力',
    color: '#F95587',
    damage: {
      doubleDamageFrom: ['Bug', 'Ghost', 'Dark'],
      halfDamageFrom: ['Fighting', 'Psychic'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Ice',
    zh_Type: '冰',
    color: '#96D9D6',
    damage: {
      doubleDamageFrom: ['Fighting', 'Rock', 'Steel', 'Fire'],
      halfDamageFrom: ['Ice'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Dragon',
    zh_Type: '龍',
    color: '#6F35FC',
    damage: {
      doubleDamageFrom: ['Ice', 'Dragon', 'Fairy'],
      halfDamageFrom: ['Fire', 'Water', 'Grass', 'Electric'],
      noDamageFrom: [],
    },
  },
  {
    type: 'Dark',
    zh_Type: '惡',
    color: '#705746',
    damage: {
      doubleDamageFrom: ['Fighting', 'Bug', 'Fairy'],
      halfDamageFrom: ['Ghost', 'Dark'],
      noDamageFrom: ['Psychic'],
    },
  },
  {
    type: 'Fairy',
    zh_Type: '妖精',
    color: '#D685AD',
    damage: {
      doubleDamageFrom: ['Poison', 'Steel'],
      halfDamageFrom: ['Fighting', 'Bug', 'Dark'],
      noDamageFrom: ['Dragon'],
    },
  },
];

export const allPokemonName = [
  {
    dexNr: 1,
    name: 'Bulbasaur',
    zh_name: '妙蛙種子',
  },
  {
    dexNr: 2,
    name: 'Ivysaur',
    zh_name: '妙蛙草',
  },
  {
    dexNr: 3,
    name: 'Venusaur',
    zh_name: '妙蛙花',
  },
  {
    dexNr: 4,
    name: 'Charmander',
    zh_name: '小火龍',
  },
  {
    dexNr: 5,
    name: 'Charmeleon',
    zh_name: '火恐龍',
  },
  {
    dexNr: 6,
    name: 'Charizard',
    zh_name: '噴火龍',
  },
  {
    dexNr: 7,
    name: 'Squirtle',
    zh_name: '傑尼龜',
  },
  {
    dexNr: 8,
    name: 'Wartortle',
    zh_name: '卡咪龜',
  },
  {
    dexNr: 9,
    name: 'Blastoise',
    zh_name: '水箭龜',
  },
  {
    dexNr: 10,
    name: 'Caterpie',
    zh_name: '綠毛蟲',
  },
  {
    dexNr: 11,
    name: 'Metapod',
    zh_name: '鐵甲蛹',
  },
  {
    dexNr: 12,
    name: 'Butterfree',
    zh_name: '巴大蝶',
  },
  {
    dexNr: 13,
    name: 'Weedle',
    zh_name: '獨角蟲',
  },
  {
    dexNr: 14,
    name: 'Kakuna',
    zh_name: '鐵殼蛹',
  },
  {
    dexNr: 15,
    name: 'Beedrill',
    zh_name: '大針蜂',
  },
  {
    dexNr: 16,
    name: 'Pidgey',
    zh_name: '波波',
  },
  {
    dexNr: 17,
    name: 'Pidgeotto',
    zh_name: '比比鳥',
  },
  {
    dexNr: 18,
    name: 'Pidgeot',
    zh_name: '大比鳥',
  },
  {
    dexNr: 19,
    name: 'Rattata',
    zh_name: '小拉達',
  },
  {
    dexNr: 20,
    name: 'Raticate',
    zh_name: '拉達',
  },
  {
    dexNr: 21,
    name: 'Spearow',
    zh_name: '烈雀',
  },
  {
    dexNr: 22,
    name: 'Fearow',
    zh_name: '大嘴雀',
  },
  {
    dexNr: 23,
    name: 'Ekans',
    zh_name: '阿柏蛇',
  },
  {
    dexNr: 24,
    name: 'Arbok',
    zh_name: '阿柏怪',
  },
  {
    dexNr: 25,
    name: 'Pikachu',
    zh_name: '皮卡丘',
  },
  {
    dexNr: 26,
    name: 'Raichu',
    zh_name: '雷丘',
  },
  {
    dexNr: 27,
    name: 'Sandshrew',
    zh_name: '穿山鼠',
  },
  {
    dexNr: 28,
    name: 'Sandslash',
    zh_name: '穿山王',
  },
  {
    dexNr: 29,
    name: 'Nidoran♀',
    zh_name: '尼多蘭',
  },
  {
    dexNr: 30,
    name: 'Nidorina',
    zh_name: '尼多娜',
  },
  {
    dexNr: 31,
    name: 'Nidoqueen',
    zh_name: '尼多后',
  },
  {
    dexNr: 32,
    name: 'Nidoran♂',
    zh_name: '尼多朗',
  },
  {
    dexNr: 33,
    name: 'Nidorino',
    zh_name: '尼多力諾',
  },
  {
    dexNr: 34,
    name: 'Nidoking',
    zh_name: '尼多王',
  },
  {
    dexNr: 35,
    name: 'Clefairy',
    zh_name: '皮皮',
  },
  {
    dexNr: 36,
    name: 'Clefable',
    zh_name: '皮可西',
  },
  {
    dexNr: 37,
    name: 'Vulpix',
    zh_name: '六尾',
  },
  {
    dexNr: 38,
    name: 'Ninetales',
    zh_name: '九尾',
  },
  {
    dexNr: 39,
    name: 'Jigglypuff',
    zh_name: '胖丁',
  },
  {
    dexNr: 40,
    name: 'Wigglytuff',
    zh_name: '胖可丁',
  },
  {
    dexNr: 41,
    name: 'Zubat',
    zh_name: '超音蝠',
  },
  {
    dexNr: 42,
    name: 'Golbat',
    zh_name: '大嘴蝠',
  },
  {
    dexNr: 43,
    name: 'Oddish',
    zh_name: '走路草',
  },
  {
    dexNr: 44,
    name: 'Gloom',
    zh_name: '臭臭花',
  },
  {
    dexNr: 45,
    name: 'Vileplume',
    zh_name: '霸王花',
  },
  {
    dexNr: 46,
    name: 'Paras',
    zh_name: '派拉斯',
  },
  {
    dexNr: 47,
    name: 'Parasect',
    zh_name: '派拉斯特',
  },
  {
    dexNr: 48,
    name: 'Venonat',
    zh_name: '毛球',
  },
  {
    dexNr: 49,
    name: 'Venomoth',
    zh_name: '摩魯蛾',
  },
  {
    dexNr: 50,
    name: 'Diglett',
    zh_name: '地鼠',
  },
  {
    dexNr: 51,
    name: 'Dugtrio',
    zh_name: '三地鼠',
  },
  {
    dexNr: 52,
    name: 'Meowth',
    zh_name: '喵喵',
  },
  {
    dexNr: 53,
    name: 'Persian',
    zh_name: '貓老大',
  },
  {
    dexNr: 54,
    name: 'Psyduck',
    zh_name: '可達鴨',
  },
  {
    dexNr: 55,
    name: 'Golduck',
    zh_name: '哥達鴨',
  },
  {
    dexNr: 56,
    name: 'Mankey',
    zh_name: '猴怪',
  },
  {
    dexNr: 57,
    name: 'Primeape',
    zh_name: '火爆猴',
  },
  {
    dexNr: 58,
    name: 'Growlithe',
    zh_name: '卡蒂狗',
  },
  {
    dexNr: 59,
    name: 'Arcanine',
    zh_name: '風速狗',
  },
  {
    dexNr: 60,
    name: 'Poliwag',
    zh_name: '蚊香蝌蚪',
  },
  {
    dexNr: 61,
    name: 'Poliwhirl',
    zh_name: '蚊香君',
  },
  {
    dexNr: 62,
    name: 'Poliwrath',
    zh_name: '蚊香泳士',
  },
  {
    dexNr: 63,
    name: 'Abra',
    zh_name: '凱西',
  },
  {
    dexNr: 64,
    name: 'Kadabra',
    zh_name: '勇基拉',
  },
  {
    dexNr: 65,
    name: 'Alakazam',
    zh_name: '胡地',
  },
  {
    dexNr: 66,
    name: 'Machop',
    zh_name: '腕力',
  },
  {
    dexNr: 67,
    name: 'Machoke',
    zh_name: '豪力',
  },
  {
    dexNr: 68,
    name: 'Machamp',
    zh_name: '怪力',
  },
  {
    dexNr: 69,
    name: 'Bellsprout',
    zh_name: '喇叭芽',
  },
  {
    dexNr: 70,
    name: 'Weepinbell',
    zh_name: '口呆花',
  },
  {
    dexNr: 71,
    name: 'Victreebel',
    zh_name: '大食花',
  },
  {
    dexNr: 72,
    name: 'Tentacool',
    zh_name: '瑪瑙水母',
  },
  {
    dexNr: 73,
    name: 'Tentacruel',
    zh_name: '毒刺水母',
  },
  {
    dexNr: 74,
    name: 'Geodude',
    zh_name: '小拳石',
  },
  {
    dexNr: 75,
    name: 'Graveler',
    zh_name: '隆隆石',
  },
  {
    dexNr: 76,
    name: 'Golem',
    zh_name: '隆隆岩',
  },
  {
    dexNr: 77,
    name: 'Ponyta',
    zh_name: '小火馬',
  },
  {
    dexNr: 78,
    name: 'Rapidash',
    zh_name: '烈焰馬',
  },
  {
    dexNr: 79,
    name: 'Slowpoke',
    zh_name: '呆呆獸',
  },
  {
    dexNr: 80,
    name: 'Slowbro',
    zh_name: '呆殼獸',
  },
  {
    dexNr: 81,
    name: 'Magnemite',
    zh_name: '小磁怪',
  },
  {
    dexNr: 82,
    name: 'Magneton',
    zh_name: '三合一磁怪',
  },
  {
    dexNr: 83,
    name: "Farfetch'd",
    zh_name: '大蔥鴨',
  },
  {
    dexNr: 84,
    name: 'Doduo',
    zh_name: '嘟嘟',
  },
  {
    dexNr: 85,
    name: 'Dodrio',
    zh_name: '嘟嘟利',
  },
  {
    dexNr: 86,
    name: 'Seel',
    zh_name: '小海獅',
  },
  {
    dexNr: 87,
    name: 'Dewgong',
    zh_name: '白海獅',
  },
  {
    dexNr: 88,
    name: 'Grimer',
    zh_name: '臭泥',
  },
  {
    dexNr: 89,
    name: 'Muk',
    zh_name: '臭臭泥',
  },
  {
    dexNr: 90,
    name: 'Shellder',
    zh_name: '大舌貝',
  },
  {
    dexNr: 91,
    name: 'Cloyster',
    zh_name: '刺甲貝',
  },
  {
    dexNr: 92,
    name: 'Gastly',
    zh_name: '鬼斯',
  },
  {
    dexNr: 93,
    name: 'Haunter',
    zh_name: '鬼斯通',
  },
  {
    dexNr: 94,
    name: 'Gengar',
    zh_name: '耿鬼',
  },
  {
    dexNr: 95,
    name: 'Onix',
    zh_name: '大岩蛇',
  },
  {
    dexNr: 96,
    name: 'Drowzee',
    zh_name: '催眠貘',
  },
  {
    dexNr: 97,
    name: 'Hypno',
    zh_name: '引夢貘人',
  },
  {
    dexNr: 98,
    name: 'Krabby',
    zh_name: '大鉗蟹',
  },
  {
    dexNr: 99,
    name: 'Kingler',
    zh_name: '巨鉗蟹',
  },
  {
    dexNr: 100,
    name: 'Voltorb',
    zh_name: '霹靂電球',
  },
  {
    dexNr: 101,
    name: 'Electrode',
    zh_name: '頑皮雷彈',
  },
  {
    dexNr: 102,
    name: 'Exeggcute',
    zh_name: '蛋蛋',
  },
  {
    dexNr: 103,
    name: 'Exeggutor',
    zh_name: '椰蛋樹',
  },
  {
    dexNr: 104,
    name: 'Cubone',
    zh_name: '卡拉卡拉',
  },
  {
    dexNr: 105,
    name: 'Marowak',
    zh_name: '嘎啦嘎啦',
  },
  {
    dexNr: 106,
    name: 'Hitmonlee',
    zh_name: '飛腿郎',
  },
  {
    dexNr: 107,
    name: 'Hitmonchan',
    zh_name: '快拳郎',
  },
  {
    dexNr: 108,
    name: 'Lickitung',
    zh_name: '大舌頭',
  },
  {
    dexNr: 109,
    name: 'Koffing',
    zh_name: '瓦斯彈',
  },
  {
    dexNr: 110,
    name: 'Weezing',
    zh_name: '雙彈瓦斯',
  },
  {
    dexNr: 111,
    name: 'Rhyhorn',
    zh_name: '獨角犀牛',
  },
  {
    dexNr: 112,
    name: 'Rhydon',
    zh_name: '鑽角犀獸',
  },
  {
    dexNr: 113,
    name: 'Chansey',
    zh_name: '吉利蛋',
  },
  {
    dexNr: 114,
    name: 'Tangela',
    zh_name: '蔓藤怪',
  },
  {
    dexNr: 115,
    name: 'Kangaskhan',
    zh_name: '袋獸',
  },
  {
    dexNr: 116,
    name: 'Horsea',
    zh_name: '墨海馬',
  },
  {
    dexNr: 117,
    name: 'Seadra',
    zh_name: '海刺龍',
  },
  {
    dexNr: 118,
    name: 'Goldeen',
    zh_name: '角金魚',
  },
  {
    dexNr: 119,
    name: 'Seaking',
    zh_name: '金魚王',
  },
  {
    dexNr: 120,
    name: 'Staryu',
    zh_name: '海星星',
  },
  {
    dexNr: 121,
    name: 'Starmie',
    zh_name: '寶石海星',
  },
  {
    dexNr: 122,
    name: 'Mr. Mime',
    zh_name: '魔牆人偶',
  },
  {
    dexNr: 123,
    name: 'Scyther',
    zh_name: '飛天螳螂',
  },
  {
    dexNr: 124,
    name: 'Jynx',
    zh_name: '迷唇姐',
  },
  {
    dexNr: 125,
    name: 'Electabuzz',
    zh_name: '電擊獸',
  },
  {
    dexNr: 126,
    name: 'Magmar',
    zh_name: '鴨嘴火獸',
  },
  {
    dexNr: 127,
    name: 'Pinsir',
    zh_name: '凱羅斯',
  },
  {
    dexNr: 128,
    name: 'Tauros',
    zh_name: '肯泰羅',
  },
  {
    dexNr: 129,
    name: 'Magikarp',
    zh_name: '鯉魚王',
  },
  {
    dexNr: 130,
    name: 'Gyarados',
    zh_name: '暴鯉龍',
  },
  {
    dexNr: 131,
    name: 'Lapras',
    zh_name: '拉普拉斯',
  },
  {
    dexNr: 132,
    name: 'Ditto',
    zh_name: '百變怪',
  },
  {
    dexNr: 133,
    name: 'Eevee',
    zh_name: '伊布',
  },
  {
    dexNr: 134,
    name: 'Vaporeon',
    zh_name: '水伊布',
  },
  {
    dexNr: 135,
    name: 'Jolteon',
    zh_name: '雷伊布',
  },
  {
    dexNr: 136,
    name: 'Flareon',
    zh_name: '火伊布',
  },
  {
    dexNr: 137,
    name: 'Porygon',
    zh_name: '多邊獸',
  },
  {
    dexNr: 138,
    name: 'Omanyte',
    zh_name: '菊石獸',
  },
  {
    dexNr: 139,
    name: 'Omastar',
    zh_name: '多刺菊石獸',
  },
  {
    dexNr: 140,
    name: 'Kabuto',
    zh_name: '化石盔',
  },
  {
    dexNr: 141,
    name: 'Kabutops',
    zh_name: '鐮刀盔',
  },
  {
    dexNr: 142,
    name: 'Aerodactyl',
    zh_name: '化石翼龍',
  },
  {
    dexNr: 143,
    name: 'Snorlax',
    zh_name: '卡比獸',
  },
  {
    dexNr: 144,
    name: 'Articuno',
    zh_name: '急凍鳥',
  },
  {
    dexNr: 145,
    name: 'Zapdos',
    zh_name: '閃電鳥',
  },
  {
    dexNr: 146,
    name: 'Moltres',
    zh_name: '火焰鳥',
  },
  {
    dexNr: 147,
    name: 'Dratini',
    zh_name: '迷你龍',
  },
  {
    dexNr: 148,
    name: 'Dragonair',
    zh_name: '哈克龍',
  },
  {
    dexNr: 149,
    name: 'Dragonite',
    zh_name: '快龍',
  },
  {
    dexNr: 150,
    name: 'Mewtwo',
    zh_name: '超夢',
  },
  {
    dexNr: 151,
    name: 'Mew',
    zh_name: '夢幻',
  },
  {
    dexNr: 152,
    name: 'Chikorita',
    zh_name: '菊草葉',
  },
  {
    dexNr: 153,
    name: 'Bayleef',
    zh_name: '月桂葉',
  },
  {
    dexNr: 154,
    name: 'Meganium',
    zh_name: '大竺葵',
  },
  {
    dexNr: 155,
    name: 'Cyndaquil',
    zh_name: '火球鼠',
  },
  {
    dexNr: 156,
    name: 'Quilava',
    zh_name: '火岩鼠',
  },
  {
    dexNr: 157,
    name: 'Typhlosion',
    zh_name: '火爆獸',
  },
  {
    dexNr: 158,
    name: 'Totodile',
    zh_name: '小鋸鱷',
  },
  {
    dexNr: 159,
    name: 'Croconaw',
    zh_name: '藍鱷',
  },
  {
    dexNr: 160,
    name: 'Feraligatr',
    zh_name: '大力鱷',
  },
  {
    dexNr: 161,
    name: 'Sentret',
    zh_name: '尾立',
  },
  {
    dexNr: 162,
    name: 'Furret',
    zh_name: '大尾立',
  },
  {
    dexNr: 163,
    name: 'Hoothoot',
    zh_name: '咕咕',
  },
  {
    dexNr: 164,
    name: 'Noctowl',
    zh_name: '貓頭夜鷹',
  },
  {
    dexNr: 165,
    name: 'Ledyba',
    zh_name: '芭瓢蟲',
  },
  {
    dexNr: 166,
    name: 'Ledian',
    zh_name: '安瓢蟲',
  },
  {
    dexNr: 167,
    name: 'Spinarak',
    zh_name: '圓絲蛛',
  },
  {
    dexNr: 168,
    name: 'Ariados',
    zh_name: '阿利多斯',
  },
  {
    dexNr: 169,
    name: 'Crobat',
    zh_name: '叉字蝠',
  },
  {
    dexNr: 170,
    name: 'Chinchou',
    zh_name: '燈籠魚',
  },
  {
    dexNr: 171,
    name: 'Lanturn',
    zh_name: '電燈怪',
  },
  {
    dexNr: 172,
    name: 'Pichu',
    zh_name: '皮丘',
  },
  {
    dexNr: 173,
    name: 'Cleffa',
    zh_name: '皮寶寶',
  },
  {
    dexNr: 174,
    name: 'Igglybuff',
    zh_name: '寶寶丁',
  },
  {
    dexNr: 175,
    name: 'Togepi',
    zh_name: '波克比',
  },
  {
    dexNr: 176,
    name: 'Togetic',
    zh_name: '波克基古',
  },
  {
    dexNr: 177,
    name: 'Natu',
    zh_name: '天然雀',
  },
  {
    dexNr: 178,
    name: 'Xatu',
    zh_name: '天然鳥',
  },
  {
    dexNr: 179,
    name: 'Mareep',
    zh_name: '咩利羊',
  },
  {
    dexNr: 180,
    name: 'Flaaffy',
    zh_name: '茸茸羊',
  },
  {
    dexNr: 181,
    name: 'Ampharos',
    zh_name: '電龍',
  },
  {
    dexNr: 182,
    name: 'Bellossom',
    zh_name: '美麗花',
  },
  {
    dexNr: 183,
    name: 'Marill',
    zh_name: '瑪力露',
  },
  {
    dexNr: 184,
    name: 'Azumarill',
    zh_name: '瑪力露麗',
  },
  {
    dexNr: 185,
    name: 'Sudowoodo',
    zh_name: '樹才怪',
  },
  {
    dexNr: 186,
    name: 'Politoed',
    zh_name: '蚊香蛙皇',
  },
  {
    dexNr: 187,
    name: 'Hoppip',
    zh_name: '毽子草',
  },
  {
    dexNr: 188,
    name: 'Skiploom',
    zh_name: '毽子花',
  },
  {
    dexNr: 189,
    name: 'Jumpluff',
    zh_name: '毽子棉',
  },
  {
    dexNr: 190,
    name: 'Aipom',
    zh_name: '長尾怪手',
  },
  {
    dexNr: 191,
    name: 'Sunkern',
    zh_name: '向日種子',
  },
  {
    dexNr: 192,
    name: 'Sunflora',
    zh_name: '向日花怪',
  },
  {
    dexNr: 193,
    name: 'Yanma',
    zh_name: '蜻蜻蜓',
  },
  {
    dexNr: 194,
    name: 'Wooper',
    zh_name: '烏波',
  },
  {
    dexNr: 195,
    name: 'Quagsire',
    zh_name: '沼王',
  },
  {
    dexNr: 196,
    name: 'Espeon',
    zh_name: '太陽伊布',
  },
  {
    dexNr: 197,
    name: 'Umbreon',
    zh_name: '月亮伊布',
  },
  {
    dexNr: 198,
    name: 'Murkrow',
    zh_name: '黑暗鴉',
  },
  {
    dexNr: 199,
    name: 'Slowking',
    zh_name: '呆呆王',
  },
  {
    dexNr: 200,
    name: 'Misdreavus',
    zh_name: '夢妖',
  },
  {
    dexNr: 201,
    name: 'Unown',
    zh_name: '未知圖騰',
  },
  {
    dexNr: 202,
    name: 'Wobbuffet',
    zh_name: '果然翁',
  },
  {
    dexNr: 203,
    name: 'Girafarig',
    zh_name: '麒麟奇',
  },
  {
    dexNr: 204,
    name: 'Pineco',
    zh_name: '榛果球',
  },
  {
    dexNr: 205,
    name: 'Forretress',
    zh_name: '佛烈托斯',
  },
  {
    dexNr: 206,
    name: 'Dunsparce',
    zh_name: '土龍弟弟',
  },
  {
    dexNr: 207,
    name: 'Gligar',
    zh_name: '天蠍',
  },
  {
    dexNr: 208,
    name: 'Steelix',
    zh_name: '大鋼蛇',
  },
  {
    dexNr: 209,
    name: 'Snubbull',
    zh_name: '布魯',
  },
  {
    dexNr: 210,
    name: 'Granbull',
    zh_name: '布魯皇',
  },
  {
    dexNr: 211,
    name: 'Qwilfish',
    zh_name: '千針魚',
  },
  {
    dexNr: 212,
    name: 'Scizor',
    zh_name: '巨鉗螳螂',
  },
  {
    dexNr: 213,
    name: 'Shuckle',
    zh_name: '壺壺',
  },
  {
    dexNr: 214,
    name: 'Heracross',
    zh_name: '赫拉克羅斯',
  },
  {
    dexNr: 215,
    name: 'Sneasel',
    zh_name: '狃拉',
  },
  {
    dexNr: 216,
    name: 'Teddiursa',
    zh_name: '熊寶寶',
  },
  {
    dexNr: 217,
    name: 'Ursaring',
    zh_name: '圈圈熊',
  },
  {
    dexNr: 218,
    name: 'Slugma',
    zh_name: '熔岩蟲',
  },
  {
    dexNr: 219,
    name: 'Magcargo',
    zh_name: '熔岩蝸牛',
  },
  {
    dexNr: 220,
    name: 'Swinub',
    zh_name: '小山豬',
  },
  {
    dexNr: 221,
    name: 'Piloswine',
    zh_name: '長毛豬',
  },
  {
    dexNr: 222,
    name: 'Corsola',
    zh_name: '太陽珊瑚',
  },
  {
    dexNr: 223,
    name: 'Remoraid',
    zh_name: '鐵炮魚',
  },
  {
    dexNr: 224,
    name: 'Octillery',
    zh_name: '章魚桶',
  },
  {
    dexNr: 225,
    name: 'Delibird',
    zh_name: '信使鳥',
  },
  {
    dexNr: 226,
    name: 'Mantine',
    zh_name: '巨翅飛魚',
  },
  {
    dexNr: 227,
    name: 'Skarmory',
    zh_name: '盔甲鳥',
  },
  {
    dexNr: 228,
    name: 'Houndour',
    zh_name: '戴魯比',
  },
  {
    dexNr: 229,
    name: 'Houndoom',
    zh_name: '黑魯加',
  },
  {
    dexNr: 230,
    name: 'Kingdra',
    zh_name: '刺龍王',
  },
  {
    dexNr: 231,
    name: 'Phanpy',
    zh_name: '小小象',
  },
  {
    dexNr: 232,
    name: 'Donphan',
    zh_name: '頓甲',
  },
  {
    dexNr: 233,
    name: 'Porygon2',
    zh_name: '多邊獸Ⅱ',
  },
  {
    dexNr: 234,
    name: 'Stantler',
    zh_name: '驚角鹿',
  },
  {
    dexNr: 235,
    name: 'Smeargle',
    zh_name: '圖圖犬',
  },
  {
    dexNr: 236,
    name: 'Tyrogue',
    zh_name: '無畏小子',
  },
  {
    dexNr: 237,
    name: 'Hitmontop',
    zh_name: '戰舞郎',
  },
  {
    dexNr: 238,
    name: 'Smoochum',
    zh_name: '迷唇娃',
  },
  {
    dexNr: 239,
    name: 'Elekid',
    zh_name: '電擊怪',
  },
  {
    dexNr: 240,
    name: 'Magby',
    zh_name: '鴨嘴寶寶',
  },
  {
    dexNr: 241,
    name: 'Miltank',
    zh_name: '大奶罐',
  },
  {
    dexNr: 242,
    name: 'Blissey',
    zh_name: '幸福蛋',
  },
  {
    dexNr: 243,
    name: 'Raikou',
    zh_name: '雷公',
  },
  {
    dexNr: 244,
    name: 'Entei',
    zh_name: '炎帝',
  },
  {
    dexNr: 245,
    name: 'Suicune',
    zh_name: '水君',
  },
  {
    dexNr: 246,
    name: 'Larvitar',
    zh_name: '幼基拉斯',
  },
  {
    dexNr: 247,
    name: 'Pupitar',
    zh_name: '沙基拉斯',
  },
  {
    dexNr: 248,
    name: 'Tyranitar',
    zh_name: '班基拉斯',
  },
  {
    dexNr: 249,
    name: 'Lugia',
    zh_name: '洛奇亞',
  },
  {
    dexNr: 250,
    name: 'Ho-Oh',
    zh_name: '鳳王',
  },
  {
    dexNr: 251,
    name: 'Celebi',
    zh_name: '時拉比',
  },
  {
    dexNr: 252,
    name: 'Treecko',
    zh_name: '木守宮',
  },
  {
    dexNr: 253,
    name: 'Grovyle',
    zh_name: '森林蜥蜴',
  },
  {
    dexNr: 254,
    name: 'Sceptile',
    zh_name: '蜥蜴王',
  },
  {
    dexNr: 255,
    name: 'Torchic',
    zh_name: '火稚雞',
  },
  {
    dexNr: 256,
    name: 'Combusken',
    zh_name: '力壯雞',
  },
  {
    dexNr: 257,
    name: 'Blaziken',
    zh_name: '火焰雞',
  },
  {
    dexNr: 258,
    name: 'Mudkip',
    zh_name: '水躍魚',
  },
  {
    dexNr: 259,
    name: 'Marshtomp',
    zh_name: '沼躍魚',
  },
  {
    dexNr: 260,
    name: 'Swampert',
    zh_name: '巨沼怪',
  },
  {
    dexNr: 261,
    name: 'Poochyena',
    zh_name: '土狼犬',
  },
  {
    dexNr: 262,
    name: 'Mightyena',
    zh_name: '大狼犬',
  },
  {
    dexNr: 263,
    name: 'Zigzagoon',
    zh_name: '蛇紋熊',
  },
  {
    dexNr: 264,
    name: 'Linoone',
    zh_name: '直衝熊',
  },
  {
    dexNr: 265,
    name: 'Wurmple',
    zh_name: '刺尾蟲',
  },
  {
    dexNr: 266,
    name: 'Silcoon',
    zh_name: '甲殼繭',
  },
  {
    dexNr: 267,
    name: 'Beautifly',
    zh_name: '狩獵鳳蝶',
  },
  {
    dexNr: 268,
    name: 'Cascoon',
    zh_name: '盾甲繭',
  },
  {
    dexNr: 269,
    name: 'Dustox',
    zh_name: '毒粉蛾',
  },
  {
    dexNr: 270,
    name: 'Lotad',
    zh_name: '蓮葉童子',
  },
  {
    dexNr: 271,
    name: 'Lombre',
    zh_name: '蓮帽小童',
  },
  {
    dexNr: 272,
    name: 'Ludicolo',
    zh_name: '樂天河童',
  },
  {
    dexNr: 273,
    name: 'Seedot',
    zh_name: '橡實果',
  },
  {
    dexNr: 274,
    name: 'Nuzleaf',
    zh_name: '長鼻葉',
  },
  {
    dexNr: 275,
    name: 'Shiftry',
    zh_name: '狡猾天狗',
  },
  {
    dexNr: 276,
    name: 'Taillow',
    zh_name: '傲骨燕',
  },
  {
    dexNr: 277,
    name: 'Swellow',
    zh_name: '大王燕',
  },
  {
    dexNr: 278,
    name: 'Wingull',
    zh_name: '長翅鷗',
  },
  {
    dexNr: 279,
    name: 'Pelipper',
    zh_name: '大嘴鷗',
  },
  {
    dexNr: 280,
    name: 'Ralts',
    zh_name: '拉魯拉絲',
  },
  {
    dexNr: 281,
    name: 'Kirlia',
    zh_name: '奇魯莉安',
  },
  {
    dexNr: 282,
    name: 'Gardevoir',
    zh_name: '沙奈朵',
  },
  {
    dexNr: 283,
    name: 'Surskit',
    zh_name: '溜溜糖球',
  },
  {
    dexNr: 284,
    name: 'Masquerain',
    zh_name: '雨翅蛾',
  },
  {
    dexNr: 285,
    name: 'Shroomish',
    zh_name: '蘑蘑菇',
  },
  {
    dexNr: 286,
    name: 'Breloom',
    zh_name: '斗笠菇',
  },
  {
    dexNr: 287,
    name: 'Slakoth',
    zh_name: '懶人獺',
  },
  {
    dexNr: 288,
    name: 'Vigoroth',
    zh_name: '過動猿',
  },
  {
    dexNr: 289,
    name: 'Slaking',
    zh_name: '請假王',
  },
  {
    dexNr: 290,
    name: 'Nincada',
    zh_name: '土居忍士',
  },
  {
    dexNr: 291,
    name: 'Ninjask',
    zh_name: '鐵面忍者',
  },
  {
    dexNr: 292,
    name: 'Shedinja',
    zh_name: '脫殼忍者',
  },
  {
    dexNr: 293,
    name: 'Whismur',
    zh_name: '咕妞妞',
  },
  {
    dexNr: 294,
    name: 'Loudred',
    zh_name: '吼爆彈',
  },
  {
    dexNr: 295,
    name: 'Exploud',
    zh_name: '爆音怪',
  },
  {
    dexNr: 296,
    name: 'Makuhita',
    zh_name: '幕下力士',
  },
  {
    dexNr: 297,
    name: 'Hariyama',
    zh_name: '鐵掌力士',
  },
  {
    dexNr: 298,
    name: 'Azurill',
    zh_name: '露力麗',
  },
  {
    dexNr: 299,
    name: 'Nosepass',
    zh_name: '朝北鼻',
  },
  {
    dexNr: 300,
    name: 'Skitty',
    zh_name: '向尾喵',
  },
  {
    dexNr: 301,
    name: 'Delcatty',
    zh_name: '優雅貓',
  },
  {
    dexNr: 302,
    name: 'Sableye',
    zh_name: '勾魂眼',
  },
  {
    dexNr: 303,
    name: 'Mawile',
    zh_name: '大嘴娃',
  },
  {
    dexNr: 304,
    name: 'Aron',
    zh_name: '可可多拉',
  },
  {
    dexNr: 305,
    name: 'Lairon',
    zh_name: '可多拉',
  },
  {
    dexNr: 306,
    name: 'Aggron',
    zh_name: '波士可多拉',
  },
  {
    dexNr: 307,
    name: 'Meditite',
    zh_name: '瑪沙那',
  },
  {
    dexNr: 308,
    name: 'Medicham',
    zh_name: '恰雷姆',
  },
  {
    dexNr: 309,
    name: 'Electrike',
    zh_name: '落雷獸',
  },
  {
    dexNr: 310,
    name: 'Manectric',
    zh_name: '雷電獸',
  },
  {
    dexNr: 311,
    name: 'Plusle',
    zh_name: '正電拍拍',
  },
  {
    dexNr: 312,
    name: 'Minun',
    zh_name: '負電拍拍',
  },
  {
    dexNr: 313,
    name: 'Volbeat',
    zh_name: '電螢蟲',
  },
  {
    dexNr: 314,
    name: 'Illumise',
    zh_name: '甜甜螢',
  },
  {
    dexNr: 315,
    name: 'Roselia',
    zh_name: '毒薔薇',
  },
  {
    dexNr: 316,
    name: 'Gulpin',
    zh_name: '溶食獸',
  },
  {
    dexNr: 317,
    name: 'Swalot',
    zh_name: '吞食獸',
  },
  {
    dexNr: 318,
    name: 'Carvanha',
    zh_name: '利牙魚',
  },
  {
    dexNr: 319,
    name: 'Sharpedo',
    zh_name: '巨牙鯊',
  },
  {
    dexNr: 320,
    name: 'Wailmer',
    zh_name: '吼吼鯨',
  },
  {
    dexNr: 321,
    name: 'Wailord',
    zh_name: '吼鯨王',
  },
  {
    dexNr: 322,
    name: 'Numel',
    zh_name: '呆火駝',
  },
  {
    dexNr: 323,
    name: 'Camerupt',
    zh_name: '噴火駝',
  },
  {
    dexNr: 324,
    name: 'Torkoal',
    zh_name: '煤炭龜',
  },
  {
    dexNr: 325,
    name: 'Spoink',
    zh_name: '跳跳豬',
  },
  {
    dexNr: 326,
    name: 'Grumpig',
    zh_name: '噗噗豬',
  },
  {
    dexNr: 327,
    name: 'Spinda',
    zh_name: '晃晃斑',
  },
  {
    dexNr: 328,
    name: 'Trapinch',
    zh_name: '大顎蟻',
  },
  {
    dexNr: 329,
    name: 'Vibrava',
    zh_name: '超音波幼蟲',
  },
  {
    dexNr: 330,
    name: 'Flygon',
    zh_name: '沙漠蜻蜓',
  },
  {
    dexNr: 331,
    name: 'Cacnea',
    zh_name: '刺球仙人掌',
  },
  {
    dexNr: 332,
    name: 'Cacturne',
    zh_name: '夢歌仙人掌',
  },
  {
    dexNr: 333,
    name: 'Swablu',
    zh_name: '青綿鳥',
  },
  {
    dexNr: 334,
    name: 'Altaria',
    zh_name: '七夕青鳥',
  },
  {
    dexNr: 335,
    name: 'Zangoose',
    zh_name: '貓鼬斬',
  },
  {
    dexNr: 336,
    name: 'Seviper',
    zh_name: '飯匙蛇',
  },
  {
    dexNr: 337,
    name: 'Lunatone',
    zh_name: '月石',
  },
  {
    dexNr: 338,
    name: 'Solrock',
    zh_name: '太陽岩',
  },
  {
    dexNr: 339,
    name: 'Barboach',
    zh_name: '泥泥鰍',
  },
  {
    dexNr: 340,
    name: 'Whiscash',
    zh_name: '鯰魚王',
  },
  {
    dexNr: 341,
    name: 'Corphish',
    zh_name: '龍蝦小兵',
  },
  {
    dexNr: 342,
    name: 'Crawdaunt',
    zh_name: '鐵螯龍蝦',
  },
  {
    dexNr: 343,
    name: 'Baltoy',
    zh_name: '天秤偶',
  },
  {
    dexNr: 344,
    name: 'Claydol',
    zh_name: '念力土偶',
  },
  {
    dexNr: 345,
    name: 'Lileep',
    zh_name: '觸手百合',
  },
  {
    dexNr: 346,
    name: 'Cradily',
    zh_name: '搖籃百合',
  },
  {
    dexNr: 347,
    name: 'Anorith',
    zh_name: '太古羽蟲',
  },
  {
    dexNr: 348,
    name: 'Armaldo',
    zh_name: '太古盔甲',
  },
  {
    dexNr: 349,
    name: 'Feebas',
    zh_name: '醜醜魚',
  },
  {
    dexNr: 350,
    name: 'Milotic',
    zh_name: '美納斯',
  },
  {
    dexNr: 351,
    name: 'Castform',
    zh_name: '飄浮泡泡',
  },
  {
    dexNr: 352,
    name: 'Kecleon',
    zh_name: '變隱龍',
  },
  {
    dexNr: 353,
    name: 'Shuppet',
    zh_name: '怨影娃娃',
  },
  {
    dexNr: 354,
    name: 'Banette',
    zh_name: '詛咒娃娃',
  },
  {
    dexNr: 355,
    name: 'Duskull',
    zh_name: '夜巡靈',
  },
  {
    dexNr: 356,
    name: 'Dusclops',
    zh_name: '彷徨夜靈',
  },
  {
    dexNr: 357,
    name: 'Tropius',
    zh_name: '熱帶龍',
  },
  {
    dexNr: 358,
    name: 'Chimecho',
    zh_name: '風鈴鈴',
  },
  {
    dexNr: 359,
    name: 'Absol',
    zh_name: '阿勃梭魯',
  },
  {
    dexNr: 360,
    name: 'Wynaut',
    zh_name: '小果然',
  },
  {
    dexNr: 361,
    name: 'Snorunt',
    zh_name: '雪童子',
  },
  {
    dexNr: 362,
    name: 'Glalie',
    zh_name: '冰鬼護',
  },
  {
    dexNr: 363,
    name: 'Spheal',
    zh_name: '海豹球',
  },
  {
    dexNr: 364,
    name: 'Sealeo',
    zh_name: '海魔獅',
  },
  {
    dexNr: 365,
    name: 'Walrein',
    zh_name: '帝牙海獅',
  },
  {
    dexNr: 366,
    name: 'Clamperl',
    zh_name: '珍珠貝',
  },
  {
    dexNr: 367,
    name: 'Huntail',
    zh_name: '獵斑魚',
  },
  {
    dexNr: 368,
    name: 'Gorebyss',
    zh_name: '櫻花魚',
  },
  {
    dexNr: 369,
    name: 'Relicanth',
    zh_name: '古空棘魚',
  },
  {
    dexNr: 370,
    name: 'Luvdisc',
    zh_name: '愛心魚',
  },
  {
    dexNr: 371,
    name: 'Bagon',
    zh_name: '寶貝龍',
  },
  {
    dexNr: 372,
    name: 'Shelgon',
    zh_name: '甲殼龍',
  },
  {
    dexNr: 373,
    name: 'Salamence',
    zh_name: '暴飛龍',
  },
  {
    dexNr: 374,
    name: 'Beldum',
    zh_name: '鐵啞鈴',
  },
  {
    dexNr: 375,
    name: 'Metang',
    zh_name: '金屬怪',
  },
  {
    dexNr: 376,
    name: 'Metagross',
    zh_name: '巨金怪',
  },
  {
    dexNr: 377,
    name: 'Regirock',
    zh_name: '雷吉洛克',
  },
  {
    dexNr: 378,
    name: 'Regice',
    zh_name: '雷吉艾斯',
  },
  {
    dexNr: 379,
    name: 'Registeel',
    zh_name: '雷吉斯奇魯',
  },
  {
    dexNr: 380,
    name: 'Latias',
    zh_name: '拉帝亞斯',
  },
  {
    dexNr: 381,
    name: 'Latios',
    zh_name: '拉帝歐斯',
  },
  {
    dexNr: 382,
    name: 'Kyogre',
    zh_name: '蓋歐卡',
  },
  {
    dexNr: 383,
    name: 'Groudon',
    zh_name: '固拉多',
  },
  {
    dexNr: 384,
    name: 'Rayquaza',
    zh_name: '烈空坐',
  },
  {
    dexNr: 385,
    name: 'Jirachi',
    zh_name: '基拉祈',
  },
  {
    dexNr: 386,
    name: 'Deoxys',
    zh_name: '代歐奇希斯',
  },
  {
    dexNr: 387,
    name: 'Turtwig',
    zh_name: '草苗龜',
  },
  {
    dexNr: 388,
    name: 'Grotle',
    zh_name: '樹林龜',
  },
  {
    dexNr: 389,
    name: 'Torterra',
    zh_name: '土台龜',
  },
  {
    dexNr: 390,
    name: 'Chimchar',
    zh_name: '小火焰猴',
  },
  {
    dexNr: 391,
    name: 'Monferno',
    zh_name: '猛火猴',
  },
  {
    dexNr: 392,
    name: 'Infernape',
    zh_name: '烈焰猴',
  },
  {
    dexNr: 393,
    name: 'Piplup',
    zh_name: '波加曼',
  },
  {
    dexNr: 394,
    name: 'Prinplup',
    zh_name: '波皇子',
  },
  {
    dexNr: 395,
    name: 'Empoleon',
    zh_name: '帝王拿波',
  },
  {
    dexNr: 396,
    name: 'Starly',
    zh_name: '姆克兒',
  },
  {
    dexNr: 397,
    name: 'Staravia',
    zh_name: '姆克鳥',
  },
  {
    dexNr: 398,
    name: 'Staraptor',
    zh_name: '姆克鷹',
  },
  {
    dexNr: 399,
    name: 'Bidoof',
    zh_name: '大牙狸',
  },
  {
    dexNr: 400,
    name: 'Bibarel',
    zh_name: '大尾狸',
  },
  {
    dexNr: 401,
    name: 'Kricketot',
    zh_name: '圓法師',
  },
  {
    dexNr: 402,
    name: 'Kricketune',
    zh_name: '音箱蟀',
  },
  {
    dexNr: 403,
    name: 'Shinx',
    zh_name: '小貓怪',
  },
  {
    dexNr: 404,
    name: 'Luxio',
    zh_name: '勒克貓',
  },
  {
    dexNr: 405,
    name: 'Luxray',
    zh_name: '倫琴貓',
  },
  {
    dexNr: 406,
    name: 'Budew',
    zh_name: '含羞苞',
  },
  {
    dexNr: 407,
    name: 'Roserade',
    zh_name: '羅絲雷朵',
  },
  {
    dexNr: 408,
    name: 'Cranidos',
    zh_name: '頭蓋龍',
  },
  {
    dexNr: 409,
    name: 'Rampardos',
    zh_name: '戰槌龍',
  },
  {
    dexNr: 410,
    name: 'Shieldon',
    zh_name: '盾甲龍',
  },
  {
    dexNr: 411,
    name: 'Bastiodon',
    zh_name: '護城龍',
  },
  {
    dexNr: 412,
    name: 'Burmy',
    zh_name: '結草兒',
  },
  {
    dexNr: 413,
    name: 'Wormadam',
    zh_name: '結草貴婦',
  },
  {
    dexNr: 414,
    name: 'Mothim',
    zh_name: '紳士蛾',
  },
  {
    dexNr: 415,
    name: 'Combee',
    zh_name: '三蜜蜂',
  },
  {
    dexNr: 416,
    name: 'Vespiquen',
    zh_name: '蜂女王',
  },
  {
    dexNr: 417,
    name: 'Pachirisu',
    zh_name: '帕奇利茲',
  },
  {
    dexNr: 418,
    name: 'Buizel',
    zh_name: '泳圈鼬',
  },
  {
    dexNr: 419,
    name: 'Floatzel',
    zh_name: '浮潛鼬',
  },
  {
    dexNr: 420,
    name: 'Cherubi',
    zh_name: '櫻花寶',
  },
  {
    dexNr: 421,
    name: 'Cherrim',
    zh_name: '櫻花兒',
  },
  {
    dexNr: 422,
    name: 'Shellos',
    zh_name: '無殼海兔',
  },
  {
    dexNr: 423,
    name: 'Gastrodon',
    zh_name: '海兔獸',
  },
  {
    dexNr: 424,
    name: 'Ambipom',
    zh_name: '雙尾怪手',
  },
  {
    dexNr: 425,
    name: 'Drifloon',
    zh_name: '飄飄球',
  },
  {
    dexNr: 426,
    name: 'Drifblim',
    zh_name: '隨風球',
  },
  {
    dexNr: 427,
    name: 'Buneary',
    zh_name: '捲捲耳',
  },
  {
    dexNr: 428,
    name: 'Lopunny',
    zh_name: '長耳兔',
  },
  {
    dexNr: 429,
    name: 'Mismagius',
    zh_name: '夢妖魔',
  },
  {
    dexNr: 430,
    name: 'Honchkrow',
    zh_name: '烏鴉頭頭',
  },
  {
    dexNr: 431,
    name: 'Glameow',
    zh_name: '魅力喵',
  },
  {
    dexNr: 432,
    name: 'Purugly',
    zh_name: '東施喵',
  },
  {
    dexNr: 433,
    name: 'Chingling',
    zh_name: '鈴鐺響',
  },
  {
    dexNr: 434,
    name: 'Stunky',
    zh_name: '臭鼬噗',
  },
  {
    dexNr: 435,
    name: 'Skuntank',
    zh_name: '坦克臭鼬',
  },
  {
    dexNr: 436,
    name: 'Bronzor',
    zh_name: '銅鏡怪',
  },
  {
    dexNr: 437,
    name: 'Bronzong',
    zh_name: '青銅鐘',
  },
  {
    dexNr: 438,
    name: 'Bonsly',
    zh_name: '盆才怪',
  },
  {
    dexNr: 439,
    name: 'Mime Jr.',
    zh_name: '魔尼尼',
  },
  {
    dexNr: 440,
    name: 'Happiny',
    zh_name: '小福蛋',
  },
  {
    dexNr: 441,
    name: 'Chatot',
    zh_name: '聒噪鳥',
  },
  {
    dexNr: 442,
    name: 'Spiritomb',
    zh_name: '花岩怪',
  },
  {
    dexNr: 443,
    name: 'Gible',
    zh_name: '圓陸鯊',
  },
  {
    dexNr: 444,
    name: 'Gabite',
    zh_name: '尖牙陸鯊',
  },
  {
    dexNr: 445,
    name: 'Garchomp',
    zh_name: '烈咬陸鯊',
  },
  {
    dexNr: 446,
    name: 'Munchlax',
    zh_name: '小卡比獸',
  },
  {
    dexNr: 447,
    name: 'Riolu',
    zh_name: '利歐路',
  },
  {
    dexNr: 448,
    name: 'Lucario',
    zh_name: '路卡利歐',
  },
  {
    dexNr: 449,
    name: 'Hippopotas',
    zh_name: '沙河馬',
  },
  {
    dexNr: 450,
    name: 'Hippowdon',
    zh_name: '河馬獸',
  },
  {
    dexNr: 451,
    name: 'Skorupi',
    zh_name: '鉗尾蠍',
  },
  {
    dexNr: 452,
    name: 'Drapion',
    zh_name: '龍王蠍',
  },
  {
    dexNr: 453,
    name: 'Croagunk',
    zh_name: '不良蛙',
  },
  {
    dexNr: 454,
    name: 'Toxicroak',
    zh_name: '毒骷蛙',
  },
  {
    dexNr: 455,
    name: 'Carnivine',
    zh_name: '尖牙籠',
  },
  {
    dexNr: 456,
    name: 'Finneon',
    zh_name: '螢光魚',
  },
  {
    dexNr: 457,
    name: 'Lumineon',
    zh_name: '霓虹魚',
  },
  {
    dexNr: 458,
    name: 'Mantyke',
    zh_name: '小球飛魚',
  },
  {
    dexNr: 459,
    name: 'Snover',
    zh_name: '雪笠怪',
  },
  {
    dexNr: 460,
    name: 'Abomasnow',
    zh_name: '暴雪王',
  },
  {
    dexNr: 461,
    name: 'Weavile',
    zh_name: '瑪狃拉',
  },
  {
    dexNr: 462,
    name: 'Magnezone',
    zh_name: '自爆磁怪',
  },
  {
    dexNr: 463,
    name: 'Lickilicky',
    zh_name: '大舌舔',
  },
  {
    dexNr: 464,
    name: 'Rhyperior',
    zh_name: '超甲狂犀',
  },
  {
    dexNr: 465,
    name: 'Tangrowth',
    zh_name: '巨蔓藤',
  },
  {
    dexNr: 466,
    name: 'Electivire',
    zh_name: '電擊魔獸',
  },
  {
    dexNr: 467,
    name: 'Magmortar',
    zh_name: '鴨嘴炎獸',
  },
  {
    dexNr: 468,
    name: 'Togekiss',
    zh_name: '波克基斯',
  },
  {
    dexNr: 469,
    name: 'Yanmega',
    zh_name: '遠古巨蜓',
  },
  {
    dexNr: 470,
    name: 'Leafeon',
    zh_name: '葉伊布',
  },
  {
    dexNr: 471,
    name: 'Glaceon',
    zh_name: '冰伊布',
  },
  {
    dexNr: 472,
    name: 'Gliscor',
    zh_name: '天蠍王',
  },
  {
    dexNr: 473,
    name: 'Mamoswine',
    zh_name: '象牙豬',
  },
  {
    dexNr: 474,
    name: 'Porygon-Z',
    zh_name: '多邊獸Ｚ',
  },
  {
    dexNr: 475,
    name: 'Gallade',
    zh_name: '艾路雷朵',
  },
  {
    dexNr: 476,
    name: 'Probopass',
    zh_name: '大朝北鼻',
  },
  {
    dexNr: 477,
    name: 'Dusknoir',
    zh_name: '黑夜魔靈',
  },
  {
    dexNr: 478,
    name: 'Froslass',
    zh_name: '雪妖女',
  },
  {
    dexNr: 479,
    name: 'Rotom',
    zh_name: '洛托姆',
  },
  {
    dexNr: 480,
    name: 'Uxie',
    zh_name: '由克希',
  },
  {
    dexNr: 481,
    name: 'Mesprit',
    zh_name: '艾姆利多',
  },
  {
    dexNr: 482,
    name: 'Azelf',
    zh_name: '亞克諾姆',
  },
  {
    dexNr: 483,
    name: 'Dialga',
    zh_name: '帝牙盧卡',
  },
  {
    dexNr: 484,
    name: 'Palkia',
    zh_name: '帕路奇亞',
  },
  {
    dexNr: 485,
    name: 'Heatran',
    zh_name: '席多藍恩',
  },
  {
    dexNr: 486,
    name: 'Regigigas',
    zh_name: '雷吉奇卡斯',
  },
  {
    dexNr: 487,
    name: 'Giratina',
    zh_name: '騎拉帝納',
  },
  {
    dexNr: 488,
    name: 'Cresselia',
    zh_name: '克雷色利亞',
  },
  {
    dexNr: 489,
    name: 'Phione',
    zh_name: '霏歐納',
  },
  {
    dexNr: 490,
    name: 'Manaphy',
    zh_name: '瑪納霏',
  },
  {
    dexNr: 491,
    name: 'Darkrai',
    zh_name: '達克萊伊',
  },
  {
    dexNr: 492,
    name: 'Shaymin',
    zh_name: '謝米',
  },
  {
    dexNr: 493,
    name: 'Arceus',
    zh_name: '阿爾宙斯',
  },
  {
    dexNr: 494,
    name: 'Victini',
    zh_name: '比克提尼',
  },
  {
    dexNr: 495,
    name: 'Snivy',
    zh_name: '藤藤蛇',
  },
  {
    dexNr: 496,
    name: 'Servine',
    zh_name: '青藤蛇',
  },
  {
    dexNr: 497,
    name: 'Serperior',
    zh_name: '君主蛇',
  },
  {
    dexNr: 498,
    name: 'Tepig',
    zh_name: '暖暖豬',
  },
  {
    dexNr: 499,
    name: 'Pignite',
    zh_name: '炒炒豬',
  },
  {
    dexNr: 500,
    name: 'Emboar',
    zh_name: '炎武王',
  },
  {
    dexNr: 501,
    name: 'Oshawott',
    zh_name: '水水獺',
  },
  {
    dexNr: 502,
    name: 'Dewott',
    zh_name: '雙刃丸',
  },
  {
    dexNr: 503,
    name: 'Samurott',
    zh_name: '大劍鬼',
  },
  {
    dexNr: 504,
    name: 'Patrat',
    zh_name: '探探鼠',
  },
  {
    dexNr: 505,
    name: 'Watchog',
    zh_name: '步哨鼠',
  },
  {
    dexNr: 506,
    name: 'Lillipup',
    zh_name: '小約克',
  },
  {
    dexNr: 507,
    name: 'Herdier',
    zh_name: '哈約克',
  },
  {
    dexNr: 508,
    name: 'Stoutland',
    zh_name: '長毛狗',
  },
  {
    dexNr: 509,
    name: 'Purrloin',
    zh_name: '扒手貓',
  },
  {
    dexNr: 510,
    name: 'Liepard',
    zh_name: '酷豹',
  },
  {
    dexNr: 511,
    name: 'Pansage',
    zh_name: '花椰猴',
  },
  {
    dexNr: 512,
    name: 'Simisage',
    zh_name: '花椰猿',
  },
  {
    dexNr: 513,
    name: 'Pansear',
    zh_name: '爆香猴',
  },
  {
    dexNr: 514,
    name: 'Simisear',
    zh_name: '爆香猿',
  },
  {
    dexNr: 515,
    name: 'Panpour',
    zh_name: '冷水猴',
  },
  {
    dexNr: 516,
    name: 'Simipour',
    zh_name: '冷水猿',
  },
  {
    dexNr: 517,
    name: 'Munna',
    zh_name: '食夢夢',
  },
  {
    dexNr: 518,
    name: 'Musharna',
    zh_name: '夢夢蝕',
  },
  {
    dexNr: 519,
    name: 'Pidove',
    zh_name: '豆豆鴿',
  },
  {
    dexNr: 520,
    name: 'Tranquill',
    zh_name: '咕咕鴿',
  },
  {
    dexNr: 521,
    name: 'Unfezant',
    zh_name: '高傲雉雞',
  },
  {
    dexNr: 522,
    name: 'Blitzle',
    zh_name: '斑斑馬',
  },
  {
    dexNr: 523,
    name: 'Zebstrika',
    zh_name: '雷電斑馬',
  },
  {
    dexNr: 524,
    name: 'Roggenrola',
    zh_name: '石丸子',
  },
  {
    dexNr: 525,
    name: 'Boldore',
    zh_name: '地幔岩',
  },
  {
    dexNr: 526,
    name: 'Gigalith',
    zh_name: '龐岩怪',
  },
  {
    dexNr: 527,
    name: 'Woobat',
    zh_name: '滾滾蝙蝠',
  },
  {
    dexNr: 528,
    name: 'Swoobat',
    zh_name: '心蝙蝠',
  },
  {
    dexNr: 529,
    name: 'Drilbur',
    zh_name: '螺釘地鼠',
  },
  {
    dexNr: 530,
    name: 'Excadrill',
    zh_name: '龍頭地鼠',
  },
  {
    dexNr: 531,
    name: 'Audino',
    zh_name: '差不多娃娃',
  },
  {
    dexNr: 532,
    name: 'Timburr',
    zh_name: '搬運小匠',
  },
  {
    dexNr: 533,
    name: 'Gurdurr',
    zh_name: '鐵骨土人',
  },
  {
    dexNr: 534,
    name: 'Conkeldurr',
    zh_name: '修建老匠',
  },
  {
    dexNr: 535,
    name: 'Tympole',
    zh_name: '圓蝌蚪',
  },
  {
    dexNr: 536,
    name: 'Palpitoad',
    zh_name: '藍蟾蜍',
  },
  {
    dexNr: 537,
    name: 'Seismitoad',
    zh_name: '蟾蜍王',
  },
  {
    dexNr: 538,
    name: 'Throh',
    zh_name: '投摔鬼',
  },
  {
    dexNr: 539,
    name: 'Sawk',
    zh_name: '打擊鬼',
  },
  {
    dexNr: 540,
    name: 'Sewaddle',
    zh_name: '蟲寶包',
  },
  {
    dexNr: 541,
    name: 'Swadloon',
    zh_name: '寶包繭',
  },
  {
    dexNr: 542,
    name: 'Leavanny',
    zh_name: '保母蟲',
  },
  {
    dexNr: 543,
    name: 'Venipede',
    zh_name: '百足蜈蚣',
  },
  {
    dexNr: 544,
    name: 'Whirlipede',
    zh_name: '車輪毬',
  },
  {
    dexNr: 545,
    name: 'Scolipede',
    zh_name: '蜈蚣王',
  },
  {
    dexNr: 546,
    name: 'Cottonee',
    zh_name: '木棉球',
  },
  {
    dexNr: 547,
    name: 'Whimsicott',
    zh_name: '風妖精',
  },
  {
    dexNr: 548,
    name: 'Petilil',
    zh_name: '百合根娃娃',
  },
  {
    dexNr: 549,
    name: 'Lilligant',
    zh_name: '裙兒小姐',
  },
  {
    dexNr: 550,
    name: 'Basculin',
    zh_name: '野蠻鱸魚',
  },
  {
    dexNr: 551,
    name: 'Sandile',
    zh_name: '黑眼鱷',
  },
  {
    dexNr: 552,
    name: 'Krokorok',
    zh_name: '混混鱷',
  },
  {
    dexNr: 553,
    name: 'Krookodile',
    zh_name: '流氓鱷',
  },
  {
    dexNr: 554,
    name: 'Darumaka',
    zh_name: '火紅不倒翁',
  },
  {
    dexNr: 555,
    name: 'Darmanitan',
    zh_name: '達摩狒狒',
  },
  {
    dexNr: 556,
    name: 'Maractus',
    zh_name: '沙鈴仙人掌',
  },
  {
    dexNr: 557,
    name: 'Dwebble',
    zh_name: '石居蟹',
  },
  {
    dexNr: 558,
    name: 'Crustle',
    zh_name: '岩殿居蟹',
  },
  {
    dexNr: 559,
    name: 'Scraggy',
    zh_name: '滑滑小子',
  },
  {
    dexNr: 560,
    name: 'Scrafty',
    zh_name: '頭巾混混',
  },
  {
    dexNr: 561,
    name: 'Sigilyph',
    zh_name: '象徵鳥',
  },
  {
    dexNr: 562,
    name: 'Yamask',
    zh_name: '哭哭面具',
  },
  {
    dexNr: 563,
    name: 'Cofagrigus',
    zh_name: '死神棺',
  },
  {
    dexNr: 564,
    name: 'Tirtouga',
    zh_name: '原蓋海龜',
  },
  {
    dexNr: 565,
    name: 'Carracosta',
    zh_name: '肋骨海龜',
  },
  {
    dexNr: 566,
    name: 'Archen',
    zh_name: '始祖小鳥',
  },
  {
    dexNr: 567,
    name: 'Archeops',
    zh_name: '始祖大鳥',
  },
  {
    dexNr: 568,
    name: 'Trubbish',
    zh_name: '破破袋',
  },
  {
    dexNr: 569,
    name: 'Garbodor',
    zh_name: '灰塵山',
  },
  {
    dexNr: 570,
    name: 'Zorua',
    zh_name: '索羅亞',
  },
  {
    dexNr: 571,
    name: 'Zoroark',
    zh_name: '索羅亞克',
  },
  {
    dexNr: 572,
    name: 'Minccino',
    zh_name: '泡沫栗鼠',
  },
  {
    dexNr: 573,
    name: 'Cinccino',
    zh_name: '奇諾栗鼠',
  },
  {
    dexNr: 574,
    name: 'Gothita',
    zh_name: '哥德寶寶',
  },
  {
    dexNr: 575,
    name: 'Gothorita',
    zh_name: '哥德小童',
  },
  {
    dexNr: 576,
    name: 'Gothitelle',
    zh_name: '哥德小姐',
  },
  {
    dexNr: 577,
    name: 'Solosis',
    zh_name: '單卵細胞球',
  },
  {
    dexNr: 578,
    name: 'Duosion',
    zh_name: '雙卵細胞球',
  },
  {
    dexNr: 579,
    name: 'Reuniclus',
    zh_name: '人造細胞卵',
  },
  {
    dexNr: 580,
    name: 'Ducklett',
    zh_name: '鴨寶寶',
  },
  {
    dexNr: 581,
    name: 'Swanna',
    zh_name: '舞天鵝',
  },
  {
    dexNr: 582,
    name: 'Vanillite',
    zh_name: '迷你冰',
  },
  {
    dexNr: 583,
    name: 'Vanillish',
    zh_name: '多多冰',
  },
  {
    dexNr: 584,
    name: 'Vanilluxe',
    zh_name: '雙倍多多冰',
  },
  {
    dexNr: 585,
    name: 'Deerling',
    zh_name: '四季鹿',
  },
  {
    dexNr: 586,
    name: 'Sawsbuck',
    zh_name: '萌芽鹿',
  },
  {
    dexNr: 587,
    name: 'Emolga',
    zh_name: '電飛鼠',
  },
  {
    dexNr: 588,
    name: 'Karrablast',
    zh_name: '蓋蓋蟲',
  },
  {
    dexNr: 589,
    name: 'Escavalier',
    zh_name: '騎士蝸牛',
  },
  {
    dexNr: 590,
    name: 'Foongus',
    zh_name: '哎呀球菇',
  },
  {
    dexNr: 591,
    name: 'Amoonguss',
    zh_name: '敗露球菇',
  },
  {
    dexNr: 592,
    name: 'Frillish',
    zh_name: '輕飄飄',
  },
  {
    dexNr: 593,
    name: 'Jellicent',
    zh_name: '胖嘟嘟',
  },
  {
    dexNr: 594,
    name: 'Alomomola',
    zh_name: '保母曼波',
  },
  {
    dexNr: 595,
    name: 'Joltik',
    zh_name: '電電蟲',
  },
  {
    dexNr: 596,
    name: 'Galvantula',
    zh_name: '電蜘蛛',
  },
  {
    dexNr: 597,
    name: 'Ferroseed',
    zh_name: '種子鐵球',
  },
  {
    dexNr: 598,
    name: 'Ferrothorn',
    zh_name: '堅果啞鈴',
  },
  {
    dexNr: 599,
    name: 'Klink',
    zh_name: '齒輪兒',
  },
  {
    dexNr: 600,
    name: 'Klang',
    zh_name: '齒輪組',
  },
  {
    dexNr: 601,
    name: 'Klinklang',
    zh_name: '齒輪怪',
  },
  {
    dexNr: 602,
    name: 'Tynamo',
    zh_name: '麻麻小魚',
  },
  {
    dexNr: 603,
    name: 'Eelektrik',
    zh_name: '麻麻鰻',
  },
  {
    dexNr: 604,
    name: 'Eelektross',
    zh_name: '麻麻鰻魚王',
  },
  {
    dexNr: 605,
    name: 'Elgyem',
    zh_name: '小灰怪',
  },
  {
    dexNr: 606,
    name: 'Beheeyem',
    zh_name: '大宇怪',
  },
  {
    dexNr: 607,
    name: 'Litwick',
    zh_name: '燭光靈',
  },
  {
    dexNr: 608,
    name: 'Lampent',
    zh_name: '燈火幽靈',
  },
  {
    dexNr: 609,
    name: 'Chandelure',
    zh_name: '水晶燈火靈',
  },
  {
    dexNr: 610,
    name: 'Axew',
    zh_name: '牙牙',
  },
  {
    dexNr: 611,
    name: 'Fraxure',
    zh_name: '斧牙龍',
  },
  {
    dexNr: 612,
    name: 'Haxorus',
    zh_name: '雙斧戰龍',
  },
  {
    dexNr: 613,
    name: 'Cubchoo',
    zh_name: '噴嚏熊',
  },
  {
    dexNr: 614,
    name: 'Beartic',
    zh_name: '凍原熊',
  },
  {
    dexNr: 615,
    name: 'Cryogonal',
    zh_name: '幾何雪花',
  },
  {
    dexNr: 616,
    name: 'Shelmet',
    zh_name: '小嘴蝸',
  },
  {
    dexNr: 617,
    name: 'Accelgor',
    zh_name: '敏捷蟲',
  },
  {
    dexNr: 618,
    name: 'Stunfisk',
    zh_name: '泥巴魚',
  },
  {
    dexNr: 619,
    name: 'Mienfoo',
    zh_name: '功夫鼬',
  },
  {
    dexNr: 620,
    name: 'Mienshao',
    zh_name: '師父鼬',
  },
  {
    dexNr: 621,
    name: 'Druddigon',
    zh_name: '赤面龍',
  },
  {
    dexNr: 622,
    name: 'Golett',
    zh_name: '泥偶小人',
  },
  {
    dexNr: 623,
    name: 'Golurk',
    zh_name: '泥偶巨人',
  },
  {
    dexNr: 624,
    name: 'Pawniard',
    zh_name: '駒刀小兵',
  },
  {
    dexNr: 625,
    name: 'Bisharp',
    zh_name: '劈斬司令',
  },
  {
    dexNr: 626,
    name: 'Bouffalant',
    zh_name: '爆炸頭水牛',
  },
  {
    dexNr: 627,
    name: 'Rufflet',
    zh_name: '毛頭小鷹',
  },
  {
    dexNr: 628,
    name: 'Braviary',
    zh_name: '勇士雄鷹',
  },
  {
    dexNr: 629,
    name: 'Vullaby',
    zh_name: '禿鷹丫頭',
  },
  {
    dexNr: 630,
    name: 'Mandibuzz',
    zh_name: '禿鷹娜',
  },
  {
    dexNr: 631,
    name: 'Heatmor',
    zh_name: '熔蟻獸',
  },
  {
    dexNr: 632,
    name: 'Durant',
    zh_name: '鐵蟻',
  },
  {
    dexNr: 633,
    name: 'Deino',
    zh_name: '單首龍',
  },
  {
    dexNr: 634,
    name: 'Zweilous',
    zh_name: '雙首暴龍',
  },
  {
    dexNr: 635,
    name: 'Hydreigon',
    zh_name: '三首惡龍',
  },
  {
    dexNr: 636,
    name: 'Larvesta',
    zh_name: '燃燒蟲',
  },
  {
    dexNr: 637,
    name: 'Volcarona',
    zh_name: '火神蛾',
  },
  {
    dexNr: 638,
    name: 'Cobalion',
    zh_name: '勾帕路翁',
  },
  {
    dexNr: 639,
    name: 'Terrakion',
    zh_name: '代拉基翁',
  },
  {
    dexNr: 640,
    name: 'Virizion',
    zh_name: '畢力吉翁',
  },
  {
    dexNr: 641,
    name: 'Tornadus',
    zh_name: '龍捲雲',
  },
  {
    dexNr: 642,
    name: 'Thundurus',
    zh_name: '雷電雲',
  },
  {
    dexNr: 643,
    name: 'Reshiram',
    zh_name: '萊希拉姆',
  },
  {
    dexNr: 644,
    name: 'Zekrom',
    zh_name: '捷克羅姆',
  },
  {
    dexNr: 645,
    name: 'Landorus',
    zh_name: '土地雲',
  },
  {
    dexNr: 646,
    name: 'Kyurem',
    zh_name: '酋雷姆',
  },
  {
    dexNr: 647,
    name: 'Keldeo',
    zh_name: '凱路迪歐',
  },
  {
    dexNr: 648,
    name: 'Meloetta',
    zh_name: '美洛耶塔',
  },
  {
    dexNr: 649,
    name: 'Genesect',
    zh_name: '蓋諾賽克特',
  },
  {
    dexNr: 650,
    name: 'Chespin',
    zh_name: '哈力栗',
  },
  {
    dexNr: 651,
    name: 'Quilladin',
    zh_name: '胖胖哈力',
  },
  {
    dexNr: 652,
    name: 'Chesnaught',
    zh_name: '布里卡隆',
  },
  {
    dexNr: 653,
    name: 'Fennekin',
    zh_name: '火狐狸',
  },
  {
    dexNr: 654,
    name: 'Braixen',
    zh_name: '長尾火狐',
  },
  {
    dexNr: 655,
    name: 'Delphox',
    zh_name: '妖火紅狐',
  },
  {
    dexNr: 656,
    name: 'Froakie',
    zh_name: '呱呱泡蛙',
  },
  {
    dexNr: 657,
    name: 'Frogadier',
    zh_name: '呱頭蛙',
  },
  {
    dexNr: 658,
    name: 'Greninja',
    zh_name: '甲賀忍蛙',
  },
  {
    dexNr: 659,
    name: 'Bunnelby',
    zh_name: '掘掘兔',
  },
  {
    dexNr: 660,
    name: 'Diggersby',
    zh_name: '掘地兔',
  },
  {
    dexNr: 661,
    name: 'Fletchling',
    zh_name: '小箭雀',
  },
  {
    dexNr: 662,
    name: 'Fletchinder',
    zh_name: '火箭雀',
  },
  {
    dexNr: 663,
    name: 'Talonflame',
    zh_name: '烈箭鷹',
  },
  {
    dexNr: 664,
    name: 'Scatterbug',
    zh_name: '粉蝶蟲',
  },
  {
    dexNr: 665,
    name: 'Spewpa',
    zh_name: '粉蝶蛹',
  },
  {
    dexNr: 666,
    name: 'Vivillon',
    zh_name: '彩粉蝶',
  },
  {
    dexNr: 667,
    name: 'Litleo',
    zh_name: '小獅獅',
  },
  {
    dexNr: 668,
    name: 'Pyroar',
    zh_name: '火炎獅',
  },
  {
    dexNr: 669,
    name: 'Flabébé',
    zh_name: '花蓓蓓',
  },
  {
    dexNr: 670,
    name: 'Floette',
    zh_name: '花葉蒂',
  },
  {
    dexNr: 671,
    name: 'Florges',
    zh_name: '花潔夫人',
  },
  {
    dexNr: 672,
    name: 'Skiddo',
    zh_name: '坐騎小羊',
  },
  {
    dexNr: 673,
    name: 'Gogoat',
    zh_name: '坐騎山羊',
  },
  {
    dexNr: 674,
    name: 'Pancham',
    zh_name: '頑皮熊貓',
  },
  {
    dexNr: 675,
    name: 'Pangoro',
    zh_name: '流氓熊貓',
  },
  {
    dexNr: 676,
    name: 'Furfrou',
    zh_name: '多麗米亞',
  },
  {
    dexNr: 677,
    name: 'Espurr',
    zh_name: '妙喵',
  },
  {
    dexNr: 678,
    name: 'Meowstic',
    zh_name: '超能妙喵',
  },
  {
    dexNr: 679,
    name: 'Honedge',
    zh_name: '獨劍鞘',
  },
  {
    dexNr: 680,
    name: 'Doublade',
    zh_name: '雙劍鞘',
  },
  {
    dexNr: 681,
    name: 'Aegislash',
    zh_name: '堅盾劍怪',
  },
  {
    dexNr: 682,
    name: 'Spritzee',
    zh_name: '粉香香',
  },
  {
    dexNr: 683,
    name: 'Aromatisse',
    zh_name: '芳香精',
  },
  {
    dexNr: 684,
    name: 'Swirlix',
    zh_name: '綿綿泡芙',
  },
  {
    dexNr: 685,
    name: 'Slurpuff',
    zh_name: '胖甜妮',
  },
  {
    dexNr: 686,
    name: 'Inkay',
    zh_name: '好啦魷',
  },
  {
    dexNr: 687,
    name: 'Malamar',
    zh_name: '烏賊王',
  },
  {
    dexNr: 688,
    name: 'Binacle',
    zh_name: '龜腳腳',
  },
  {
    dexNr: 689,
    name: 'Barbaracle',
    zh_name: '龜足巨鎧',
  },
  {
    dexNr: 690,
    name: 'Skrelp',
    zh_name: '垃垃藻',
  },
  {
    dexNr: 691,
    name: 'Dragalge',
    zh_name: '毒藻龍',
  },
  {
    dexNr: 692,
    name: 'Clauncher',
    zh_name: '鐵臂槍蝦',
  },
  {
    dexNr: 693,
    name: 'Clawitzer',
    zh_name: '鋼炮臂蝦',
  },
  {
    dexNr: 694,
    name: 'Helioptile',
    zh_name: '傘電蜥',
  },
  {
    dexNr: 695,
    name: 'Heliolisk',
    zh_name: '光電傘蜥',
  },
  {
    dexNr: 696,
    name: 'Tyrunt',
    zh_name: '寶寶暴龍',
  },
  {
    dexNr: 697,
    name: 'Tyrantrum',
    zh_name: '怪顎龍',
  },
  {
    dexNr: 698,
    name: 'Amaura',
    zh_name: '冰雪龍',
  },
  {
    dexNr: 699,
    name: 'Aurorus',
    zh_name: '冰雪巨龍',
  },
  {
    dexNr: 700,
    name: 'Sylveon',
    zh_name: '仙子伊布',
  },
  {
    dexNr: 701,
    name: 'Hawlucha',
    zh_name: '摔角鷹人',
  },
  {
    dexNr: 702,
    name: 'Dedenne',
    zh_name: '咚咚鼠',
  },
  {
    dexNr: 703,
    name: 'Carbink',
    zh_name: '小碎鑽',
  },
  {
    dexNr: 704,
    name: 'Goomy',
    zh_name: '黏黏寶',
  },
  {
    dexNr: 705,
    name: 'Sliggoo',
    zh_name: '黏美兒',
  },
  {
    dexNr: 706,
    name: 'Goodra',
    zh_name: '黏美龍',
  },
  {
    dexNr: 707,
    name: 'Klefki',
    zh_name: '鑰圈兒',
  },
  {
    dexNr: 708,
    name: 'Phantump',
    zh_name: '小木靈',
  },
  {
    dexNr: 709,
    name: 'Trevenant',
    zh_name: '朽木妖',
  },
  {
    dexNr: 710,
    name: 'Pumpkaboo',
    zh_name: '南瓜精',
  },
  {
    dexNr: 711,
    name: 'Gourgeist',
    zh_name: '南瓜怪人',
  },
  {
    dexNr: 712,
    name: 'Bergmite',
    zh_name: '冰寶',
  },
  {
    dexNr: 713,
    name: 'Avalugg',
    zh_name: '冰岩怪',
  },
  {
    dexNr: 714,
    name: 'Noibat',
    zh_name: '嗡蝠',
  },
  {
    dexNr: 715,
    name: 'Noivern',
    zh_name: '音波龍',
  },
  {
    dexNr: 716,
    name: 'Xerneas',
    zh_name: '哲爾尼亞斯',
  },
  {
    dexNr: 717,
    name: 'Yveltal',
    zh_name: '伊裴爾塔爾',
  },
  {
    dexNr: 718,
    name: 'Zygarde',
    zh_name: '基格爾德',
  },
  {
    dexNr: 719,
    name: 'Diancie',
    zh_name: '蒂安希',
  },
  {
    dexNr: 720,
    name: 'Hoopa',
    zh_name: '胡帕',
  },
  {
    dexNr: 721,
    name: 'Volcanion',
    zh_name: '波爾凱尼恩',
  },
  {
    dexNr: 722,
    name: 'Rowlet',
    zh_name: '木木梟',
  },
  {
    dexNr: 723,
    name: 'Dartrix',
    zh_name: '投羽梟',
  },
  {
    dexNr: 724,
    name: 'Decidueye',
    zh_name: '狙射樹梟',
  },
  {
    dexNr: 725,
    name: 'Litten',
    zh_name: '火斑喵',
  },
  {
    dexNr: 726,
    name: 'Torracat',
    zh_name: '炎熱喵',
  },
  {
    dexNr: 727,
    name: 'Incineroar',
    zh_name: '熾焰咆哮虎',
  },
  {
    dexNr: 728,
    name: 'Popplio',
    zh_name: '球球海獅',
  },
  {
    dexNr: 729,
    name: 'Brionne',
    zh_name: '花漾海獅',
  },
  {
    dexNr: 730,
    name: 'Primarina',
    zh_name: '西獅海壬',
  },
  {
    dexNr: 731,
    name: 'Pikipek',
    zh_name: '小篤兒',
  },
  {
    dexNr: 732,
    name: 'Trumbeak',
    zh_name: '喇叭啄鳥',
  },
  {
    dexNr: 733,
    name: 'Toucannon',
    zh_name: '銃嘴大鳥',
  },
  {
    dexNr: 734,
    name: 'Yungoos',
    zh_name: '貓鼬少',
  },
  {
    dexNr: 735,
    name: 'Gumshoos',
    zh_name: '貓鼬探長',
  },
  {
    dexNr: 736,
    name: 'Grubbin',
    zh_name: '強顎雞母蟲',
  },
  {
    dexNr: 737,
    name: 'Charjabug',
    zh_name: '蟲電寶',
  },
  {
    dexNr: 738,
    name: 'Vikavolt',
    zh_name: '鍬農炮蟲',
  },
  {
    dexNr: 739,
    name: 'Crabrawler',
    zh_name: '好勝蟹',
  },
  {
    dexNr: 740,
    name: 'Crabominable',
    zh_name: '好勝毛蟹',
  },
  {
    dexNr: 741,
    name: 'Oricorio',
    zh_name: '花舞鳥',
  },
  {
    dexNr: 742,
    name: 'Cutiefly',
    zh_name: '萌虻',
  },
  {
    dexNr: 743,
    name: 'Ribombee',
    zh_name: '蝶結萌虻',
  },
  {
    dexNr: 744,
    name: 'Rockruff',
    zh_name: '岩狗狗',
  },
  {
    dexNr: 745,
    name: 'Lycanroc',
    zh_name: '鬃岩狼人',
  },
  {
    dexNr: 746,
    name: 'Wishiwashi',
    zh_name: '弱丁魚',
  },
  {
    dexNr: 747,
    name: 'Mareanie',
    zh_name: '好壞星',
  },
  {
    dexNr: 748,
    name: 'Toxapex',
    zh_name: '超壞星',
  },
  {
    dexNr: 749,
    name: 'Mudbray',
    zh_name: '泥驢仔',
  },
  {
    dexNr: 750,
    name: 'Mudsdale',
    zh_name: '重泥挽馬',
  },
  {
    dexNr: 751,
    name: 'Dewpider',
    zh_name: '滴蛛',
  },
  {
    dexNr: 752,
    name: 'Araquanid',
    zh_name: '滴蛛霸',
  },
  {
    dexNr: 753,
    name: 'Fomantis',
    zh_name: '偽螳草',
  },
  {
    dexNr: 754,
    name: 'Lurantis',
    zh_name: '蘭螳花',
  },
  {
    dexNr: 755,
    name: 'Morelull',
    zh_name: '睡睡菇',
  },
  {
    dexNr: 756,
    name: 'Shiinotic',
    zh_name: '燈罩夜菇',
  },
  {
    dexNr: 757,
    name: 'Salandit',
    zh_name: '夜盜火蜥',
  },
  {
    dexNr: 758,
    name: 'Salazzle',
    zh_name: '焰后蜥',
  },
  {
    dexNr: 759,
    name: 'Stufful',
    zh_name: '童偶熊',
  },
  {
    dexNr: 760,
    name: 'Bewear',
    zh_name: '穿著熊',
  },
  {
    dexNr: 761,
    name: 'Bounsweet',
    zh_name: '甜竹竹',
  },
  {
    dexNr: 762,
    name: 'Steenee',
    zh_name: '甜舞妮',
  },
  {
    dexNr: 763,
    name: 'Tsareena',
    zh_name: '甜冷美后',
  },
  {
    dexNr: 764,
    name: 'Comfey',
    zh_name: '花療環環',
  },
  {
    dexNr: 765,
    name: 'Oranguru',
    zh_name: '智揮猩',
  },
  {
    dexNr: 766,
    name: 'Passimian',
    zh_name: '投擲猴',
  },
  {
    dexNr: 767,
    name: 'Wimpod',
    zh_name: '膽小蟲',
  },
  {
    dexNr: 768,
    name: 'Golisopod',
    zh_name: '具甲武者',
  },
  {
    dexNr: 769,
    name: 'Sandygast',
    zh_name: '沙丘娃',
  },
  {
    dexNr: 770,
    name: 'Palossand',
    zh_name: '噬沙堡爺',
  },
  {
    dexNr: 771,
    name: 'Pyukumuku',
    zh_name: '拳海參',
  },
  {
    dexNr: 772,
    name: 'Type: Null',
    zh_name: '屬性：空',
  },
  {
    dexNr: 773,
    name: 'Silvally',
    zh_name: '銀伴戰獸',
  },
  {
    dexNr: 774,
    name: 'Minior',
    zh_name: '小隕星',
  },
  {
    dexNr: 775,
    name: 'Komala',
    zh_name: '樹枕尾熊',
  },
  {
    dexNr: 776,
    name: 'Turtonator',
    zh_name: '爆焰龜獸',
  },
  {
    dexNr: 777,
    name: 'Togedemaru',
    zh_name: '托戈德瑪爾',
  },
  {
    dexNr: 778,
    name: 'Mimikyu',
    zh_name: '謎擬Ｑ',
  },
  {
    dexNr: 779,
    name: 'Bruxish',
    zh_name: '磨牙彩皮魚',
  },
  {
    dexNr: 780,
    name: 'Drampa',
    zh_name: '老翁龍',
  },
  {
    dexNr: 781,
    name: 'Dhelmise',
    zh_name: '破破舵輪',
  },
  {
    dexNr: 782,
    name: 'Jangmo-o',
    zh_name: '心鱗寶',
  },
  {
    dexNr: 783,
    name: 'Hakamo-o',
    zh_name: '鱗甲龍',
  },
  {
    dexNr: 784,
    name: 'Kommo-o',
    zh_name: '杖尾鱗甲龍',
  },
  {
    dexNr: 785,
    name: 'Tapu Koko',
    zh_name: '卡璞・鳴鳴',
  },
  {
    dexNr: 786,
    name: 'Tapu Lele',
    zh_name: '卡璞・蝶蝶',
  },
  {
    dexNr: 787,
    name: 'Tapu Bulu',
    zh_name: '卡璞・哞哞',
  },
  {
    dexNr: 788,
    name: 'Tapu Fini',
    zh_name: '卡璞・鰭鰭',
  },
  {
    dexNr: 789,
    name: 'Cosmog',
    zh_name: '科斯莫古',
  },
  {
    dexNr: 790,
    name: 'Cosmoem',
    zh_name: '科斯莫姆',
  },
  {
    dexNr: 791,
    name: 'Solgaleo',
    zh_name: '索爾迦雷歐',
  },
  {
    dexNr: 792,
    name: 'Lunala',
    zh_name: '露奈雅拉',
  },
  {
    dexNr: 793,
    name: 'Nihilego',
    zh_name: '虛吾伊德',
  },
  {
    dexNr: 794,
    name: 'Buzzwole',
    zh_name: '爆肌蚊',
  },
  {
    dexNr: 795,
    name: 'Pheromosa',
    zh_name: '費洛美螂',
  },
  {
    dexNr: 796,
    name: 'Xurkitree',
    zh_name: '電束木',
  },
  {
    dexNr: 797,
    name: 'Celesteela',
    zh_name: '鐵火輝夜',
  },
  {
    dexNr: 798,
    name: 'Kartana',
    zh_name: '紙御劍',
  },
  {
    dexNr: 799,
    name: 'Guzzlord',
    zh_name: '惡食大王',
  },
  {
    dexNr: 800,
    name: 'Necrozma',
    zh_name: '奈克洛茲瑪',
  },
  {
    dexNr: 801,
    name: 'Magearna',
    zh_name: '瑪機雅娜',
  },
  {
    dexNr: 802,
    name: 'Marshadow',
    zh_name: '瑪夏多',
  },
  {
    dexNr: 803,
    name: 'Poipole',
    zh_name: '毒貝比',
  },
  {
    dexNr: 804,
    name: 'Naganadel',
    zh_name: '四顎針龍',
  },
  {
    dexNr: 805,
    name: 'Stakataka',
    zh_name: '壘磊石',
  },
  {
    dexNr: 806,
    name: 'Blacephalon',
    zh_name: '砰頭小丑',
  },
  {
    dexNr: 807,
    name: 'Zeraora',
    zh_name: '捷拉奧拉',
  },
  {
    dexNr: 808,
    name: 'Meltan',
    zh_name: '美錄坦',
  },
  {
    dexNr: 809,
    name: 'Melmetal',
    zh_name: '美錄梅塔',
  },
  {
    dexNr: 810,
    name: 'Grookey',
    zh_name: '敲音猴',
  },
  {
    dexNr: 811,
    name: 'Thwackey',
    zh_name: '啪咚猴',
  },
  {
    dexNr: 812,
    name: 'Rillaboom',
    zh_name: '轟擂金剛猩',
  },
  {
    dexNr: 813,
    name: 'Scorbunny',
    zh_name: '炎兔兒',
  },
  {
    dexNr: 814,
    name: 'Raboot',
    zh_name: '騰蹴小將',
  },
  {
    dexNr: 815,
    name: 'Cinderace',
    zh_name: '閃焰王牌',
  },
  {
    dexNr: 816,
    name: 'Sobble',
    zh_name: '淚眼蜥',
  },
  {
    dexNr: 817,
    name: 'Drizzile',
    zh_name: '變澀蜥',
  },
  {
    dexNr: 818,
    name: 'Inteleon',
    zh_name: '千面避役',
  },
  {
    dexNr: 819,
    name: 'Skwovet',
    zh_name: '貪心栗鼠',
  },
  {
    dexNr: 820,
    name: 'Greedent',
    zh_name: '藏飽栗鼠',
  },
  {
    dexNr: 821,
    name: 'Rookidee',
    zh_name: '稚山雀',
  },
  {
    dexNr: 822,
    name: 'Corvisquire',
    zh_name: '藍鴉',
  },
  {
    dexNr: 823,
    name: 'Corviknight',
    zh_name: '鋼鎧鴉',
  },
  {
    dexNr: 824,
    name: 'Blipbug',
    zh_name: '索偵蟲',
  },
  {
    dexNr: 825,
    name: 'Dottler',
    zh_name: '天罩蟲',
  },
  {
    dexNr: 826,
    name: 'Orbeetle',
    zh_name: '以歐路普',
  },
  {
    dexNr: 827,
    name: 'Nickit',
    zh_name: '偷兒狐',
  },
  {
    dexNr: 828,
    name: 'Thievul',
    zh_name: '狐大盜',
  },
  {
    dexNr: 829,
    name: 'Gossifleur',
    zh_name: '幼棉棉',
  },
  {
    dexNr: 830,
    name: 'Eldegoss',
    zh_name: '白蓬蓬',
  },
  {
    dexNr: 831,
    name: 'Wooloo',
    zh_name: '毛辮羊',
  },
  {
    dexNr: 832,
    name: 'Dubwool',
    zh_name: '毛毛角羊',
  },
  {
    dexNr: 833,
    name: 'Chewtle',
    zh_name: '咬咬龜',
  },
  {
    dexNr: 834,
    name: 'Drednaw',
    zh_name: '暴噬龜',
  },
  {
    dexNr: 835,
    name: 'Yamper',
    zh_name: '來電汪',
  },
  {
    dexNr: 836,
    name: 'Boltund',
    zh_name: '逐電犬',
  },
  {
    dexNr: 837,
    name: 'Rolycoly',
    zh_name: '小炭仔',
  },
  {
    dexNr: 838,
    name: 'Carkol',
    zh_name: '大炭車',
  },
  {
    dexNr: 839,
    name: 'Coalossal',
    zh_name: '巨炭山',
  },
  {
    dexNr: 840,
    name: 'Applin',
    zh_name: '啃果蟲',
  },
  {
    dexNr: 841,
    name: 'Flapple',
    zh_name: '蘋裹龍',
  },
  {
    dexNr: 842,
    name: 'Appletun',
    zh_name: '豐蜜龍',
  },
  {
    dexNr: 843,
    name: 'Silicobra',
    zh_name: '沙包蛇',
  },
  {
    dexNr: 844,
    name: 'Sandaconda',
    zh_name: '沙螺蟒',
  },
  {
    dexNr: 845,
    name: 'Cramorant',
    zh_name: '古月鳥',
  },
  {
    dexNr: 846,
    name: 'Arrokuda',
    zh_name: '刺梭魚',
  },
  {
    dexNr: 847,
    name: 'Barraskewda',
    zh_name: '戽斗尖梭',
  },
  {
    dexNr: 848,
    name: 'Toxel',
    zh_name: '毒電嬰',
  },
  {
    dexNr: 849,
    name: 'Toxtricity',
    zh_name: '顫弦蠑螈',
  },
  {
    dexNr: 850,
    name: 'Sizzlipede',
    zh_name: '燒火蚣',
  },
  {
    dexNr: 851,
    name: 'Centiskorch',
    zh_name: '焚焰蚣',
  },
  {
    dexNr: 852,
    name: 'Clobbopus',
    zh_name: '拳拳蛸',
  },
  {
    dexNr: 853,
    name: 'Grapploct',
    zh_name: '八爪武師',
  },
  {
    dexNr: 854,
    name: 'Sinistea',
    zh_name: '來悲茶',
  },
  {
    dexNr: 855,
    name: 'Polteageist',
    zh_name: '怖思壺',
  },
  {
    dexNr: 856,
    name: 'Hatenna',
    zh_name: '迷布莉姆',
  },
  {
    dexNr: 857,
    name: 'Hattrem',
    zh_name: '提布莉姆',
  },
  {
    dexNr: 858,
    name: 'Hatterene',
    zh_name: '布莉姆溫',
  },
  {
    dexNr: 859,
    name: 'Impidimp',
    zh_name: '搗蛋小妖',
  },
  {
    dexNr: 860,
    name: 'Morgrem',
    zh_name: '詐唬魔',
  },
  {
    dexNr: 861,
    name: 'Grimmsnarl',
    zh_name: '長毛巨魔',
  },
  {
    dexNr: 862,
    name: 'Obstagoon',
    zh_name: '堵攔熊',
  },
  {
    dexNr: 863,
    name: 'Perrserker',
    zh_name: '喵頭目',
  },
  {
    dexNr: 864,
    name: 'Cursola',
    zh_name: '魔靈珊瑚',
  },
  {
    dexNr: 865,
    name: 'Sirfetch』d',
    zh_name: '蔥遊兵',
  },
  {
    dexNr: 866,
    name: 'Mr. Rime',
    zh_name: '踏冰人偶',
  },
  {
    dexNr: 867,
    name: 'Runerigus',
    zh_name: '死神板',
  },
  {
    dexNr: 868,
    name: 'Milcery',
    zh_name: '小仙奶',
  },
  {
    dexNr: 869,
    name: 'Alcremie',
    zh_name: '霜奶仙',
  },
  {
    dexNr: 870,
    name: 'Falinks',
    zh_name: '列陣兵',
  },
  {
    dexNr: 871,
    name: 'Pincurchin',
    zh_name: '啪嚓海膽',
  },
  {
    dexNr: 872,
    name: 'Snom',
    zh_name: '雪吞蟲',
  },
  {
    dexNr: 873,
    name: 'Frosmoth',
    zh_name: '雪絨蛾',
  },
  {
    dexNr: 874,
    name: 'Stonjourner',
    zh_name: '巨石丁',
  },
  {
    dexNr: 875,
    name: 'Eiscue',
    zh_name: '冰砌鵝',
  },
  {
    dexNr: 876,
    name: 'Indeedee',
    zh_name: '愛管侍',
  },
  {
    dexNr: 877,
    name: 'Morpeko',
    zh_name: '莫魯貝可',
  },
  {
    dexNr: 878,
    name: 'Cufant',
    zh_name: '銅象',
  },
  {
    dexNr: 879,
    name: 'Copperajah',
    zh_name: '大王銅象',
  },
  {
    dexNr: 880,
    name: 'Dracozolt',
    zh_name: '雷鳥龍',
  },
  {
    dexNr: 881,
    name: 'Arctozolt',
    zh_name: '雷鳥海獸',
  },
  {
    dexNr: 882,
    name: 'Dracovish',
    zh_name: '鰓魚龍',
  },
  {
    dexNr: 883,
    name: 'Arctovish',
    zh_name: '鰓魚海獸',
  },
  {
    dexNr: 884,
    name: 'Duraludon',
    zh_name: '鋁鋼龍',
  },
  {
    dexNr: 885,
    name: 'Dreepy',
    zh_name: '多龍梅西亞',
  },
  {
    dexNr: 886,
    name: 'Drakloak',
    zh_name: '多龍奇',
  },
  {
    dexNr: 887,
    name: 'Dragapult',
    zh_name: '多龍巴魯托',
  },
  {
    dexNr: 888,
    name: 'Zacian',
    zh_name: '蒼響',
  },
  {
    dexNr: 889,
    name: 'Zamazenta',
    zh_name: '藏瑪然特',
  },
  {
    dexNr: 890,
    name: 'Eternatus',
    zh_name: '無極汰那',
  },
  {
    dexNr: 891,
    name: 'Kubfu',
    zh_name: '熊徒弟',
  },
  {
    dexNr: 892,
    name: 'Urshifu',
    zh_name: '武道熊師',
  },
  {
    dexNr: 893,
    name: 'Zarude',
    zh_name: '薩戮德',
  },
  {
    dexNr: 894,
    name: 'Regieleki',
    zh_name: '雷吉艾勒奇',
  },
  {
    dexNr: 895,
    name: 'Regidrago',
    zh_name: '雷吉鐸拉戈',
  },
  {
    dexNr: 896,
    name: 'Glastrier',
    zh_name: '雪暴馬',
  },
  {
    dexNr: 897,
    name: 'Spectrier',
    zh_name: '靈幽馬',
  },
  {
    dexNr: 898,
    name: 'Calyrex',
    zh_name: '蕾冠王',
  },
  {
    dexNr: 899,
    name: 'Wyrdeer',
    zh_name: '詭角鹿',
  },
  {
    dexNr: 900,
    name: 'Kleavor',
    zh_name: '劈斧螳螂',
  },
  {
    dexNr: 901,
    name: 'Ursaluna',
    zh_name: '月月熊',
  },
  {
    dexNr: 902,
    name: 'Basculegion',
    zh_name: '幽尾玄魚',
  },
  {
    dexNr: 903,
    name: 'Sneasler',
    zh_name: '大狃拉',
  },
  {
    dexNr: 904,
    name: 'Overqwil',
    zh_name: '萬針魚',
  },
  {
    dexNr: 905,
    name: 'Enamorus',
    zh_name: '眷戀雲',
  },
  {
    dexNr: 906,
    name: 'Sprigatito',
    zh_name: '新葉喵',
  },
  {
    dexNr: 907,
    name: 'Floragato',
    zh_name: '蒂蕾喵',
  },
  {
    dexNr: 908,
    name: 'Meowscarada',
    zh_name: '魔幻假面喵',
  },
  {
    dexNr: 909,
    name: 'Fuecoco',
    zh_name: '呆火鱷',
  },
  {
    dexNr: 910,
    name: 'Crocalor',
    zh_name: '炙燙鱷',
  },
  {
    dexNr: 911,
    name: 'Skeledirge',
    zh_name: '骨紋巨聲鱷',
  },
  {
    dexNr: 912,
    name: 'Quaxly',
    zh_name: '潤水鴨',
  },
  {
    dexNr: 913,
    name: 'Quaxwell',
    zh_name: '湧躍鴨',
  },
  {
    dexNr: 914,
    name: 'Quaquaval',
    zh_name: '狂歡浪舞鴨',
  },
  {
    dexNr: 915,
    name: 'Lechonk',
    zh_name: '愛吃豚',
  },
  {
    dexNr: 916,
    name: 'Oinkologne',
    zh_name: '飄香豚',
  },
  {
    dexNr: 917,
    name: 'Tarountula',
    zh_name: '團珠蛛',
  },
  {
    dexNr: 918,
    name: 'Spidops',
    zh_name: '操陷蛛',
  },
  {
    dexNr: 919,
    name: 'Nymble',
    zh_name: '豆蟋蟀',
  },
  {
    dexNr: 920,
    name: 'Lokix',
    zh_name: '烈腿蝗',
  },
  {
    dexNr: 921,
    name: 'Pawmi',
    zh_name: '布撥',
  },
  {
    dexNr: 922,
    name: 'Pawmo',
    zh_name: '布土撥',
  },
  {
    dexNr: 923,
    name: 'Pawmot',
    zh_name: '巴布土撥',
  },
  {
    dexNr: 924,
    name: 'Tandemaus',
    zh_name: '一對鼠',
  },
  {
    dexNr: 925,
    name: 'Maushold',
    zh_name: '一家鼠',
  },
  {
    dexNr: 926,
    name: 'Fidough',
    zh_name: '狗仔包',
  },
  {
    dexNr: 927,
    name: 'Dachsbun',
    zh_name: '麻花犬',
  },
  {
    dexNr: 928,
    name: 'Smoliv',
    zh_name: '迷你芙',
  },
  {
    dexNr: 929,
    name: 'Dolliv',
    zh_name: '奧利紐',
  },
  {
    dexNr: 930,
    name: 'Arboliva',
    zh_name: '奧利瓦',
  },
  {
    dexNr: 931,
    name: 'Squawkabilly',
    zh_name: '怒鸚哥',
  },
  {
    dexNr: 932,
    name: 'Nacli',
    zh_name: '鹽石寶',
  },
  {
    dexNr: 933,
    name: 'Naclstack',
    zh_name: '鹽石壘',
  },
  {
    dexNr: 934,
    name: 'Garganacl',
    zh_name: '鹽石巨靈',
  },
  {
    dexNr: 935,
    name: 'Charcadet',
    zh_name: '炭小侍',
  },
  {
    dexNr: 936,
    name: 'Armarouge',
    zh_name: '紅蓮鎧騎',
  },
  {
    dexNr: 937,
    name: 'Ceruledge',
    zh_name: '蒼炎刃鬼',
  },
  {
    dexNr: 938,
    name: 'Tadbulb',
    zh_name: '光蚪仔',
  },
  {
    dexNr: 939,
    name: 'Bellibolt',
    zh_name: '電肚蛙',
  },
  {
    dexNr: 940,
    name: 'Wattrel',
    zh_name: '電海燕',
  },
  {
    dexNr: 941,
    name: 'Kilowattrel',
    zh_name: '大電海燕',
  },
  {
    dexNr: 942,
    name: 'Maschiff',
    zh_name: '偶叫獒',
  },
  {
    dexNr: 943,
    name: 'Mabosstiff',
    zh_name: '獒教父',
  },
  {
    dexNr: 944,
    name: 'Shroodle',
    zh_name: '滋汁鼴',
  },
  {
    dexNr: 945,
    name: 'Grafaiai',
    zh_name: '塗標客',
  },
  {
    dexNr: 946,
    name: 'Bramblin',
    zh_name: '納噬草',
  },
  {
    dexNr: 947,
    name: 'Brambleghast',
    zh_name: '怖納噬草',
  },
  {
    dexNr: 948,
    name: 'Toedscool',
    zh_name: '原野水母',
  },
  {
    dexNr: 949,
    name: 'Toedscruel',
    zh_name: '陸地水母',
  },
  {
    dexNr: 950,
    name: 'Klawf',
    zh_name: '毛崖蟹',
  },
  {
    dexNr: 951,
    name: 'Capsakid',
    zh_name: '熱辣娃',
  },
  {
    dexNr: 952,
    name: 'Scovillain',
    zh_name: '狠辣椒',
  },
  {
    dexNr: 953,
    name: 'Rellor',
    zh_name: '蟲滾泥',
  },
  {
    dexNr: 954,
    name: 'Rabsca',
    zh_name: '蟲甲聖',
  },
  {
    dexNr: 955,
    name: 'Flittle',
    zh_name: '飄飄雛',
  },
  {
    dexNr: 956,
    name: 'Espathra',
    zh_name: '超能豔鴕',
  },
  {
    dexNr: 957,
    name: 'Tinkatink',
    zh_name: '小鍛匠',
  },
  {
    dexNr: 958,
    name: 'Tinkatuff',
    zh_name: '巧鍛匠',
  },
  {
    dexNr: 959,
    name: 'Tinkaton',
    zh_name: '巨鍛匠',
  },
  {
    dexNr: 960,
    name: 'Wiglett',
    zh_name: '海地鼠',
  },
  {
    dexNr: 961,
    name: 'Wugtrio',
    zh_name: '三海地鼠',
  },
  {
    dexNr: 962,
    name: 'Bombirdier',
    zh_name: '下石鳥',
  },
  {
    dexNr: 963,
    name: 'Finizen',
    zh_name: '波普海豚',
  },
  {
    dexNr: 964,
    name: 'Palafin',
    zh_name: '海豚俠',
  },
  {
    dexNr: 965,
    name: 'Varoom',
    zh_name: '噗隆隆',
  },
  {
    dexNr: 966,
    name: 'Revavroom',
    zh_name: '普隆隆姆',
  },
  {
    dexNr: 967,
    name: 'Cyclizar',
    zh_name: '摩托蜥',
  },
  {
    dexNr: 968,
    name: 'Orthworm',
    zh_name: '拖拖蚓',
  },
  {
    dexNr: 969,
    name: 'Glimmet',
    zh_name: '晶光芽',
  },
  {
    dexNr: 970,
    name: 'Glimmora',
    zh_name: '晶光花',
  },
  {
    dexNr: 971,
    name: 'Greavard',
    zh_name: '墓仔狗',
  },
  {
    dexNr: 972,
    name: 'Houndstone',
    zh_name: '墓揚犬',
  },
  {
    dexNr: 973,
    name: 'Flamigo',
    zh_name: '纏紅鶴',
  },
  {
    dexNr: 974,
    name: 'Cetoddle',
    zh_name: '走鯨',
  },
  {
    dexNr: 975,
    name: 'Cetitan',
    zh_name: '浩大鯨',
  },
  {
    dexNr: 976,
    name: 'Veluza',
    zh_name: '輕身鱈',
  },
  {
    dexNr: 977,
    name: 'Dondozo',
    zh_name: '吃吼霸',
  },
  {
    dexNr: 978,
    name: 'Tatsugiri',
    zh_name: '米立龍',
  },
  {
    dexNr: 979,
    name: 'Annihilape',
    zh_name: '棄世猴',
  },
  {
    dexNr: 980,
    name: 'Clodsire',
    zh_name: '土王',
  },
  {
    dexNr: 981,
    name: 'Farigiraf',
    zh_name: '奇麒麟',
  },
  {
    dexNr: 982,
    name: 'Dudunsparce',
    zh_name: '土龍節節',
  },
  {
    dexNr: 983,
    name: 'Kingambit',
    zh_name: '仆斬將軍',
  },
  {
    dexNr: 984,
    name: 'Great Tusk',
    zh_name: '雄偉牙',
  },
  {
    dexNr: 985,
    name: 'Scream Tail',
    zh_name: '吼叫尾',
  },
  {
    dexNr: 986,
    name: 'Brute Bonnet',
    zh_name: '猛惡菇',
  },
  {
    dexNr: 987,
    name: 'Flutter Mane',
    zh_name: '振翼髮',
  },
  {
    dexNr: 988,
    name: 'Slither Wing',
    zh_name: '爬地翅',
  },
  {
    dexNr: 989,
    name: 'Sandy Shocks',
    zh_name: '沙鐵皮',
  },
  {
    dexNr: 990,
    name: 'Iron Treads',
    zh_name: '鐵轍跡',
  },
  {
    dexNr: 991,
    name: 'Iron Bundle',
    zh_name: '鐵包袱',
  },
  {
    dexNr: 992,
    name: 'Iron Hands',
    zh_name: '鐵臂膀',
  },
  {
    dexNr: 993,
    name: 'Iron Jugulis',
    zh_name: '鐵脖頸',
  },
  {
    dexNr: 994,
    name: 'Iron Moth',
    zh_name: '鐵毒蛾',
  },
  {
    dexNr: 995,
    name: 'Iron Thorns',
    zh_name: '鐵荊棘',
  },
  {
    dexNr: 996,
    name: 'Frigibax',
    zh_name: '涼脊龍',
  },
  {
    dexNr: 997,
    name: 'Arctibax',
    zh_name: '凍脊龍',
  },
  {
    dexNr: 998,
    name: 'Baxcalibur',
    zh_name: '戟脊龍',
  },
  {
    dexNr: 999,
    name: 'Gimmighoul',
    zh_name: '索財靈',
  },
  {
    dexNr: 1000,
    name: 'Gholdengo',
    zh_name: '賽富豪',
  },
  {
    dexNr: 1001,
    name: 'Wo-Chien',
    zh_name: '古簡蝸',
  },
  {
    dexNr: 1002,
    name: 'Chien-Pao',
    zh_name: '古劍豹',
  },
  {
    dexNr: 1003,
    name: 'Ting-Lu',
    zh_name: '古鼎鹿',
  },
  {
    dexNr: 1004,
    name: 'Chi-Yu',
    zh_name: '古玉魚',
  },
  {
    dexNr: 1005,
    name: 'Roaring Moon',
    zh_name: '轟鳴月',
  },
  {
    dexNr: 1006,
    name: 'Iron Valiant',
    zh_name: '鐵武者',
  },
  {
    dexNr: 1007,
    name: 'Koraidon',
    zh_name: '故勒頓',
  },
  {
    dexNr: 1008,
    name: 'Miraidon',
    zh_name: '密勒頓',
  },
];
