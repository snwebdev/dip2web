/**
 * Created by stewart on 10/07/17.
 */

const getOrderTypeFromOrdersTextArray = require('./getOrderTypeFromOrderTextArray');
const getMoveOrderFromOrderTextArray = require('./getMoveOrderFromOrderTextArray');
const getHoldOrderFromOrderTextArray = require('./getHoldOrderFromOrderTextArray');
const getSupportOrderFromOrderTextArray = require('./getSupportOrderFromOrderTextArray');
const makeOrderTextFromOrderTextArray = require('./makeOrderTextFromOrderTextArray');
const getConvoyOrderFromOrderTextArray = require('./getConvoyOrderFromOrderTextaAray');
const getUnidentifiedOrderFromOrderTextArray = require('./validate/getUnidentifiedOrderFromOrderTextArray');


module.exports = function (orderTextArray) {
    order = {};

    // order.power = getPowerFromOrderTextArray(orderTextArray);
    orderType = getOrderTypeFromOrdersTextArray(orderTextArray);
    switch (orderType) {
        case "Move":
            order = getMoveOrderFromOrderTextArray(orderTextArray);
            break;
        case "Hold":
            order = getHoldOrderFromOrderTextArray(orderTextArray);
            break;
        case "Support":
            order = getSupportOrderFromOrderTextArray(orderTextArray);
            break;
        case "Convoy":
            order = getConvoyOrderFromOrderTextArray(orderTextArray);
            break;
        case "unidentified":
            order = getUnidentifiedOrderFromOrderTextArray(orderTextArray);


    }
    order.orderText = makeOrderTextFromOrderTextArray(orderTextArray);
    order.resolved = false;
    return order;
}
