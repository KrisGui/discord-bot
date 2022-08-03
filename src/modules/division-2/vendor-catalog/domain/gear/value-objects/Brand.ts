import { ValueObject } from '../../../../../../lib/core';

interface BrandProps {
  brand: string;
}

export class Brand extends ValueObject<BrandProps> {
  private constructor(props: BrandProps) {
    super(props);
  }

  static assign(brand: string): Brand {
    if (!this.isValidBrand(brand)) {
      throw new Error('invalid brand');
    }

    return new Brand({ brand });
  }

  private static isValidBrand(brandCandidate: string): boolean {}

  get value(): string {
    return this.props.brand;
  }
}
