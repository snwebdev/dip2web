const couldMoveFromTo = require('../../map/couldMoveFromTo');

module.exports = function (units, order) {
    supportingUnitLocationName = order.unitLocation;
    supportingUnitType = order.unitType;
    supportedMoveTo = order.supportMoveToName;
    console.log(order);

    return couldMoveFromTo(supportingUnitType, supportingUnitLocationName, supportedMoveTo);
}