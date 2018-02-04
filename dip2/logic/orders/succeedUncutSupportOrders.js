const isSupportOrder = require('./isSupportOrder');

module.exports = function (orders) {
    orders.forEach((order) => {
        if (isSupportOrder(order) && order.legal) {
            order.outcome = "Succeeds";
        }
    })
    return;
}