import { ValueObject } from '../../../../../../lib/core';

const slots = [
  'mask',
  'backpack',
  'chest',
  'gloves',
  'holster',
  'kneepads',
] as const;

type ValidSlot = typeof slots[number];

interface SlotProps {
  slot: string;
}

export class Slot extends ValueObject<SlotProps> {
  private slot: string;

  private constructor(props: SlotProps) {
    super(props);
    const { slot } = props;

    this.slot = slot;
  }

  static assign(
    slotCandidate: ValidSlot | (string & { readonly brand?: unique symbol })
  ): Slot {
    const slot = this.sanitize(slotCandidate);

    if (!this.isValidSlot(slot)) {
      throw new Error('invalid slot');
    }

    return new Slot({ slot });
  }

  private static isValidSlot(
    validSlotCandidate: string
  ): validSlotCandidate is ValidSlot {
    return slots.includes(validSlotCandidate as ValidSlot);
  }

  private static sanitize(str: string): string {
    return str.toLowerCase();
  }

  getvalue() {
    return this.slot;
  }
}
