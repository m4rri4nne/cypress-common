export class RequestService {
    request({ method, url, body = null }) {
        return cy.request({
            method,
            url,
            body,
            failOnStatusCode: false,
        });
    }
}
