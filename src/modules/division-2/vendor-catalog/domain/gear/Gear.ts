import { VendorItem, VendorItemProps } from '../vendor-item';
import { Vendor } from '../vendor-item/value-objects';
import { Rarity, Slot } from './value-objects';
import { Brands } from './value-objects/gear-types';

type GearProps = VendorItemProps & {
  rarity: Rarity;
  slot: Slot;
  brand: Brands;
};

export class Gear extends VendorItem<GearProps> {
  constructor(props: GearProps) {
    super(props);
  }

  static instantiate(props: GearProps): Gear {
    return new Gear(props);
  }
}

const testGear = Gear.instantiate({
  vendor: Vendor.assign('cassie'),
  rarity: Rarity.assign('high-end'),
  slot: Slot.assign('backpack'),
  name: "anarchist's cookbook",
  brand: 'Golan Gear Ltd',
  talent: 'Glass Cannon',
});
