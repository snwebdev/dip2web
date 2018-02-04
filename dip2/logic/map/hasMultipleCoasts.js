const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (provinceName) {
    var prov = getProvinceFromProvinceName(provinceName);
    return prov.multipleCoasts;
}