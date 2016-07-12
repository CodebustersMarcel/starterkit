
export class Passenger{
    public bonusMiles : number;
    public firstName : string;
    public id:number;
    public name:string;
    public passengerStatus : string;

    constructor(name:string,firstName:string){
        this.name = name;
        this.firstName = firstName;
        this.bonusMiles=0;
        this.passengerStatus="A";
        this.id=6;
    }
}


