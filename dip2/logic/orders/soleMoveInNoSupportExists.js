const getMoveToProvinceOrders = require('./getMoveToProvinceOrders');

module.exports = function (orders, province) {
    var moveToProvinceOrders = getMoveToProvinceOrders(orders, province);
    return moveToProvinceOrders.length === 1;

}