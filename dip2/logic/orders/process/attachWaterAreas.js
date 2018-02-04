const isMoveByConvoy = require('../isMoveByConvoy');
const attachWaterArea = require('./attachWaterArea');

module.exports = function (orders) {
    orders.forEach((order) => {
        if (isMoveByConvoy(order) || order.type === "Convoy") {
            attachWaterArea(order);
        }
    })
    return;
}