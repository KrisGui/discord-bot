import type { SkillNamesKey } from '../../skill/types';
import { skillModNames } from '../constants/names';

export type SkillModNamesKey<K extends SkillNamesKey> = string &
  keyof typeof skillModNames[K];

type SkillForSkillModNames<S> = S extends SkillModNamesKey<infer K> ? K : never;

export type SkillModNames<
  S extends SkillModNamesKey<K>,
  K extends SkillNamesKey = SkillForSkillModNames<S>
> = string & keyof typeof skillModNames[K][S];

// export type SkillModNames<
//   K extends SkillNamesKey,
//   S extends SkillModNamesKey<K>
// > = {
//   [Slot in string & keyof typeof skillModNames[K]]: Slot extends S
//     ? keyof typeof skillModNames[K][Slot]
//     : never;
// }[string & keyof typeof skillModNames[K]];

export interface SkillModInput<
  S extends SkillModNamesKey<K>,
  K extends SkillNamesKey = SkillForSkillModNames<S>
> {
  skill: K;
  slot: S;
  name: SkillModNames<S>;
  // attribute: SkillModAttributeInputValues<K, S>;
}

export interface SkillModProps<
  S extends SkillModNamesKey<K>,
  K extends SkillNamesKey = SkillForSkillModNames<S>
> {
  name: SkillModNames<S>;
  //   attribute: SkillModAttributeInputValues<K, S> &
  //     SkillModAttributeStaticValues<
  //       K,
  //       S,
  //       SkillModInput<K, S>['attribute']['name']
  //     >;
}

type TEST = SkillModNamesKey<'chemLauncher'>;
type test = SkillModNames<'hull', 'drone'>;
