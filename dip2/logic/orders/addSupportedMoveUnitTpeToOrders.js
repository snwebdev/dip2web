const getSupportedMoveUnitTypeFromOrder = require('./getSupportedMoveUnitTypeFromOrder');

module.exports = function (units, orders) {
    orders.forEach((order) => {
        if (order.type === "SupportMove") {
            var location = order.supportMoveFromName;
            var supportedMoveUnitType = getSupportedMoveUnitTypeFromOrder(units, order);
            order.supportedMoveUnitType = supportedMoveUnitType;
        }
    })
    return;
}