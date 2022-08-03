export type Slots =
  | 'Backpack'
  | 'Chest'
  | 'Gloves'
  | 'Holster'
  | 'Kneepads'
  | 'Mask';

export type SlotsUntalented = Exclude<Slots, 'Backpack' | 'Chest'>;
export type Backpack = Extract<Slots, 'Backpack'>;
export type Chest = Extract<Slots, 'Chest'>;

export type Brands =
  | '5.11 Tactical'
  | 'Airaldi Holdings'
  | 'Alps Summit Armament'
  | 'Badger Tuff'
  | 'Belstone Armory'
  | 'China Light Industries Corporation'
  | 'Douglas & Harding'
  | 'Empress International'
  | 'Fenris Group AB'
  | 'Gila Guard'
  | 'Golan Gear Ltd'
  | 'Grupo Sombra S.A.'
  | 'Hana-U Corporation'
  | 'Murakami Industries'
  | 'Overlord Armaments'
  | 'Petrov Defense Group'
  | 'Providence Defense'
  | 'Richter & Kaiser GmbH'
  | 'Sokolov Concern'
  | 'Uzina Getica'
  | 'Walker, Harris & Co.'
  | 'Wyvern Wear'
  | 'Yaahl Gear'
  | 'Česká Výroba s.r.o.';

export type GearSets =
  | 'Aces & Eights'
  | 'Eclipse Protocol'
  | 'Future Initiative'
  | 'Foundry Bulwark'
  | 'Heartbreaker'
  | 'Hard Wired'
  | "Hunter's Fury"
  | "Negotiator's Dilemma"
  | 'Ongoing Directive'
  | 'Rigger'
  | "Striker's Battlegear"
  | 'System Corruption'
  | 'Tip of the Spear'
  | 'True Patriot';

export type BackpackTalents =
  | 'Adrenaline Rush'
  | 'Bloodsucker'
  | 'Calculated'
  | 'Clutch'
  | 'Combined Arms'
  | 'Companion'
  | 'Composure'
  | 'Concussion'
  | 'Creeping Death'
  | 'Energize'
  | 'Galvanize'
  | 'Leadership'
  | 'Opportunistic'
  | 'Overclock'
  | 'Protector'
  | 'Safeguard'
  | 'Shock and Awe'
  | 'Tech Support'
  | 'Unstoppable Force'
  | 'Versatile'
  | 'Vigilance'
  | 'Wicked';

export type ChestTalents =
  | 'Braced'
  | 'Efficient'
  | 'Empathic Resolve'
  | 'Entrench'
  | 'Explosive Delivery'
  | 'Focus'
  | 'Glass Cannon'
  | 'Gunslinger'
  | 'Headhunter'
  | 'Intimidate'
  | 'Kinetic Momentum'
  | 'Mad Bomber'
  | 'Obliterate'
  | 'Overwatch'
  | 'Protected Reload'
  | 'Reassigned'
  | 'Skilled'
  | 'Spark'
  | 'Spotter'
  | 'Tag Team'
  | 'Tamper Proof'
  | 'Trauma'
  | 'Unbreakable'
  | 'Vanguard';
