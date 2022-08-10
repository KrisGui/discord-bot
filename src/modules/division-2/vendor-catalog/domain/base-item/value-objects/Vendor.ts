import { ValueObject } from '../../../../../../lib/core';

type LooseAutoComplete<T extends string> = T | (string & { readonly brand?: unique symbol })

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
  #value: ValidVendor;

  private constructor(props: VendorProps) {
    super(props);
    const { vendor } = props;

    this.#value = vendor;
  }

  static assign(
    value: LooseAutoComplete<ValidVendor>
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
    return this.#value;
  }
}
