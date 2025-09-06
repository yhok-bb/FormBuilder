export class ValidationResult {
  private constructor(
    private readonly isValid: boolean,
    private readonly errors: string[]
  ) { }

  static success(): ValidationResult {
    return new ValidationResult(true, []);
  }

  static error(message: string): ValidationResult {
    return new ValidationResult(false, [message]);
  }

  static errors(messages: string[]): ValidationResult {
    return new ValidationResult(false, messages);
  }

  isSuccess(): boolean {
    return this.isValid;
  }

  getErrors(): string[] {
    return this.errors;
  }

  combine(other: ValidationResult): ValidationResult {
    return new ValidationResult(
      this.isValid && other.isValid,
      [...this.errors, ...other.errors]
    );
  }
}
