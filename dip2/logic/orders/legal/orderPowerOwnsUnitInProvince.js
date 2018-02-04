/**
 * Created by stewart on 31/07/17.
 */


module.exports = function (units, order) {
    var power = order.power;
    var provinceName = order.unitLocation;
    for (var i = 0; i < units.length; i++) {
        if (units[i].locationName === provinceName) {
            return units[i].powerName === power;
        }
    }
    return false;
}