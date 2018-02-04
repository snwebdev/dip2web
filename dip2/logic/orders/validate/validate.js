module.exports = function (orders) {
    orders.forEach((order) => {
        validateOrder(order);
    })
}