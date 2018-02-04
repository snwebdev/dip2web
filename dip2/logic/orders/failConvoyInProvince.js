const getOrderForUnitInProvince = require('./getOrderForUnitInProvince');
const failOrder = require('./failOrder');
const isConvoyOrder = require('./isConvoyOrder');

module.exports = function (orders, province) {
    var orrder = getOrderForUnitInProvince(province, orders);
    failOrder(order);
    return;
}