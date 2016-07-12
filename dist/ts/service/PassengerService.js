var PassengerService = (function () {
    function PassengerService($http, baseUrl) {
        this.$http = $http;
        this.baseUrl = baseUrl;
        this.url = "passenger";
    }
    PassengerService.prototype.findWithName = function (name) {
        return this.$http.get(this.getUrl(name), {});
    };
    PassengerService.prototype.getUrl = function (name) {
        var url = this.baseUrl + this.url;
        return name.length > 0 ? url + "?name=" + name : url;
    };
    return PassengerService;
})();
exports.PassengerService = PassengerService;
//# sourceMappingURL=PassengerService.js.map