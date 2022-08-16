import { BaseSkill } from './BaseSkill';

type DroneVariants =
  | 'Striker'
  | 'Defender'
  | 'Bombadier'
  | 'Fixer'
  | 'Tactician';

interface DroneProps {
  displayName: 'Drone';
  mods: {
    'Skill Mod Slot': DroneVariants;
    'Battery Slot': unknown | null;
    'Hull Slot': unknown | null;
    'Feed Slot': unknown | null;
  };
}

export class Drone extends BaseSkill<DroneProps> {
  constructor(props: DroneProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Striker') {
      return 'base stats for Striker Drone';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Defender') {
      return 'base stats for Defender Drone';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Bombadier') {
      return 'base stats for Bombadier Drone';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Fixer') {
      return 'base stats for Fixer Drone';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Tactician') {
      return 'base stats for Tactician Drone';
    }
  }
}
