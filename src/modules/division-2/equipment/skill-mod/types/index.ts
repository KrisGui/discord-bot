import { SkillNamesKey, SkillSlotsKey } from '../../skill/types';
import { skillModNames } from '../constants';

type SkillModNamesMap = typeof skillModNames;

export type SkillModName<
  T extends SkillNamesKey,
  U extends SkillSlotsKey<T>
> = {
  [K in keyof SkillModNamesMap]: {
    [P in keyof SkillModNamesMap[K]]: P extends U
      ? keyof SkillModNamesMap[K][P]
      : never;
  }[keyof SkillModNamesMap[K]];
}[keyof SkillModNamesMap];

// export type SkillModName<
//   T extends SkillName,
//   U extends keyof SkillModNamesMap[T]
// > = U extends keyof SkillModNamesMap[T] ? keyof SkillModNamesMap[T][U] : never;

type test = SkillModName<'ChemLauncher', 'Agitator'>;
