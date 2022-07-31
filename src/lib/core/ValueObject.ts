export abstract class ValueObject<P> {
  constructor(public readonly props: P) {
    this.props = Object.freeze(props);
  }
}
