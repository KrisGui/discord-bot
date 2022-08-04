import { BaseItem, BaseItemProps } from '../base-item';

interface WeaponProps extends BaseItemProps {}

export class Weapon extends BaseItem<WeaponProps> {
  constructor(props: WeaponProps) {
    super(props)
  }

  static instantiate(props: WeaponProps): Weapon {}
}
