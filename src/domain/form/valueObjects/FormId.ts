import { UuidValueObject } from "@/domain/shared/UuidValueObject";

export class FormId extends UuidValueObject {
  static generate(): FormId {
    return new FormId(crypto.randomUUID());
  }
}