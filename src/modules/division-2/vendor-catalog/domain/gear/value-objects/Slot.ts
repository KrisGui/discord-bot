import { ValueObject } from '../../../../../../lib/core';

const slots = [
  'Mask',
  'Backpack',
  'Chest',
  'Gloves',
  'Holster',
  'Kneepads',
] as const;

export type ValidSlot = typeof slots[number];

interface SlotProps {
  slot: ValidSlot;
}

export class Slot extends ValueObject<SlotProps> {
  private value: ValidSlot;

  private constructor(props: SlotProps) {
    super(props);
    const { slot } = props;

    this.value = slot;
  }

  static assign(
    value: ValidSlot | (string & { readonly brand?: unique symbol })
  ): Slot {
    const slot = this.sanitize(value);

    if (!this.isValid(slot)) {
      throw new Error('invalid slot');
    }

    return new Slot({ slot });
  }

  private static isValid(slotCandidate: string): slotCandidate is ValidSlot {
    return slots.includes(slotCandidate as ValidSlot);
  }

  private static sanitize(str: string): string {
    return str.trim();
  }

  getValue() {
    return this.value;
  }
}
