import bookContract from '../contracts/bookContracts.json';

type ContractSchema = Record<number, 'string' | 'string' | 'number' | 'string' | 'string'>;

export class ContractValidator {
  private schema: ContractSchema;

  constructor(schema: ContractSchema) {
    this.schema = schema;
  }

  validate(response: Record<string, any>): void {
    for (const key in this.schema) {
      const expectedType = this.schema[key];
      expect(response).to.have.property(key);
    }
  }
}

export const bookContractValidator = new ContractValidator(bookContract);
