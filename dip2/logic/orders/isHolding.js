const getOrderForUnitInProvince = require('./getOrderForUnitInProvince');

module.exports = function (province, orders) {
    var order = getOrderForUnitInProvince(province, orders);
    if (order.type !== "Move") {
        return true;
    }
    return false;
}