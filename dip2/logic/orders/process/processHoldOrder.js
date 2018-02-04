const orderPowerOwnsUnitInProvince = require('../legal/orderPowerOwnsUnitInProvince');
const orderedUnitTypeCorrect = require('../legal/orderedUnitTypeCorrect');
const failOrder = require('../failOrder');

module.exports = function (units, order) {
    order.orderPowerOwnsUnit = orderPowerOwnsUnitInProvince(units, order);
    order.orderedUnitTypeCorrect = orderedUnitTypeCorrect(units, order);

    if (order.rejected) return;

    if (
        order.orderPowerOwnsUnit &&
        order.orderedUnitTypeCorrect
    ) {
        order.legal = true;
    } else {
        order.legal = false;
        failOrder(order);
    }

    return;
}