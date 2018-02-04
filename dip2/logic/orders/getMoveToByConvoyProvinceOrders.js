module.exports = function (orders, province) {
    var moveToProvinceOrders = [];
    orders.forEach((order) => {
        if (order.type === "Move" &&
            order.moveToName === province &&
            order.legal &&
            order.outcome === "DependsOnConvoy" &&
            order.hasOwnProperty("convoyChains")) {
            moveToProvinceOrders.push(order);
        }
    })
    return moveToProvinceOrders;
}