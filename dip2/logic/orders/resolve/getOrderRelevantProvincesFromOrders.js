const getOrderRelevantProvincesFromHoldOrder = require('./getOrderRelevantProvincesFromHoldOrder');
const getOrderRelevantProvincesFromMoveOrder = require('./getOrderRelevantProvincesFromMoveOrder');
const getOrderRelevantProvincesFromSupportMoveOrder = require('./getOrderRelevantProvincesFromSupportMoveOrder');
const getOrderRelevantProvincesFromSupportHoldOrder = require('./getOrderRelevantProvincesFromSupportHoldOrder');
const getOrderRelevantProvincesFromConvoyOrder = require('./getOrderRelevantProvincesFromConvoyOrder');
module.exports = function (orders) {
    var orderedProvinces = [];
    var newOrders;


    orders.forEach((order) => {

        newOrders = [];
        switch (order.type) {

            case "Hold" :
                orders = getOrderRelevantProvincesFromHoldOrder(order);
                newOrders.push(orders);
                break;
            case "SupportHold" :
                orders = getOrderRelevantProvincesFromSupportHoldOrder(order);
                newOrders = (orders);
                break;
            case "Move" :
                orders = getOrderRelevantProvincesFromMoveOrder(order);
                newOrders = (orders);
                break;
            case "SupportMove" :
                orders = getOrderRelevantProvincesFromSupportMoveOrder(order);
                newOrders = (orders);
                break;
            case "Convoy" :
                // sort this
                orders = getOrderRelevantProvincesFromConvoyOrder(order);
                newOrders = (orders);
                break;

        }


        newOrders.forEach((newOrder) => {

            if (orderedProvinces.indexOf(newOrder) === -1) {
                orderedProvinces.push(newOrder);
            }
        })

    })


    return orderedProvinces;
}