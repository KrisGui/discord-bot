interface GearData {
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

interface WeaponData {
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

interface ModData {
  type: string;
  rarity: string;
  vendor: string;
  level: number;
  name: string;
  attributes: string;
}

export type JsonData = GearData[] | WeaponData[] | ModData[];

export function isGearData(items: JsonData): items is GearData[] {
  for (const item of items) {
    if ('slot' in item) return true;
  }

  return false;
}

export function isWeaponData(items: JsonData): items is WeaponData[] {
  for (const item of items) {
    if ('dmg' in item) return true;
  }

  return false;
}

export function isModData(items: JsonData): items is ModData[] {
  for (const item of items) {
    if (!('slot' in item) && !('dmg' in item)) return true;
  }

  return false;
}
