export class JsonResponse{
    data: any;
    errors:any;
    meta: any;

    constructor(data:any=null,errors:any=null,meta:any=null){
        this.data=data;
        this.errors=errors;
        this.meta = meta;
    }
}