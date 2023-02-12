

export interface ApiInterface{
    post: (url:string, data:any) => any;
    get: (url:string, data:any) => any;
    put: (url:string, data:any) => any;
    delete: (url:string, data:any) => any;
}