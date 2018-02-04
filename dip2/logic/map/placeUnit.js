/**
 * Created by stewart on 19/07/17.
 */


module.exports = function (units, powerName, unitType, locationName) {
    var element = {powerName: powerName, unitType: unitType, locationName: locationName};
    for (var i = 0; i < units.length; i++) {
        if (units[i][0] === locationName) {
            units[i] = element;
            return;
        }
    }
    units.push(element);
    return units;
}