const isConvoy = require('./isConvoy');

module.exports = function (orders) {
    var convoyLocations = [];

    orders.forEach((order) => {
        if (isConvoy(order)) convoyLocations.push(order.unitLocation);
    })
    return convoyLocations;
}