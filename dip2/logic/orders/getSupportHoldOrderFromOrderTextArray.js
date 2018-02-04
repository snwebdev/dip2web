/**
 * Created by stewart on 31/07/17.
 */
/**
 * Created by stewart on 28/07/17.
 */
const getMoveFromProvinceNameFromOrderTextArray = require('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');
const getSupportedToProvinceNameFromOrderTextArray = require('./getSupportedToProvinceNameFromOrderTextArray');
const getSupportedHoldProvinceNameFromOrderTextArray = require('./getSupportedHoldProvinceNameFromOrderTextArray');


module.exports = function (orderTextArray) {
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    if (order.unitType === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[1] + "\" is not a unit type.";
        return order;
    }
    order.unitLocation = getMoveFromProvinceNameFromOrderTextArray(orderTextArray);
    if (order.unitLocation === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[2] + "\" is not a province.";
        return order;
    }

    order.type = "SupportHold";
    order.supportedHoldProvinceName = getSupportedHoldProvinceNameFromOrderTextArray(orderTextArray);
    return order
}
