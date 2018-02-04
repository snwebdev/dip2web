const getMoveFromProvinceNameFromOrderTextArray = require('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');
const getLocationNameFromOrderTextArray = require('./getLocationFromOrderTextArray');
const getConvoyFromNameFromOrderTextArray = require('./getConvoyFromNameFromOrderTextArray');
const getConvoyToNameFromOrderTextArray = require('./getConvoyToNameFromOrderTextArray');

module.exports = function (orderTextArray) {
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.type = "Convoy";
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    if (order.unitType === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[1] + "\" is not a unit type.";
        return order;
    }
    order.unitLocation = getLocationNameFromOrderTextArray(orderTextArray);
    if (order.unitLocation === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[2] + "\" is not a province.";
        return order;
    }
    order.convoyFrom = getConvoyFromNameFromOrderTextArray(orderTextArray);
    if (order.convoyFrom === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[4] + "\" is not a province.";
        return order;
    }
    order.convoyTo = getConvoyToNameFromOrderTextArray(orderTextArray);
    if (order.convoyTo === -1){
        order.rejected = true;
        order.rejectedReasonText = "\""+ orderTextArray[6] + "\" is not a province.";
        return order;
    }

    if (orderTextArray.length > 7){
        {
            var superflousText = "";
            for(var i = 7; i < orderTextArray.length; i++){
                superflousText += orderTextArray[i] + " ";
            }
            order.rejected = true;
            order.rejectedReasonText = "The order would be fine without \""+ superflousText + "\".";
            return order;
        }
    }

    return order
}