const getPowerOfUnitFromLocationName = require('../../map/getPowerOfUnitFromLocationName');
const getUnitTypeFromLocationName = require('../getUnitTypeFromLocationName');

module.exports = function (units, orders, order) {


    var supportedUnitLocation = order.supportedMoveFromName;
    var powerThatOwnsUnitInSupportedUnitLocation = getPowerOfUnitFromLocationName(units, supportedUnitLocation);
    var unitType = getUnitTypeFromLocationName(supportedUnitLocation);


    for (var i = 0; i < orders.length; i++) {
        var thisOrder = orders[i];

        if (
            thisOrder.power === powerThatOwnsUnitInSupportedUnitLocation &&
            thisOrder.type === "Move" &&
            thisOrder.unitLocation === supportedUnitLocation
        ) {
            return true;
        }
    }

    return false;
}