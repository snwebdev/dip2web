const checkOrder = require('./checkOrder');

module.exports = function (units, orders) {
    orders.forEach((order) => {
        checkOrder(units, orders, order);
    });
    return;
}