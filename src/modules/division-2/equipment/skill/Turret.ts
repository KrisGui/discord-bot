import { BaseSkill } from './BaseSkill';

type TurretVariants = 'Assault' | 'Incinerator' | 'Sniper' | 'Artillery';

interface TurretProps {
  displayName: 'Turret';
  mods: {
    'Skill Mod Slot': TurretVariants;
    'Firing Mechanism Slot': unknown | null;
    'Housing Slot': unknown | null;
    'Targeting Slot': unknown | null;
  };
}

export class Turret extends BaseSkill<TurretProps> {
  constructor(props: TurretProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Assault') {
      return 'base stats for Assault Turret';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Incinerator') {
      return 'base stats for Incinerator Turret';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Sniper') {
      return 'base stats for Sniper Turret';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Artillery') {
      return 'base stats for Artillery Turret';
    }
  }
}
