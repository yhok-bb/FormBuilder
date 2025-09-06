import { ValidationResult } from "./ValidationResult";
import { ValidationRule } from "./ValidationRule";

export class RequiredValidationRule extends ValidationRule {
  validate(value: any): ValidationResult {
    if (value == null || value === '' || (Array.isArray(value) && value.length === 0)) {
      return ValidationResult.error('この項目は必須です');
    }
    return ValidationResult.success();
  }
}
