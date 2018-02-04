const getProvinceFromProvinceName = require('../map/getProvinceFromProvinceName');

module.exports = function (order) {
    var province = getProvinceFromProvinceName(order.unitLocation);
    return province.type === "Water";

}