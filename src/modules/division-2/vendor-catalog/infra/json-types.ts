export interface GearJson {
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

export interface WeaponJson {
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

export interface ModJson {
  type: string;
  rarity: string;
  vendor: string;
  level: number;
  name: string;
  attributes: string;
}

export type VendorItemJson = GearJson[] | WeaponJson[] | ModJson[];

export function isGearJson(items: VendorItemJson): items is GearJson[] {
  for (const item of items) {
    if ('slot' in item) return true;
  }

  return false;
}

export function isWeaponJson(items: VendorItemJson): items is WeaponJson[] {
  for (const item of items) {
    if ('dmg' in item) return true;
  }

  return false;
}

export function isModJson(items: VendorItemJson): items is ModJson[] {
  for (const item of items) {
    if (!('slot' in item) && !('dmg' in item)) return true;
  }

  return false;
}
