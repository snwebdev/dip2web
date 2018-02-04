/**
 * Created by stewart on 08/08/17.
 */
const checkPower = require('./checkPower');
const checkUnitType = require('./checkUnitType');
const checkMove = require('./checkMove');
const checkSupportHold = require('./checkSupportHoldOrder');

module.exports = function (units, orders, order) {


    checkPower(units, order);
    checkUnitType(units, order);
    switch (order.orderType) {
        case "Hold" :
            checkHold(units, order);
            break
        case "Move" :
            checkMove(order);
            break;
        case"SupportHold":
            checkSupportHoldOrder(units, order);
            break;
    }


    return;
}