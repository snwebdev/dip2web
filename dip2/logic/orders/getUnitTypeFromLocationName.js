module.exports = function (units, locationName) {
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (unit.locationName === locationName) return unit.unitType;
    }
    return -1;
}