const getUnitIndexFromOrder = require('../getUnitIndexFromOrder');

module.exports = function (units, orders) {
    units.forEach((unit) => {
        unit.move = "Remain";
    });

    //just returning for now
    //return;

    //take retreat and disbands from provinces
    orders.forEach((order) => {
        var province = order.unitLocation;

        if (order.action === 'Retreat or Disband' && order.outcome !== "Succeeds") {
            for (var i = 0; i < units.length; i++) {
                var unit = units[i];
                if (unit.locationName === province && unit.move !== "Moved") {
                    unit.locationName = null;
                    unit.retreatFrom = province;
                    unit.move = "retreat";
                }
            }
        }
        if (order.type == "Move" && order.outcome === "Succeeds") {
            var unitIndex = getUnitIndexFromOrder(units, order);
            var unit = units[unitIndex];
            unit.moveToName = order.moveToName;
            unit.move = "Move";

        }
    })
    return;
}