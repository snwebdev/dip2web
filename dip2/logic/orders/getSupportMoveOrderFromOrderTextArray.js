/**
 * Created by stewart on 28/07/17.
 */
const getMoveFromProvinceNameFromOrderTextArray = require('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');
const getSupportedToProvinceNameFromOrderTextArray = require('./getSupportedToProvinceNameFromOrderTextArray');
const getSupportedMoveUnitTypeFromOrderTextArray = require('./getSupportedMoveUnitTypeFromOrder');


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

    order.type = "SupportMove";
    order.supportedMoveUnitType = "yet to be determined"; //need to make all the orders first then come back for it
    order.supportMoveFromName = getSupportedFromProvinceNameFromOrderTextArray(orderTextArray);
    if (order.supportMoveFromName === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[4] + "\" is not a province.";
        return order;
    }
    order.supportMoveToName = getSupportedToProvinceNameFromOrderTextArray(orderTextArray);
    if (order.supportMoveToName === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[6] + "\" is not a province.";
        return order;
    }
    return order
}
