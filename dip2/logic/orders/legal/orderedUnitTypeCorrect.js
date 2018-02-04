const getUnitTypeFromLocationName = require('../getUnitTypeFromLocationName');

module.exports = function (units, order) {
    var orderedUnitlocation = order.unitLocation
    var orderedUnitType = order.unitType;
    var unitTypeInLocation = getUnitTypeFromLocationName(units, orderedUnitlocation);
    return orderedUnitType === unitTypeInLocation;
}