export enum GearType {
  mask = 'Mask',
  backpack = 'Backpack',
  chest = 'Chest',
  gloves = 'Gloves',
  holster = 'Holster',
  kneepads = 'Kneepads',
}

export enum Brand {
  fiveEleven = '5.11 Tactical',
  aces = 'Aces & Eights',
  airaldi = 'Airaldi Holdings',
  alps = 'Alps Summit Armaments',
  badger = 'Badger Tuff',
  belstone = 'Belstone Armory',
  china = 'China Light Industries',
  dh = 'Douglas & Harding',
  empress = 'Empress International',
  ep = 'Eclipse Protocol',
  fenris = 'Fenris',
  fi = 'Future Initiative',
  foundry = 'Foundry Bulwark',
  gila = 'Gila Guard',
  golan = 'Golan Gear Ltd',
  grupo = 'Grupo Sombra',
  hana = 'Hana-U Corporation',
  hb = 'Heartbreaker',
  hw = 'Hard Wired',
  hunters = "Hunter's Fury",
  murakami = 'Murakami Industries',
  nego = "Negotiator's Dilemma",
  od = 'Ongoing Directive',
  overlord = 'Overlord Armaments',
  petrov = 'Petrov Defense Group',
  providence = 'Providence Defense',
  rigger = 'Rigger',
  rk = 'Richter & Kaiser',
  sokolov = 'Sokolov Concern',
  strikers = "Striker's Battlegear",
  system = 'System Corruption',
  tots = 'Tip of the Spear',
  tp = 'True Patriot',
  uzina = 'Uzina Getica',
  wh = 'Walker, Harris & Co',
  wyvern = 'Wyvern Wear',
  yaahl = 'Yaahl',
  ceska = 'Česká Výroba s.r.o.',
}

export enum WeaponType {
  shotgun = 'Shotgun',
  smg = 'SMG',
  ar = 'AR',
  lmg = 'LMG',
  rifle = 'Rifle',
  mmr = 'MMR',
}

export enum ModType {
  gear = 'Gear',
  sticky = 'Sticky Bomb',
  trap = 'Trap',
  decoy = 'Decoy',
  pulse = 'Pulse',
  turret = 'Turret',
  hive = 'Hive',
  chem = 'Chem Launcher',
  firefly = 'Firefly',
  seeker = 'Seeker Mine',
  drone = 'Drone',
  shield = 'Shield',
}

export enum Rarity {
  named = 'Named',
  he = 'High End',
  gs = 'Gear Set',
}

export interface Attribute {
  value: string;
  label: string;
}
