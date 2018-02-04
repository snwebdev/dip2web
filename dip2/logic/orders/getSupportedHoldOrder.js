const getHoldOrderFromProvinceName = require('./getHoldOrderFromProvinceName');

module.exports = function (orders, order) {

    var holdProvince = order.supportedHoldProvinceName;

    var supportedOrder = getHoldOrderFromProvinceName(orders, holdProvince);

    return supportedOrder;
}