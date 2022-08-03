interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<P extends ValueObjectProps> {
  constructor(public readonly props: P) {
    this.props = Object.freeze(props);
  }

  equals(vo?: ValueObject<P>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }

    return (
      Object.keys(vo).length === Object.keys(this.props).length &&
      (Object.keys(vo) as (keyof typeof vo)[]).every((key) => {
        return (
          Object.prototype.hasOwnProperty.call(this.props, key) &&
          vo[key] === this.props[key]
        );
      })
    );
  }
}
