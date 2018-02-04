const couldMoveFromTo = require('../../map/couldMoveFromTo');

module.exports = function (order) {
    order.checkMove = couldMoveFromTo(order.unitType, order.unitLocation, order.moveToName);
    return;
}