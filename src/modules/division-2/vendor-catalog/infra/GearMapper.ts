import { Attribute, Vendor } from '../domain/base-item/value-objects';
import { Gear } from '../domain/gear';
import { Brand, GearTalent, Rarity, Slot } from '../domain/gear/value-objects';
import { GearData } from './jsonData';

export class GearMapper {
  static toDomain(gearData: GearData[]): Gear[] {
    return gearData.reduce(
      (arr, entry) => [
        ...arr,
        Gear.instantiate({
          vendor: Vendor.assign('Cassie'),
          name: "anarchist's cookbook",
          rarity: Rarity.assign('high-end'),
          slot: Slot.assign('Gloves'),
          brand: Brand.assign('5.11 Tactical'),
          talent: GearTalent.assign('Adrenaline Rush'),
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
