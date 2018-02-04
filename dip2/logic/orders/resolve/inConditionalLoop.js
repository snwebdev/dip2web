module.exports = function (orders, order) {
    var first = order;
    while (order.hasOwnProperty('dependsOn')) {
        order = order.dependsOn;
        if (order === first) {
            return true;
        } else {

        }

    }
    return false;
}