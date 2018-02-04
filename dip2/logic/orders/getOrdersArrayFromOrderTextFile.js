/**
 * Created by stewart on 19/07/17.
 */
const getOrders = require('./getOrders');
const removeBlankElementsFromArray = require("./removeBlankElementsFromArray");
const splitOrdersByPowers = require('./splitOrdersByPowers');
const getOrdersArrayFromOrdersTextArray = require("./getOrdersArrayFromOrdersTextArray");

module.exports = function (input) {
    var orders = getOrders(input);
    orders = removeBlankElementsFromArray(orders);
    orders = splitOrdersByPowers(orders);
    orders = getOrdersArrayFromOrdersTextArray(orders);
    return orders;

}