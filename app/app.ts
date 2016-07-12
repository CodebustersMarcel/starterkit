import * as angular from 'angular';
import {Passenger} from "./entites/Passenger";
import {PassengerController} from "./controller/PassengerController";
import {PassengerService} from "./service/PassengerService";
import {PassengerStatusFilter} from "./filters/PassengerStatusFilter";

var app = angular.module('flight-app', []);

app.controller("passengerSearch", PassengerController);
app.service("passengerService",PassengerService);
app.constant("baseUrl","http://www.angular.at/api/");
app.filter("psf",PassengerStatusFilter);

