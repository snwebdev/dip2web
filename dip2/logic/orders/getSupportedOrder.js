const getSupportedHoldOrder = require('./getSupportedHoldOrder');
const getSupportedMoveOrder = require('./getSupportedMoveOrder');

module.exports = function (orders, order) {
    var supportedOrder;

    if (order.type === "SupportMove") {
        supportedOrder = getSupportedMoveOrder(orders, order);

    }

    if (order.type === "SupportHold") {
        supportedOrder = getSupportedHoldOrder(orders, order);
    }

    return supportedOrder;
}