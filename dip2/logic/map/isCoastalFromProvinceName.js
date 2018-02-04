const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (provinceName) {
    var province = getProvinceFromProvinceName(provinceName);
    return province.type === "Coastal"
}