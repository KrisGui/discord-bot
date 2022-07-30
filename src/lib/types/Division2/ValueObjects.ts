export enum Category {
  gear = 'Gear',
  weapon = 'Weapon',
  mod = 'Mod',
}

export enum GearType {
  mask = 'Mask',
  backpack = 'Backpack',
  chest = 'Chest',
  gloves = 'Gloves',
  holster = 'Holster',
  kneepads = 'Kneepads',
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

export enum Vendor {
  wh = 'White House',
  clan = 'Clan',
  cd = 'Countdown',
  theater = 'The Theater',
  campus = 'The Campus',
  dzw = 'DZ West',
  dzs = 'DZ South',
  dze = 'DZ East',
  haven = 'Haven',
  benitez = 'Benitez',
  cassie = 'Cassie',
}

export interface Attribute {
  value: string;
  label: string;
}
