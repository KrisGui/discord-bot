import { BaseSkill } from './BaseSkill';

type HiveVariants =
  | 'Restorer'
  | 'Stinger'
  | 'Reviver'
  | 'Booster'
  | 'Artificer';

interface HiveProps {
  displayName: 'Hive';
  mods: {
    'Skill Mod Slot': HiveVariants;
    'Drones Slot': unknown | null;
    'Launcher Slot': unknown | null;
    'System Slot': unknown | null;
  };
}

export class Hive extends BaseSkill<HiveProps> {
  constructor(props: HiveProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Restorer') {
      return 'base stats for Restorer Hive';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Stinger') {
      return 'base stats for Stinger Hive';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Reviver') {
      return 'base stats for Reviver Hive';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Booster') {
      return 'base stats for Booster Hive';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Artificer') {
      return 'base stats for Artificer Hive';
    }
  }
}
