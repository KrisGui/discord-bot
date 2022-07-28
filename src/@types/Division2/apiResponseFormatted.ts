import { GearResponseItem, ModResponseItem, WeaponResponseItem } from './apiResponse';

export type Gear = Pick<GearResponseItem, 'vendor' | 'name' | 'brand' | 'slot'> & {
  coreAttribute: string;
  attributes: string[];
  talent: string;
};

export type Weapon = Pick<WeaponResponseItem, 'vendor' | 'name' | 'talent'> & {
  coreAttributes: string[];
  attribute: string;
};

export type Mod = Pick<ModResponseItem, 'vendor' | 'name' | 'attributes'> & {
  type: 'gear' | 'skill';
};

export type ApiResponseFormatted = Gear[] | Weapon[] | Mod[];
