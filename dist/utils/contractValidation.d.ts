type ContractSchema = Record<number, 'string' | 'string' | 'number' | 'string' | 'string'>;
export declare class ContractValidator {
    private schema;
    constructor(schema: ContractSchema);
    validate(response: Record<string, any>): void;
}
export declare const bookContractValidator: ContractValidator;
export {};
