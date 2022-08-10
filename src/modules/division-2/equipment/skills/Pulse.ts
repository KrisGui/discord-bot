import { BaseSkill } from './BaseSkill';

type PulseVariants = 'Scanner' | 'Remote' | 'Jammer' | 'Banshee' | 'Achilles';

interface PulseProps {
  displayName: 'Pulse';
  mods: {
    'Skill Mod Slot': PulseVariants;
    'Coil Slot': unknown | null;
    'Housing Slot': unknown | null;
  };
}

export class Pulse extends BaseSkill<PulseProps> {
  constructor(props: PulseProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Scanner') {
      return 'base stats for Scanner Pulse';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Remote') {
      return 'base stats for Remote Pulse';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Jammer') {
      return 'base stats for Jammer Pulse';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Banshee') {
      return 'base stats for Banshee Pulse';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Achilles') {
      return 'base stats for Achilles Pulse';
    }
  }
}
