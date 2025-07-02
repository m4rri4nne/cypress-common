type BaseRequestOptions = {
  method: Cypress.HttpMethod;
  url: string;
  body?: any;
};

export class RequestService {
    request({ method, url, body = null }: BaseRequestOptions): Cypress.Chainable<Cypress.Response<any>>{
        return cy.request({
            method,
            url,
            body,
            failOnStatusCode: false,
        });    
    }
}
