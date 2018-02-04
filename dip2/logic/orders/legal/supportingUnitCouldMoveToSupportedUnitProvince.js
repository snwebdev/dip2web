const couldMoveFromTo = require('../../map/couldMoveFromTo');

module.exports = function (units, order) {
    supportingUnitLocationName = order.unitLocation;
    supportingUnitType = order.unitType;
    supportedUnitLocationName = order.supportedHoldProvinceName;
    console.log(order);

    return couldMoveFromTo(supportingUnitType, supportingUnitLocationName, supportedUnitLocationName);
}