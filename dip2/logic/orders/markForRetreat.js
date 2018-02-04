const getOrderForUnitInProvince = require('./getOrderForUnitInProvince');

module.exports = function (orders, province) {
    var order = getOrderForUnitInProvince(province, orders);
    order.action = "Retreat or Disband";
}