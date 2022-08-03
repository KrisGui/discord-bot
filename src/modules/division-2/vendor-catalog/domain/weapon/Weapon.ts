import { VendorItem, VendorItemProps } from '../vendor-item';

interface WeaponProps extends VendorItemProps {}

export class Weapon extends VendorItem<WeaponProps> {
  constructor(props: WeaponProps) {
    super(props)
  }

  static instantiate(props: WeaponProps): Weapon {}
}
