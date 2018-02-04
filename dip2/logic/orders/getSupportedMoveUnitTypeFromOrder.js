/**
 * Created by stewart on 08/08/17.
 */
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');
const getUnitTypeFromLocationName = require('./getUnitTypeFromLocationName');


module.exports = function (units, order) {
    var supportedUnitLocation = order.supportMoveFromName;
    if (supportedUnitLocation === -1) return -1;
    return getUnitTypeFromLocationName(units, supportedUnitLocation);


}
