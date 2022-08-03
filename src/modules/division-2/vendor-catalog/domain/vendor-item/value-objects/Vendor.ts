import { ValueObject } from '../../../../../../lib/core';

const vendors = [
  'White House',
  'Clan',
  'Countdown',
  'The Theater',
  'The Campus',
  'DZ West',
  'DZ South',
  'DZ East',
  'Haven',
  'Benitez',
  'Cassie',
] as const;

export type ValidVendor = typeof vendors[number];

interface VendorProps {
  vendor: ValidVendor;
}

export class Vendor extends ValueObject<VendorProps> {
  private value: ValidVendor;

  private constructor(props: VendorProps) {
    super(props);
    const { vendor } = props;

    this.value = vendor;
  }

  static assign(
    value: ValidVendor | (string & { readonly brand?: unique symbol })
  ): Vendor {
    const vendor = this.sanitize(value);

    if (!this.isValid(vendor)) {
      throw new Error('invalid vendor');
    }

    return new Vendor({ vendor });
  }

  private static isValid(
    vendorCandidate: string
  ): vendorCandidate is ValidVendor {
    return vendors.includes(vendorCandidate as ValidVendor);
  }

  private static sanitize(str: string) {
    return str.trim();
  }

  getValue() {
    return this.value;
  }
}
