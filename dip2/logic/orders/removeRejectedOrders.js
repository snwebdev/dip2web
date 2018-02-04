var removeUnitFromLocationName = require('../map/removeUnitFromLocationName');

module.exports = function (units, orders, rejectedOrders) {
    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        if (order.rejected) {
            orders.splice(i, 1);
            rejectedOrders.push(order);
            removeUnitFromLocationName(units, order.unitLocation);

        }
    }
    return;
}