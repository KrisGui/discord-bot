import { VendorItem, VendorItemProps } from '../vendor-item';
import { Vendor } from '../vendor-item/value-objects';
import {
  Brand,
  Rarity,
  Slot,
  ValidBrand,
  ValidRarity,
  ValidSlot,
} from './value-objects';

type GearProps = VendorItemProps & {
  rarity: ValidRarity;
  brand: ValidBrand;
  slot: ValidSlot;
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
  vendor: Vendor.assign('Cassie').getValue(),
  name: "anarchist's cookbook",
  rarity: Rarity.assign('high-end').getValue(),
  slot: Slot.assign('Gloves').getValue(),
  brand: Brand.assign('5.11 Tactical').getValue(),
  talent: 'string',
});
