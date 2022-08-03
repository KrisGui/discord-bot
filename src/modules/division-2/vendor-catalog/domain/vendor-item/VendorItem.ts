import { Vendor } from './value-objects';

export interface VendorItemProps {
  vendor: Vendor;
  name: string;
}

export abstract class VendorItem<P extends VendorItemProps> {
  protected vendor: Vendor;
  protected name: string;

  constructor(props: P) {
    const { vendor, name } = props;

    this.vendor = vendor;
    this.name = name;
  }
}
