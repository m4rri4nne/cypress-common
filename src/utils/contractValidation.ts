type SupportedTypes = 'string' | 'number' | 'boolean' | 'object' | 'array';
type ContractSchema = Record<string, SupportedTypes>;
export class ContractValidator {
  private schema: ContractSchema;
  constructor(schema: ContractSchema) {
    this.schema = schema;
  }
  validate(response: Record<string, any>): void {
    for (const key in this.schema) {
      const expectedType = this.schema[key];  
      // Check property exists
      expect(response, `Response should have property '${key}'`).to.have.property(key);
      const value = response[key];
      const actualType = Array.isArray(value) ? 'array' : typeof value;
      // Check type matches expected type
      expect(actualType, `Property '${key}' should be of type '${expectedType}', but got '${actualType}'`).to.equal(expectedType);
    }
  }
}