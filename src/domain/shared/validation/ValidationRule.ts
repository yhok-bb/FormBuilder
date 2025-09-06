import { ValidationResult } from "./ValidationResult";

export abstract class ValidationRule {
  abstract validate(value: any): ValidationResult;
}
