import { ValueObject } from "@/domain/shared/ValueObject";

export class FieldName extends ValueObject<string> {
  protected validate(value: string): void {
    if(!value || value.trim().length === 0) {
      throw new Error('FieldName cannot be empty')
    }

    if(value.length > 100) {
      throw new Error('FieldName cannot exceed 100 characters')
    }
  }
}