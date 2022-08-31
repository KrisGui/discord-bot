import { SkillKeys, SkillSlotKeys } from '../../skill/types';
import { SkillModAttributesSlotKeys } from './attributes';
import { SkillModNamesSlotKeys } from './names';

export type { SkillKeys } from '../../skill/types';
export type { SkillMod } from '..';
export * from './attributes';
export * from './names';

export type SlotKeys<K extends SkillKeys> = string &
  (SkillSlotKeys<K> | SkillModNamesSlotKeys<K> | SkillModAttributesSlotKeys<K>);
