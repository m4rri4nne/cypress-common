import bookContract from '../contracts/bookContracts.json';
export class ContractValidator {
    constructor(schema) {
        this.schema = schema;
    }
    validate(response) {
        for (const key in this.schema) {
            const expectedType = this.schema[key];
            expect(response).to.have.property(key);
        }
    }
}
export const bookContractValidator = new ContractValidator(bookContract);
