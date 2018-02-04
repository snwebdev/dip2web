const orderPowerOwnsUnitInProvince = require('./orderPowerOwnsUnitInProvince');
const supportedMoveFromProvinceIsOccupied = require('./supportedMoveFromProvinceIsOccupied');
const supportedUnitOrderedToMove = require('./supportedUnitOrderedToMove');
const supportingUnitCouldMovToSupportedProvince = require('./moveSupportingUnitCouldMoveToSupportedProvince');
const couldSupportMoveTo = require('../../map/couldSupportMoveTo');
module.exports = function (units, orders, order) {
    order.orderPowerOwnsUnitInProvince = orderPowerOwnsUnitInProvince(units, order);
    order.supportedMoveFromProvinceIsOccupied = supportedMoveFromProvinceIsOccupied(units, order);
    order.supportedUnitOrderedToMove = supportedUnitOrderedToMove(units, orders, order);
    order.supportingUnitCanSupportMoveToSupportedMoveToProvince = couldSupportMoveTo(order.unitType, order.unitLocation, order.supportMoveToName);

    if (
        order.orderPowerOwnsUnitInProvince &&
        order.supportedMoveFromProvinceIsOccupied &&
        order.supportedUnitOrderedToMove &&
        order.supportingUnitCanSupportMoveToSupportedMoveToProvince
    ) {
        return true;
    } else {
        return false;
    }


}