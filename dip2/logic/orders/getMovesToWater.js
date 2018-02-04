const isWaterFromProvinceName = require('../map/isWaterFromProvinceName');

module.exports = function (orders) {
    var movesToWater = [];

    orders.forEach((order) => {
        if (order.type === "Move" && isWaterFromProvinceName(order.moveToName)) {
            movesToWater.push(order);
        }
    })
    return movesToWater;
}
