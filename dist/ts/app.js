var angular = require('angular');
var PassengerController_1 = require("./controller/PassengerController");
var PassengerService_1 = require("./service/PassengerService");
var PassengerStatusFilter_1 = require("./filters/PassengerStatusFilter");
var app = angular.module('flight-app', []);
app.controller("passengerSearch", PassengerController_1.PassengerController);
app.service("passengerService", PassengerService_1.PassengerService);
app.constant("baseUrl", "http://www.angular.at/api/");
app.filter("psf", PassengerStatusFilter_1.PassengerStatusFilter);
//# sourceMappingURL=app.js.map