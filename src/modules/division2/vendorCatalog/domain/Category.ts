import { ValueObject } from '../../../../lib/core';
import {
  Categories,
  CategoryProps,
} from '../../../../lib/types/division2/vendorCatalog';

export class Category extends ValueObject<CategoryProps> {
  private constructor(props: CategoryProps) {
    super(props);
  }

  public static assign(category: keyof typeof Categories): Category {
    if (!this.isValidCategory(category)) {
      throw new Error('invalid category');
    }

    return new Category({
      value: Categories[category],
    });
  }

  private static isValidCategory(categoryCandidate: string) {
    return categoryCandidate in Categories;
  }

  get value(): string {
    return this.props.value;
  }
}
