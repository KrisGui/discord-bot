import { BaseSkill } from './BaseSkill';

type ShieldVariants = 'Bulwark' | 'Crusader' | 'Deflector' | 'Striker';

interface ShieldProps {
  displayName: 'Shield';
  mods: {
    'Skill Mod Slot': ShieldVariants;
    'Circuit Board Slot': unknown | null;
    'Hard Coating Slot': unknown | null;
    'Gyro Slot': unknown | null;
  };
}

export class Shield extends BaseSkill<ShieldProps> {
  constructor(props: ShieldProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Bulwark') {
      return 'base stats for Bulwark Shield';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Crusader') {
      return 'base stats for Crusader Shield';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Deflector') {
      return 'base stats for Deflector Shield';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Striker') {
      return 'base stats for Striker Shield';
    }
  }
}
