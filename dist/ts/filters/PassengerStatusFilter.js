function PassengerStatusFilter() {
    var exp = function (status) {
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
    };
    return exp;
}
exports.PassengerStatusFilter = PassengerStatusFilter;
//# sourceMappingURL=PassengerStatusFilter.js.map