import { ValueObject } from "../../../../../../lib/core";

interface AttributeProps {
  value: string;
  label: string;
}

export class Attribute extends ValueObject<AttributeProps> {
  value: AttributeProps;
  
  constructor(props: AttributeProps) {
    super(props)

    this.value = props;
  }

  static assign({ value, label }: AttributeProps): Attribute {
    return new Attribute({ value, label })
  }

  getValue() {
    return this.value;
  }
}
