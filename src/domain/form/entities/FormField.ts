import { Entity } from "@/domain/shared/Entity";
import { FieldId } from "../valueObjects/FieldId";
import { FieldName } from "../valueObjects/FieldName";

export enum FieldType {
  TEXT = 'text',
  EMAIL = 'email',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
}

export abstract class FormField extends Entity<FieldId> {
  protected constructor(
    id: FieldId,
    protected name: FieldName,
    protected order: number,
    protected isRequired: boolean,
    // protected validationRules: ValidationRule[],
  ) {
    super(id)
  }

  abstract getType(): FieldType

  getName(): FieldName {
    return this.name;
  }

  getOrder(): number {
    return this.order;
  }

  isFieldRequired(): boolean {
    return this.isRequired;
  }

  // getValidationRules(): ValidationRule[] {
  //   return [...this.validationRules]
  // }

  updateName(name: FieldName): void {
    this.name = name;
  }
  
  updateOrder(order: number): void {
    this.order = order
  }

  setRequired(required: boolean): void {
    this.isRequired = required
  }
}