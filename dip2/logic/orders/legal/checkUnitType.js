/**
 * Created by stewart on 08/08/17.
 */
const orderedUnitIsRightType = require('./orderedUnitIsRightType');

module.exports = function (units, order) {
    if (orderedUnitIsRightType(units, order)) {
        order.checkUnitType = true;
    } else {
        order.checkUnitType = false;
    }
    return;
}
