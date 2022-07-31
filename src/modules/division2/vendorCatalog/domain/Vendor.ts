import { ValueObject } from '../../../../lib/core';
import {
  VendorProps,
  Vendors,
} from '../../../../lib/types/division2/vendorCatalog';

export class Vendor extends ValueObject<VendorProps> {
  private constructor(props: VendorProps) {
    super(props);
  }

  public static assign(vendor: keyof typeof Vendors): Vendor {
    if (!this.isValidVendor(vendor)) {
      throw new Error('invalid vendor');
    }

    return new Vendor({
      value: Vendors[vendor],
    });
  }

  private static isValidVendor(vendorCandidate: string) {
    return vendorCandidate in Vendors;
  }

  get value(): string {
    return this.props.value;
  }
}
