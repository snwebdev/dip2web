/**
 * Created by stewart on 10/07/17.
 */

const getOrders = require('./getOrders');
const removeBlankElementsFromArray = require("./removeBlankElementsFromArray");
const isAPower = require('./isAPower');
const getOrderTextArrayFromOrderText = require("./getOrderTextArrayFromOrderText");


const powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"];

module.exports = function (orders) {

    //var orders = getOrders(input);
    orders = removeBlankElementsFromArray(orders);
    var orderArray = [];
    var ordersArray = []

    var power = "";
    var powerOrders = []; // orders for a particular power
    var splitOrders = [];
    var lookingFor = "power"

    for (var i = 0; i < orders.length; i++) {
        var line = orders[i];
        if (isAPower(line)) {
            power = line;
            continue;
        } else {
            orderArray = getOrderTextArrayFromOrderText(power, line);
            ordersArray.push(orderArray);
        }

    }


    return ordersArray;
}
