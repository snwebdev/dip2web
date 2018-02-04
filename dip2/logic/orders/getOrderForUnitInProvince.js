module.exports = function (province, orders) {
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].unitLocation === province) {
            return orders[i];
        }
    }
    return -1;
}