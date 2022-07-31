import { VendorItemProps } from '../../lib/types/division2/entities';
import {
  Attribute,
  Brand,
  GearType,
  Rarity,
} from '../../lib/types/division2/valueObjects';

abstract class VendorItem {
  constructor(protected props: VendorItemProps) {}

  abstract renderString(): string;
}

interface GearProps extends VendorItemProps {
  rarity: Rarity;
  type: GearType;
  brand: Brand;
  attributes: Attribute[];
  talent?: string;
}

export class Gear extends VendorItem {
  private constructor(public props: GearProps) {
    super(props);
  }

  public static instantiate(props: GearProps): Gear {
    return new Gear(props)
  }

  public renderString(): string {
    return 'Hello Gear';
  }
}
