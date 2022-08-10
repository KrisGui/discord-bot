interface BaseSkillProps {
  displayName: string;
  mods: {
    'Skill Mod Slot': unknown;
  };
}

export abstract class BaseSkill<SkillProps extends BaseSkillProps> {
  constructor(protected props: SkillProps) {}

  get name() {
    return `${this.props.mods['Skill Mod Slot']} ${this.props.displayName}`;
  }

  abstract getBaseStats(): unknown;
}
