export abstract class ValueObject<T> {
  protected readonly value: T;

  constructor(value: T) {
    this.validate(value);
    this.value = value;
  }

  protected abstract validate(value: T): void;

  equals(other: ValueObject<T>): boolean {
    return this.value === other.value;
  }

  getValue(): T {
    return this.value;
  }
}