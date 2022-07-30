import {
  Attribute,
  Category,
  GearType,
  ModType,
  Rarity,
  Vendor,
  WeaponType,
} from './ValueObjects';

interface GearDataRaw {
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

interface WeaponDataRaw {
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

interface ModDataRaw {
  type: string;
  rarity: string;
  vendor: string;
  level: number;
  name: string;
  attributes: string;
}

export type JsonDataRaw = GearDataRaw[] | WeaponDataRaw[] | ModDataRaw[];

export function isGearData(items: JsonDataRaw): items is GearDataRaw[] {
  for (const item of items) {
    if ('slot' in item) return true;
  }

  return false;
}

export function isWeaponData(items: JsonDataRaw): items is WeaponDataRaw[] {
  for (const item of items) {
    if ('dmg' in item) return true;
  }

  return false;
}

export function isModData(items: JsonDataRaw): items is ModDataRaw[] {
  for (const item of items) {
    if (!('slot' in item) && !('dmg' in item)) return true;
  }

  return false;
}

export interface Gear {
  category: Category;
  vendor: Vendor;
  rarity: Rarity;
  type: GearType;
  name: string;
  brand: string;
  attributes: Attribute[];
  talent?: string;
}

export interface Weapon {
  category: Category;
  vendor: Vendor;
  rarity: Rarity;
  type: WeaponType;
  name: string;
  attributes: Attribute[];
  talent: string;
}

export interface Mod {
  category: Category;
  vendor: Vendor;
  type: ModType;
  name: string;
  attributes: Attribute[];
};

export type JsonDataFormatted =
  | Gear[]
  | Weapon[]
  | Mod[];
