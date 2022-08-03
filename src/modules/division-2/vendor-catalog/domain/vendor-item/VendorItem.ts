import { ValidVendor, Vendor } from './value-objects';

export interface VendorItemProps {
  vendor: ValidVendor;
  name: string;
}

export abstract class VendorItem<P extends VendorItemProps> {
  protected vendor: ValidVendor;
  protected name: string;

  constructor(props: P) {
    const { vendor, name } = props;

    this.vendor = vendor;
    this.name = name;
  }
}
