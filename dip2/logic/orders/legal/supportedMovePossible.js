const couldMoveFromTo = require('../../map/couldMoveFromTo');

module.exports = function (order) {
    var unitType = order.unitType;
    var fromName = order.supportMoveFromName;
    var toName = order.supportMoveFromName;
    return couldMoveFromTo(unitType, fromName, toName);
}