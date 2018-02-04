const checkSupportHold = require('../legal/checkSupportHoldOrder');
const succeedOrder = require('./succeedOrder');
const failOrder = require('../failOrder');

module.exports = function (units, orders) {
    orders.forEach((order) => {
        if (order.type === "SupportHold") {
            if (checkSupportHold(units, orders, order)) {
                order.legal = true;
            } else {
                order.legal = false;
                failOrder(order);
            }
        }
    })
    return;
}