const processHoldOrder = require('./processHoldOrder');

module.exports = function (units, orders) {
    orders.forEach((order) => {

        if (order.type === "Hold") {
            processHoldOrder(units, order);
        }
    })
}