import { Entity } from "@/domain/shared/Entity";
import { FormId } from "../valueObjects/FormId";
import { FormName } from "../valueObjects/FormName";
import { FormField } from "./FormField";
import { FieldId } from "../valueObjects/FieldId";

export class Form extends Entity<FormId> {
  private constructor(
    id: FormId,
    private name: FormName,
    private fields: FormField[],
    private readonly createdAt: Date,
    private updatedAt: Date
  ) {
    super(id);
  }

  static create(name: string): Form {
    const now = new Date();
    return new Form(
      FormId.generate(),
      new FormName(name),
      [],
      now,
      now
    );
  }

  static reconstitute(
    id: string,
    name: string,
    fields: FormField[],
    createdAt: Date,
    updatedAt: Date
  ): Form {
    return new Form(
      new FormId(id),
      new FormName(name),
      fields,
      createdAt,
      updatedAt
    );
  }

  getName(): FormName {
    return this.name;
  }

  getFields(): FormField[] {
    return this.fields;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  addField(field: FormField): void {
    const nextOrder = this.fields.length;
    field.updateOrder(nextOrder);
    this.fields.push(field);
    this.touch();
  }

  removeField(fieldId: FieldId): void {
    const index = this.fields.findIndex(field => field.getId().equals(fieldId));
    if (index === -1) {
      throw new Error('Field not Found');
    }
    this.fields.splice(index, 1);
    this.reOrderFields();
    this.touch();
  }

  private reOrderFields(): void {
    this.fields.forEach((field, index) => {
      field.updateOrder(index);
    });
  }

  private findField(fieldId: FieldId): FormField | undefined {
    return this.fields.find(field => field.getId().equals(fieldId));
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}
