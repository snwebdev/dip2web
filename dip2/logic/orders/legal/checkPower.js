/**
 * Created by stewart on 08/08/17.
 */
const orderPowerOwnsUnitInProvince = require('./orderPowerOwnsUnitInProvince');

module.exports = function (units, order) {
    if (orderPowerOwnsUnitInProvince(units, order)) {
        order.checkPower = true;
    } else {
        order.checkPower = false;
    }
    return;
}
