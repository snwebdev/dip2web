module.exports = function (orders) {
    var destinations = []
    orders.forEach((order) => {
        destinations.push((order.convoyTo));
    })
    return destinations;
}