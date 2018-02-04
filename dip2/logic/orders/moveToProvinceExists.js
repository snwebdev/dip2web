module.exports = function (orders, province) {
    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        if (
            order.type === "Move" &&
            order.moveToName === province
        ) {
            return true;
        }
    }

    return false;
}