module.exports = function (order) {
    var orderedProvinces = [];

    if (order.legal) {
        if (orderedProvinces.indexOf(order.unitLocation) === -1) {
            orderedProvinces.push(order.unitLocation);
        }
        if (orderedProvinces.indexOf(order.supportMoveFromName) === -1) {
            orderedProvinces.push(order.supportMoveFromName);
        }
        if (orderedProvinces.indexOf(order.supportToFromName) === -1) {
            orderedProvinces.push(order.supportMoveToName);
        }
    }

    return orderedProvinces;
}