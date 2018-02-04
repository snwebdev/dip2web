module.exports = function (orders, order) {
    var first = order;
    var loop = [];
    loop.push(first);
    while (order.hasOwnProperty('dependsOn')) {

        order = order.dependsOn;
        if (order === first) return loop;
        loop.push(order);
    }
    return loop;
}