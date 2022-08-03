import { ValueObject } from '../../../../../../lib/core';

const vendors = [
  'white house',
  'clan',
  'countdown',
  'the theater',
  'the campus',
  'dz west',
  'dz south',
  'dz east',
  'haven',
  'benitez',
  'cassie',
] as const;

type ValidVendor = typeof vendors[number];

interface VendorProps {
  vendor: string;
}

export class Vendor extends ValueObject<VendorProps> {
  private vendor: string;

  private constructor(props: VendorProps) {
    super(props);
    const { vendor } = props;

    this.vendor = vendor;
  }

  static assign(
    vendorCandidate: ValidVendor | (string & { readonly brand?: unique symbol })
  ): Vendor {
    const vendor = this.sanitize(vendorCandidate);

    if (!this.isValidVendor(vendor)) {
      throw new Error('invalid vendor');
    }

    return new Vendor({ vendor });
  }

  private static isValidVendor(
    validVendorCandidate: string
  ): validVendorCandidate is ValidVendor {
    return vendors.includes(validVendorCandidate as ValidVendor);
  }

  private static sanitize(str: string): string {
    return str.toLowerCase();
  }

  getValue() {
    return this.vendor;
  }
}
