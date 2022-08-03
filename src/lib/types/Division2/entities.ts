import {
  Brand,
  GearType,
  ModType,
  Rarity,
  WeaponType
} from './valueObjects';

export interface Gear extends VendorItemProps {
  rarity: Rarity;
  type: GearType;
  brand: Brand;
  talent?: string;
}

export interface Weapon extends VendorItemProps {
  rarity: Rarity;
  type: WeaponType;
  talent: string;
}

export interface Mod extends VendorItemProps {
  type: ModType;
}

export type VendorItems = Gear[] | Weapon[] | Mod[];
