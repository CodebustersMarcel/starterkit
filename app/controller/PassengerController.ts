import {Passenger} from "../entites/Passenger";
import {PassengerService} from "../service/PassengerService";
export class PassengerController {




    searchName:string="";

    constructor(private passengerService:PassengerService) {
        this.load("");
    }

    passengers:Array<Passenger> = [];

    load(name:string) {



        this
            .passengerService.findWithName(name)
            .then(resp=> {
                this.passengers = <any> resp.data;
            })
            .catch(resp=> {
                console.error(resp);
            });
    }

    loadWithName(name:string){
        this.load(name);
    }

}
