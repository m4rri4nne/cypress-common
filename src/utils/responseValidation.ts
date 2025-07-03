type ResponseBody = {
    id: number, 
    title: string,
    description: string, 
    pageCount: number, 
    excerpt: string, 
    publishDate: string 
}

export class ResponseValidation{
    responseValidation(requestBody: ResponseBody, responseBody: ResponseBody): void{
    for (const key in requestBody) {
            // Check that the property exists in the response
            expect(responseBody, `Response should have property '${key}'`).to.have.property(key);
            // Check that values match
            expect(responseBody[key as keyof ResponseBody], `Property '${key}' should match`).to.equal(requestBody[key as keyof ResponseBody]);
        }
    }
}