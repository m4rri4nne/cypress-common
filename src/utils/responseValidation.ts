type ResponseBody = {
    id: number, 
    title: string,
    description: string, 
    pageCount: number, 
    excerpt: string, 
    publishDate: string 
}

export class ResponseValidation{
    reponseValidation(requestBody: ResponseBody, responseBody: ResponseBody): void{
        expect(requestBody.id).to.equal(responseBody.id);
        expect(requestBody.title).to.equal(responseBody.title);
        expect(requestBody.description).to.equal(responseBody.description);
        expect(requestBody.pageCount).to.equal(responseBody.pageCount);
        expect(requestBody.excerpt).to.equal(responseBody.excerpt);
        expect(requestBody.publishDate).to.equal(responseBody.publishDate);
    }
}