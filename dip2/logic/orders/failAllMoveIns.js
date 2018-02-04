const failOrder = require('./failOrder');

module.exports = function (orders, province) {
    orders.forEach((order) => {
        if (
            order.type === "Move" &&
            order.moveToName === province
        ) {
            failOrder(order);
        }
    })
    return;
}