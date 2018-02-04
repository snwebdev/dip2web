const getSupportedOrder = require('../getSupportedOrder');
const isSupportOrder = require('../isSupportOrder');

module.exports = function (orders) {
    orders.forEach((order) => {
        if (
            isSupportOrder(order) &&
            (order.legal || order.outcome === "Succeeds") &&
            order.cut !== true
        ) {
            var supportedOrder = getSupportedOrder(orders, order);
            supportedOrder.support++;

        }

    })
}