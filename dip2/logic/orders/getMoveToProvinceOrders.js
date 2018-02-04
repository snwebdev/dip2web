const getMoveToNoConvoyProvinceOrders = require('./getMoveToNoConvoyProvinceOrders');
const getMoveToByConvoyProvinceOrders = require('./getMoveToByConvoyProvinceOrders');

module.exports = function (orders, province) {
    var moveToProvinceOrders = [];
    var noConvoy = getMoveToNoConvoyProvinceOrders(orders, province);
    var convoy = getMoveToByConvoyProvinceOrders(orders, province);
    noConvoy.forEach((order) => {
        moveToProvinceOrders.push(order);
    })
    convoy.forEach((order) => {
        moveToProvinceOrders.push(order);
    })

    return moveToProvinceOrders;
}