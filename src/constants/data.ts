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
