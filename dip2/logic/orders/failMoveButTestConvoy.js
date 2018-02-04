const isCoastalFromProvinceName = require('../map/isCoastalFromProvinceName');
const failOrder = require('./failOrder');
const couldMoveFromTo = require('../map/couldMoveFromTo');

module.exports = function (orders, order) {
    var from = order.unitLocation;
    var to = order.moveToName;


    if (isCoastalFromProvinceName(from) &&
        isCoastalFromProvinceName(to) &&
        !couldMoveFromTo(from, to)) {
        order.outcome = "Fails if no convoy";
        delete order.action;
        delete order.dependsOn;

    } else {
        failOrder(order);
    }


}