import { VendorItem, VendorItemProps } from '../vendor-item';
import { Attribute, Vendor } from '../vendor-item/value-objects';
import {
  Brand,
  GearTalent,
  Rarity,
  Slot,
  ValidBrand,
  ValidGearTalent,
  ValidRarity,
  ValidSlot,
} from './value-objects';

type GearProps = VendorItemProps & {
  rarity: ValidRarity;
  brand: ValidBrand;
  slot: ValidSlot;
  talent: ValidGearTalent;
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
  vendor: Vendor.assign('Cassie'),
  name: "anarchist's cookbook",
  rarity: Rarity.assign('high-end').getValue(),
  slot: Slot.assign('Gloves').getValue(),
  brand: Brand.assign('5.11 Tactical').getValue(),
  talent: GearTalent.assign('Adrenaline Rush').getValue(),
  attributes: [
    Attribute.assign({ value: '10%', label: 'Headshot Damage' }),
    Attribute.assign({ value: '10%', label: 'Hazard Protection' }),
  ],
});
