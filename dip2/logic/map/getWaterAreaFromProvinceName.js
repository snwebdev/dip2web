const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (provinceName) {
    var province = getProvinceFromProvinceName(provinceName);
    if (!province.waterArea) {
        return -1;
    } else {
        return province.waterArea;
    }

}
