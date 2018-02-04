const getMoveOrderFromProvinceName = require('./getMoveOrderFromProvinceName');

module.exports = function (orders, order) {

    var moveProvince = order.supportMoveFromName;

    var supportedOrder = getMoveOrderFromProvinceName(orders, moveProvince);

    return supportedOrder;
}