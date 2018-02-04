const getOrderForUnitInProvince = require('./getOrderForUnitInProvince');

module.exports = function (orders, order, dependsOnOrder) {
    order.action = "Succeeds if other succeeds";
    order.dependsOn = dependsOnOrder
}