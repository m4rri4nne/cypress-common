type ResponseBody = {
    id: number;
    title: string;
    description: string;
    pageCount: number;
    excerpt: string;
    publishDate: string;
};
export declare class ResponseValidation {
    reponseValidation(requestBody: ResponseBody, responseBody: ResponseBody): void;
}
export {};
