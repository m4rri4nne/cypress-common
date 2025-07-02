type BaseRequestOptions = {
    method: Cypress.HttpMethod;
    url: string;
    body?: any;
};
export declare class RequestService {
    request({ method, url, body }: BaseRequestOptions): Cypress.Chainable<Cypress.Response<any>>;
}
export {};
