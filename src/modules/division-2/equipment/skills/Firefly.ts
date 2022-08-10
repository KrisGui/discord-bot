import { BaseSkill } from './BaseSkill';

type FireflyVariants = 'Blinder' | 'Burster' | 'Demolisher';

interface FireflyProps {
  displayName: 'Firefly';
  mods: {
    'Skill Mod Slot': FireflyVariants;
    'Propulsion Slot': unknown | null;
    'Payload Slot': unknown | null;
    'Targeting Slot': unknown | null;
  };
}

export class Firefly extends BaseSkill<FireflyProps> {
  constructor(props: FireflyProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Blinder') {
      return 'base stats for Blinder Firefly';
    }
    if (this.props.mods['Skill Mod Slot'] === 'Burster') {
      return 'base stats for Burster Firefly';
    }
    if (this.props.mods['Skill Mod Slot'] === 'Demolisher') {
      return 'base stats for Demolisher Firefly';
    }
  }
}
