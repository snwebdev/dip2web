const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (supportingUnitType, supportingProvince, supportedMoveToProvince) {
    var supportedMoveToProvinceStump = supportedMoveToProvince.substr(0, 3)
    var from = getProvinceFromProvinceName(supportingProvince);

    if (supportingUnitType === "Army") {
        return from.armyNeighbour.indexOf(supportedMoveToProvinceStump) > -1
    }

    if (supportingUnitType === "Fleet") {
        return from.fleetNeighbour.indexOf(supportedMoveToProvinceStump) > -1
    }

    return;
}