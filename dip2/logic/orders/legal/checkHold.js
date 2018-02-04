const isOccupiedFromProvinceName = require('../../map/isOccupiedFromProvinceName');
const supportingUnitCouldMoveToSupportedUnitProvince = require('./supportingUnitCouldMoveToSupportedUnitProvince')

module.exports = function (units, order) {
    //check province holds a unit
    order.supportedProvinceIsOccupied = (isOccupiedFromProvinceName(units, order.unitLocation));
    order.supportingUnitCouldMoveToSupportedHoldProvince = supportingUnitCouldMoveToSupportedUnitProvince(units, order);

    return;

}