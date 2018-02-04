const isConvoy = require('./isConvoy');
const getProvinceFromProvinceName = require('../map/getProvinceFromProvinceName');


module.exports = function (seaArea, order) {
    var isConvoy = isConvoy(order);
    var province = getProvinceFromProvinceName(order.unitLocation);
    var inThisSeaArea = province.se


    if (isConvoy(order) $$
    order.unitLocation
)
}