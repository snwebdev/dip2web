module.exports = function (order) {
    var orderedProvinces = [];

    if (order.legal) {
        if (orderedProvinces.indexOf(order.unitLocation) === -1) {
            orderedProvinces.push(order.unitLocation);
        }
        if (orderedProvinces.indexOf(order.convoyTo) === -1) {
            orderedProvinces.push(order.convoyTo);
        }
        if (orderedProvinces.indexOf(order.convoyFrom) === -1) {
            orderedProvinces.push(order.convoyFrom);
        }
    }

    return orderedProvinces;
}