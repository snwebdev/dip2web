const isMoveToProvince = require('./isMoveToProvince');
const moveDependsOnConvoy = require('./resolve/moveDependsOnConvoy');


module.exports = function (orders, province) {
    var moveToProvinceOrders = [];
    orders.forEach((order) => {
        if (!moveDependsOnConvoy(order) &&
            order.type === "Move" &&
            isMoveToProvince(order, province) &&
            order.legal) {
            moveToProvinceOrders.push(order);
        }
    })
    return moveToProvinceOrders;
}