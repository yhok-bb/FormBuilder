import { Form } from "../entities/Form";
import { FormId } from "../valueObjects/FormId";

export interface FormRepository {
  save(form: Form): Promise<void>;
  findById(id: FormId): Promise<Form | null>;
  findAll(): Promise<Form[]>;
  delete(id: FormId): Promise<void>;
  exists(id: FormId): Promise<boolean>;
}