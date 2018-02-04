const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (unitType, fromName, toName) {
    var from = getProvinceFromProvinceName(fromName);

    if (unitType === "Army") {
        return from.armyNeighbour.indexOf(toName) > -1
    }

    if (unitType === "Fleet") {
        return from.fleetNeighbour.indexOf(toName) > -1
    }

    return;
}