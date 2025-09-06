import { ValidationResult } from "./ValidationResult";
import { ValidationRule } from "./ValidationRule";

export class EmailValidationRule extends ValidationRule {
  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  validate(value: any): ValidationResult {
    if (!value) return ValidationResult.success(); // 空の場合はスキップ（必須チェックは別で行う）

    if (!this.emailRegex.test(value)) {
      return ValidationResult.error('有効なメールアドレスを入力してください');
    }

    return ValidationResult.success();
  }
}
