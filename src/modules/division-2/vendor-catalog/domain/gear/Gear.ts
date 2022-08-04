import { BaseItem, BaseItemProps } from '../base-item';
import { Brand, GearTalent, Rarity, Slot } from './value-objects';

export type GearProps = BaseItemProps & {
  rarity: Rarity;
  brand: Brand;
  slot: Slot;
  talent: GearTalent;
};

export class Gear extends BaseItem<GearProps> {
  constructor(props: GearProps) {
    super(props);
  }

  static instantiate(props: GearProps): Gear {
    return new Gear(props);
  }

  get rarity() {
    return this.props.rarity.getValue();
  }

  get brand() {
    return this.props.brand.getValue();
  }

  get slot() {
    return this.props.slot.getValue();
  }

  get talent() {
    return this.props.talent.getValue();
  }
}
