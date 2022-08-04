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
