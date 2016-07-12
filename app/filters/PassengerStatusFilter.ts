import {Passenger} from "../entites/Passenger";
export function PassengerStatusFilter() {

    var exp = function (status:string) {

        switch (status) {
            case "A":
                return "Senator";

            case "B":
                return "Frequet Travellor";

            case "C":
                return "Miles Program";

            default:
                return "no status";

        }

    }
    return exp;
}