var orderRelatedToProvince = require('./orderRelatedToProvince');

module.exports = function (orders, province) {
    var relatedOrders = [];
    orders.forEach((order) => {
        if (
            orderRelatedToProvince(order, province)
        // relatedOrders.indexOf(order) === -1
        ) {
            relatedOrders.push(order);
        }
    })

    return relatedOrders;
}