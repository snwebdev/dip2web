module.exports = function (units, orders, rejectedOrders) {
    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        if (order.type === -1) {
            orders.splice(i, 1);

        }
    }
}