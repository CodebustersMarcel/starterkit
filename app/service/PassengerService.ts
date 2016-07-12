

import IHttpService = angular.IHttpService;
export class PassengerService{
    private url : string="passenger";
    constructor(private $http:IHttpService,private baseUrl:string){

    }

    findWithName(name:string){
        return this.$http.get(this.getUrl(name),{});
    }

    private getUrl(name:string){
        var url = this.baseUrl+this.url;
        return name.length>0 ? url+"?name="+name:url;
    }


}