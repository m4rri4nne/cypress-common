export class ResponseValidation {
    reponseValidation(requestBody, responseBody) {
        expect(requestBody.id).to.equal(responseBody.id);
        expect(requestBody.title).to.equal(responseBody.title);
        expect(requestBody.description).to.equal(responseBody.description);
        expect(requestBody.pageCount).to.equal(responseBody.pageCount);
        expect(requestBody.excerpt).to.equal(responseBody.excerpt);
        expect(requestBody.publishDate).to.equal(responseBody.publishDate);
    }
}
