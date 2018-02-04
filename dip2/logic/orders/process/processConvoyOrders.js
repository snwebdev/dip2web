const processConvoyOrder = require('./processConvoyOrder');

module.exports = function (units, orders) {
    orders.forEach((order) => {

        if (order.type === "Convoy") {
            processConvoyOrder(units, order);
        }
    })
    return;
}