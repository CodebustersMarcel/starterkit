var PassengerController = (function () {
    function PassengerController(passengerService) {
        this.passengerService = passengerService;
        this.searchName = "";
        this.passengers = [];
        this.load("");
    }
    PassengerController.prototype.load = function (name) {
        var _this = this;
        this
            .passengerService.findWithName(name)
            .then(function (resp) {
            _this.passengers = resp.data;
        })
            .catch(function (resp) {
            console.error(resp);
        });
    };
    PassengerController.prototype.loadWithName = function (name) {
        this.load(name);
    };
    return PassengerController;
})();
exports.PassengerController = PassengerController;
//# sourceMappingURL=PassengerController.js.map