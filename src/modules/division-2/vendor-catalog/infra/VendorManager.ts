import { fetch } from 'undici';
import { Gear } from '../domain/gear';
import { GearMapper } from './GearMapper';
import { isGearData, JsonData } from './jsonData';

type VendorItem = Gear;

export class VendorManager {
  itemList: VendorItem[] = [];
  // typeMap: Map<VendorItem<P>['type'], VendorItem<P>> = new Map();
  // vendorMap: Map<VendorItem<P>['vendor'], VendorItem<P>> = new Map();
  // rarityMap: Map<VendorItem<P>['rarity'], VendorItem<P>> = new Map();
  // subTypeMap: Map<VendorItem<P>['subType'], VendorItem<P>> = new Map();

  addItem(item: VendorItem): void {
    this.itemList.push(item);
  }

  static async fetchData(type: 'gear' | 'weapons' | 'mods') {
    const response = await fetch(
      `https://rubenalamina.mx/division/${type}.json`
    );
    const json = (await response.json()) as JsonData;
    return json;
  }

  private mapData(data: JsonData) {
    if (isGearData(data)) {
      GearMapper.toDomain(data)
    }
  }
}
