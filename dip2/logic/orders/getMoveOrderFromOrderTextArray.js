/**
 * Created by stewart on 10/07/17.
 */

const getMoveFromProvinceNameFromOrderTextArray = require('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');

module.exports = function (orderTextArray) {
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.type = "Move";
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
    order.moveToName = getMoveToProvinceNameFromOrderTextArray(orderTextArray);
    if (order.moveToName === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[4] + "\" is not a province.";
        return order;
    }
    if (orderTextArray.length > 5){
        {
            var superflousText = "";
            for(var i = 5; i < orderTextArray.length; i++){
                superflousText += orderTextArray[i] + " ";
            }
            order.rejected = true;
            order.rejectedReasonText = "The line would be fine a valid hold order without the \""+ superflousText + "\".";
            return order;
        }
    }
    return order
}