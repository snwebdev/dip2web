var getProvinceFromProvinceName = require('../../map/getProvinceFromProvinceName');

module.exports = function (unitType, provinceName) {
    var prov = getProvinceFromProvinceName(provinceName);
    if (unitType === "Army") {
        return (prov.type === "Inland" || prov.type === "Coastal");
    }
    if (unitType === "Fleet") {
        return (prov.type === "Coastal" || prov.type === "Water")
    }
    return -1;
}