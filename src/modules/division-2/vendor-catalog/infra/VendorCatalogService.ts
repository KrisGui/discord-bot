import { fetch } from 'undici';
import { GearMap } from './GearMap';
import { VendorItemJson, isGearJson } from './json-types';
import { VendorManager } from './VendorManager';

export class VendorCatalogService {
  static async fetchData(type: 'gear' | 'weapons' | 'mods') {
    const response = await fetch(
      `https://rubenalamina.mx/division/${type}.json`
    );
    const json = (await response.json()) as VendorItemJson;

    this.mapData(json);
  }

  private static mapData(json: VendorItemJson) {
    if (isGearJson(json)) {
      const mappedGear = GearMap.toDomain(json);

      mappedGear.forEach((item) => VendorManager.addItem(item));
    }
  }
}
