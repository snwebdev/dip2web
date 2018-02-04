const isConvoy = require('./isConvoy');

module.exports = function (waterArea, orders) {
    var convoys = [];
    orders.forEach((order) => {
        if (order.type === "Convoy" &&
            order.legal &&
            order.waterArea.indexOf(waterArea) > -1) {
            convoys.push(order);
        }
    })

    return convoys;
}