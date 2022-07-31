import {
  Category,
  Vendor,
} from '../../../modules/division2/vendorCatalog/domain';
import {
  Attribute,
  Brand,
  GearType,
  ModType,
  Rarity,
  WeaponType,
} from './valueObjects';

export interface VendorItemProps {
  category: Category;
  vendor: Vendor;
  name: string;
}

export interface Gear extends VendorItemProps {
  rarity: Rarity;
  type: GearType;
  brand: Brand;
  attributes: Attribute[];
  talent?: string;
}

export interface Weapon extends VendorItemProps {
  rarity: Rarity;
  type: WeaponType;
  attributes: Attribute[];
  talent: string;
}

export interface Mod extends VendorItemProps {
  type: ModType;
  attributes: Attribute[];
}

export type VendorItems = Gear[] | Weapon[] | Mod[];
