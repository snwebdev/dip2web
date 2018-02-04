/**
 * Created by stewart on 19/07/17.
 */

const getOrderFromOrderTextArray = require("./getOrderFromOrderTextArray");
const getSupportedMoveUnitTypeFromOrder = require('./getSupportedMoveUnitTypeFromOrder');


module.exports = function (ordersTextArray) {
    var ordersArray = [];
    ordersTextArray.forEach((e) => {
        var order = getOrderFromOrderTextArray(e);
        ordersArray.push(order);
    });
    // go back over to get supported move unit type

    // NO! need to have units initised first

    // ordersArray.forEach((order) => {
    //     if(order.type === "SupportMove"){
    //         var location = order.supportMoveFromName;
    //         var supportedMoveUnitType = getSupportedMoveUnitTypeFromOrder(units,order);
    //         order.supportedMoveUnitType = supportedMoveUnitType;
    //     }
    // })
    return ordersArray;
}
