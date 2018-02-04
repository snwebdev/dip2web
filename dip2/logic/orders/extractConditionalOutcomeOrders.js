module.exports = function (orders) {
    var conditionals = [];

    orders.forEach((order) => {
        if (order.action === 'Succeeds if other succeeds') {
            conditionals.push(order);
        }
    })

    return conditionals;
}