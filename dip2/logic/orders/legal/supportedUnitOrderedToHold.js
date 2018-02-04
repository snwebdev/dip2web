const getPowerOfUnitFromLocationName = require('../../map/getPowerOfUnitFromLocationName');

module.exports = function (units, orders, order) {


    var supportedUnitLocation = order.supportedHoldProvinceName;
    var powerThatOwnsUnitInSupportedUnitLocation = getPowerOfUnitFromLocationName(units, supportedUnitLocation);


    for (var i = 0; i < orders.length; i++) {
        var thisOrder = orders[i];

        if (
            thisOrder.power === powerThatOwnsUnitInSupportedUnitLocation &&
            thisOrder.type === "Hold" &&
            thisOrder.unitLocation === supportedUnitLocation
        ) {
            return true;
        }
    }

    return false;
}