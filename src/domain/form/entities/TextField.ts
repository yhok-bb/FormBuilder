import { FieldId } from "../valueObjects/FieldId";
import { FieldName } from "../valueObjects/FieldName";
import { FieldType, FormField } from "./FormField";

export class TextField extends FormField {
  constructor(
    id: FieldId,
    name: FieldName,
    order: number,
    isRequired: boolean,
    // validationRules: ValidationRule[] = [],
    private placeholder?: string,
    private maxLength?: number,
  ) {
    super(id, name, order, isRequired);
  }

  getType(): FieldType {
    return FieldType.TEXT;
  }

  getPlaceholder(): string | undefined {
    return this.placeholder;
  }

  getMaxLength(): number | undefined {
    return this.maxLength;
  }

  static create(
    name: string,
    options?: { placeholder?: string, maxLength?: number, isRequired?: boolean; }
  ): TextField {
    return new TextField(
      FieldId.generate(),
      new FieldName(name),
      0,
      options?.isRequired ?? false,
      options?.placeholder,
      options?.maxLength
    );
  }
}
