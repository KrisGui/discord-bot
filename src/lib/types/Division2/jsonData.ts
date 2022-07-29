export interface GearFromJson {
  type: string;
  rarity: string;
  vendor: string;
  level: number;
  name: string;
  brand: string;
  slot: string;
  armor: string;
  core: string;
  attributes: string;
  talents: string;
  mods: string;
}

export interface WeaponFromJson {
  type: string;
  rarity: string;
  vendor: string;
  level: number;
  name: string;
  dmg: string;
  rpm: number;
  mag: number;
  talent: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
}

export interface ModFromJson {
  type: string;
  rarity: string;
  vendor: string;
  level: number;
  name: string;
  attributes: string;
}

export type DataFromJson = GearFromJson[] | WeaponFromJson[] | ModFromJson[];

export function isGearData(items: any[]): items is GearFromJson[] {
  return items.every((item) => 'slot' in item);
}

export function isWeaponData(items: any[]): items is WeaponFromJson[] {
  return items.every((item) => 'dmg' in item);
}

export type GearFormatted = Pick<
  GearFromJson,
  'vendor' | 'name' | 'brand' | 'slot'
> & {
  coreAttribute: string;
  attributes: string[];
  talent: string;
};

export type WeaponFormatted = Pick<
  WeaponFromJson,
  'vendor' | 'name' | 'talent'
> & {
  coreAttributes: string[];
  attribute: string;
};

export type ModFormatted = Pick<
  ModFromJson,
  'vendor' | 'name' | 'attributes'
> & {
  type: 'gear' | 'skill';
};

export type DataFormatted =
  | GearFormatted[]
  | WeaponFormatted[]
  | ModFormatted[];
