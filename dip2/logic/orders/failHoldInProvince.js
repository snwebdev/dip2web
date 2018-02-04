const getOrderForUnitInProvince = require('./getOrderForUnitInProvince');
const failOrder = require('./failOrder');

module.exports = function (orders, province) {
    var holdOrder = getOrderForUnitInProvince(province, orders);
    failOrder(holdOrder);
    return;
}