import { UuidValueObject } from "@/domain/shared/UuidValueObject";

export class FieldId extends UuidValueObject {
  static generate(): FieldId {
    return new FieldId(crypto.randomUUID());
  }
}