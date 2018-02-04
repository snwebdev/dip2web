const isAMoveOrder = require('./isAMoveOrder');
const isAHoldOrder = require('./isAHoldOrder');
const isASupportMoveOrder = require('./isASupportMoveOrder');
const isASupportHoldOrder = require('./isASupportHoldOrder');
const isAConvoyOrder = require('./isAConvoyOrder');

module.exports = function(array){
    return (
        isAHoldOrder(array) ||
            isAMoveOrder(array) ||
            isASupportMoveOrder(array) ||
            isASupportHoldOrder(array) ||
            isAConvoyOrder(array)

    )
}