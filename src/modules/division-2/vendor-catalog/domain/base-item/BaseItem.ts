import { Attribute, Vendor } from './value-objects';

export interface BaseItemProps {
  vendor: Vendor;
  name: string;
  attributes: Attribute[];
}

export abstract class BaseItem<P extends BaseItemProps> {
  constructor(protected props: P) {}

  get vendor() {
    return this.props.vendor.getValue();
  }

  get name() {
    return this.props.name;
  }

  get attributes() {
    return this.props.attributes;
  }
}
