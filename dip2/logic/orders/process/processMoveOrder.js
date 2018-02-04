const orderPowerOwnsUnitInProvince = require('../legal/orderPowerOwnsUnitInProvince');
const orderedUnitTypeCorrect = require('../legal/orderedUnitTypeCorrect');
const couldMoveFromTo = require('../../map/couldMoveFromTo');
const couldMoveFromToByConvoy = require('../../map/couldMoveFromToByConvoy');
const attemptedConvoyExists = require('./attemptedConvoyExists');
const failOrder = require('../failOrder');

module.exports = function (orders, units, order) {
    order.orderPowerOwnsUnit = orderPowerOwnsUnitInProvince(units, order);
    order.orderedUnitTypeCorrect = orderedUnitTypeCorrect(units, order);
    order.couldMoveTo = couldMoveFromTo(order.unitType, order.unitLocation, order.moveToName);


    if (!order.orderPowerOwnsUnit || !order.orderedUnitTypeCorrect) {
        order.outcome = "Fails";
        return;
    }

    if (order.couldMoveTo) {
        order.legal = true;
        return;
    }

    if (couldMoveFromToByConvoy(order.unitType, order.unitLocation, order.moveToName)) {
        order.legal = true;
        order.couldMoveToByConvoy = true;
        order.outcome = "DependsOnConvoy";
        return;
    }
    order.legal = false;

    failOrder(order);
    return;
}