const isMoveOrder = require('./isMoveOrder');
const getMoveFrom = require('./getMoveFrom');
const getMoveTo = require('./getMoveTo');

module.exports = function (orders, from, to) {
    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        if (isMoveOrder(order) &&
            getMoveFrom(order) === from &&
            getMoveTo(order) === to
        ) {
            return true;
        }
    }
    return false;
}