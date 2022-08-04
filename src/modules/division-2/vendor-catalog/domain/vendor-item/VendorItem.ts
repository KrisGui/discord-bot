import { Attribute, Vendor } from './value-objects';

export interface VendorItemProps {
  vendor: Vendor;
  name: string;
  attributes: Attribute[];
}

export abstract class VendorItem<P extends VendorItemProps> {
  protected vendor: Vendor;
  protected name: string;
  protected attributes: Attribute[];

  constructor(props: P) {
    const { vendor, name, attributes } = props;

    this.vendor = vendor;
    this.name = name;
    this.attributes = attributes;
  }
}
