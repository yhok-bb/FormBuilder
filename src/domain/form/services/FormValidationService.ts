import { ValidationResult } from "@/domain/shared/validation/ValidationResult";
import { Form } from "../entities/Form";
import { FormField } from "../entities/FormField";

export class FormValidationService {
  validate(form: Form): ValidationResult {
    const results: ValidationResult[] = [];

    // フィールドの検証
    const fields = form.getFields();
    results.push(this.validateFields(fields));

    return results.reduce((acc, result) => acc.combine(result), ValidationResult.success());
  }

  private validateFields(fields: FormField[]): ValidationResult {
    if (fields.length === 0) {
      return ValidationResult.error('フォームには少なくとも1つのフィールドが必要です');
    }
    return ValidationResult.success();
  }
}
