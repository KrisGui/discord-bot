export interface GearResponseItem {
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

export interface WeaponResponseItem {
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

export interface ModResponseItem {
  type: string;
  rarity: string;
  vendor: string;
  level: number;
  name: string;
  attributes: string;
}

export type ApiResponse =
  | GearResponseItem[]
  | WeaponResponseItem[]
  | ModResponseItem[];

export function isGearResponse(
  items: ApiResponse
): items is GearResponseItem[] {
  return (items as any).every((item: any) => 'slot' in item);
}

export function isWeaponResponse(
  items: ApiResponse
): items is WeaponResponseItem[] {
  return (items as any).every((item: any) => 'dmg' in item);
}
