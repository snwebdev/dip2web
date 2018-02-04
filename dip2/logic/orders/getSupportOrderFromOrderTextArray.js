const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');
const getSupportOrderTypeFromOrderTextArray = require('./getSupportOrderTypeFromOrderTextArray');
const getSupportMoveOrderFromOrderTextArray = require('./getSupportMoveOrderFromOrderTextArray');
const getSupportHoldOrderFromOrderTextArray = require('./getSupportHoldOrderFromOrderTextArray');

module.exports = function (orderTextArray) {
    order = {};

    var supportOrderType = getSupportOrderTypeFromOrderTextArray(orderTextArray);

    switch (supportOrderType) {
        case 'Move':
            order = getSupportMoveOrderFromOrderTextArray(orderTextArray);
            break;
        case 'Hold':
            order = getSupportHoldOrderFromOrderTextArray(orderTextArray);
            break;
        default:
            order = -1
    }

    return order
}