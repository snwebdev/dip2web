module.exports = function (orders) {
    orders.forEach((order) => {

        var orderType = order.type;
        if (orderType === "Move" ||
            orderType === "Hold" ||
            orderType === "Convoy" ||
            orderType === "Support") {
            order.support = 0;
        }
    });
    return;
}