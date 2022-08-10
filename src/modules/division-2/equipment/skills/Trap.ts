import { BaseSkill } from './BaseSkill';

type TrapVariants = 'Repair' | 'Shock' | 'Shrapnel';

interface TrapProps {
  displayName: 'Trap';
  mods: {
    'Skill Mod Slot': TrapVariants;
    'Charge Slot': unknown | null;
    'Electronics Slot': unknown | null;
  };
}

export class Trap extends BaseSkill<TrapProps> {
  constructor(props: TrapProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Repair') {
      return 'base stats for Repair Trap';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Shock') {
      return 'base stats for Shock Trap';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Shrapnel') {
      return 'base stats for Shrapnel Trap';
    }
  }
}
