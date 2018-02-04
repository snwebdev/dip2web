const orderPowerOwnsUnitInProvince = require('./orderPowerOwnsUnitInProvince');
const supportedHoldProvinceIsOccupied = require('./supportedHoldProvinceIsOccupied');
const supportedUnitOrderedToHold = require('./supportedUnitOrderedToHold');

module.exports = function (units, orders, order) {
    order.orderPowerOwnsUnitInProvince = orderPowerOwnsUnitInProvince(units, order);
    order.supportedHoldProvinceIsOccupied = supportedHoldProvinceIsOccupied(units, order);
    order.supportedUnitOrderedToHold = supportedUnitOrderedToHold(units, orders, order);

    if (
        order.orderPowerOwnsUnitInProvince &&
        order.supportedHoldProvinceIsOccupied &&
        order.supportedUnitOrderedToHold
    ) {
        return true;
    } else {
        return false
    }


}