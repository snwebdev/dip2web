const getMoveFromProvinceNameFromOrderTextArray = require('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getUnitLocationName = require('./getUnitLocationNameFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');

module.exports = function (orderTextArray) {
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.type = "Hold";
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    if (order.unitType === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[1] + "\" is not a unit type.";
        return order;
    }
    order.unitLocation = getUnitLocationName(orderTextArray);
    if (order.unitLocation === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[2] + "\" is not a province.";
        return order;
    }

    if (orderTextArray.length > 4){
        {
            var superflousText = "";
            for(var i = 4; i < orderTextArray.length; i++){
                superflousText += orderTextArray[i] + " ";
            }
            order.rejected = true;
            order.rejectedReasonText = "The line would be fine a valid hold order without the \""+ superflousText + "\".";
            return order;
        }
    }
    return order
}