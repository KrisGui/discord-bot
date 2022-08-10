import type { Gear } from '../domain/gear';

type VendorItem = Gear;

export class VendorManager {
  static itemList: VendorItem[] = [];
  // typeMap: Map<VendorItem<P>['type'], VendorItem<P>> = new Map();
  // vendorMap: Map<VendorItem<P>['vendor'], VendorItem<P>> = new Map();
  // rarityMap: Map<VendorItem<P>['rarity'], VendorItem<P>> = new Map();
  // subTypeMap: Map<VendorItem<P>['subType'], VendorItem<P>> = new Map();

  static addItem(item: VendorItem): void {
    this.itemList.push(item);
  }
}
