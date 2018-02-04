const failOrder = require('./failOrder');

module.exports = function (orders, succesfullMoveIn) {
    orders.forEach((order) => {
        if (
            order !== succesfullMoveIn &&
            order.type === "Move" &&
            order.moveToName === succesfullMoveIn.moveToName
        ) {
            failOrder(order);
        }
    })
    return;
}