module.exports = function (orders, order) {
    var location = order.unitLocation;
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].type === "Convoy" &&
            orders[i].convoyFrom === location) {
            return true;
        }
    }
    return false;

}