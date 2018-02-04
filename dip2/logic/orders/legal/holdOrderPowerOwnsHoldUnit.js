const getPowerOfUnitFromLocationName = require('../../map/getPowerOfUnitFromLocationName');

module.exports = function (units, order) {
    var orderPower = order.power;
    var unitPower = getPowerOfUnitFromLocationName(order.unitLocation);

    return orderPower === unitPower;

}