import { Attribute, Vendor } from '../domain/base-item/value-objects';
import { Gear } from '../domain/gear';
import { Brand, GearTalent, Rarity, Slot } from '../domain/gear/value-objects';
import { GearJson } from './json-types';

export class GearMap {
  static toDomain(gearJson: GearJson[]): Gear[] {
    return gearJson.reduce(
      (arr, entry) => [
        ...arr,
        Gear.instantiate({
          vendor: Vendor.assign(entry.vendor),
          name: entry.name,
          rarity: Rarity.assign(entry.rarity),
          slot: Slot.assign(entry.slot),
          brand: Brand.assign(entry.brand),
          talent: GearTalent.assign(entry.talents),
          attributes: [
            Attribute.assign({ value: '10%', label: 'Headshot Damage' }),
            Attribute.assign({ value: '10%', label: 'Hazard Protection' }),
          ],
        }),
      ],
      [] as Gear[]
    );
  }
}
