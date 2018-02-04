/**
 * Created by stewart on 31/07/17.
 */


module.exports = function (units, order) {
    var orderedUnitType = order.unitType;
    var orderedUnitLocationName = order.unitLocation
    for (var i = 0; i < units.length; i++) {
        if (units[i].locationName === orderedUnitLocationName) {
            if (units[i].unitType === orderedUnitType) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}