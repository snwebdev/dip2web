/**
 * Created by stewart on 19/07/17.
 */

module.exports = function (units, powerName, unitType, provinceName) {
    for (var i = 0; i < units.length; i++) {
        var e = units[i];
        if ((e[0] === powerName) && (e[1] === unitType) && e[2] === provinceName) {
            return true;
        }

    }
    return false;
}