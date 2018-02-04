module.exports = function (orders, provinceName) {


    for (var i = 0; i < orders.length; i++) {
        var thisOrder = orders[i];

        if (
            thisOrder.unitLocation === provinceName &&
            thisOrder.type === "Move" &&
            thisOrder.legal
        ) {
            return thisOrder;
        }
    }
    return -1
}