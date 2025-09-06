import { ValueObject } from "@/domain/shared/ValueObject";

export class FormName extends ValueObject<string> {
  protected validate(value: string): void {
    if(!value || value.trim().length === 0) {
      throw new Error('FormName cannot be empty')
    }

    if(value.length > 100) {
      throw new Error('FormName cannot exceed 100 characters')
    }
  }
}