const orderPowerOwnsUnitInProvince = require('../legal/orderPowerOwnsUnitInProvince');
const orderedUnitTypeCorrect = require('../legal/orderedUnitTypeCorrect');
const couldMoveFromTo = require('../../map/couldMoveFromTo');
const inWater = require('../orderedUnitInWater');


module.exports = function (units, order) {
    order.orderPowerOwnsUnit = orderPowerOwnsUnitInProvince(units, order);
    order.orderedUnitTypeCorrect = orderedUnitTypeCorrect(units, order);
    order.convoyingCouldMoveToConvoyFrom = couldMoveFromTo(order.unitType, order.unitLocation, order.convoyFrom);
    order.convoyingCouldMoveToConvoyTo = couldMoveFromTo(order.unitType, order.unitLocation, order.convoyTo);
    order.convoyedCouldMoveToConvoying = couldMoveFromTo(order.unitType, order.convoyFrom, order.unitLocation);
    order.inWater = inWater(order);
    const failOrder = require('../failOrder');


    if (
        order.orderPowerOwnsUnit &&
        order.orderedUnitTypeCorrect &&
        order.convoyingCouldMoveToConvoyFrom &&
        order.convoyingCouldMoveToConvoyTo &&
        order.inWater
    ) {
        order.legal = true;

    } else {
        order.legal = false;
        failOrder(order);
    }

    return;
}