const placeUnit = require("../map/placeUnit");

module.exports = function (units, orders) {

    orders.forEach((order) => {
        if (!order.rejected) {
            placeUnit(units, order.power, order.unitType, order.unitLocation);
        }
    })

    return units;
}