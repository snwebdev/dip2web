const getWaterAreaFromProvinceName = require('../../map/getWaterAreaFromProvinceName');

module.exports = function (order) {
    var provinceName = order.unitLocation;
    var waterArea = getWaterAreaFromProvinceName(provinceName);
    if (waterArea !== -1) {
        order.waterArea = waterArea;
    }
    return;
}