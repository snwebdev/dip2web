const getOrdersRelatedToProvince = require('../getOrdersRelatedToProvince');

module.exports = function (orders, provinces) {

    var ordersByProvince = [];
    provinces.forEach((province) => {
        var provinceOrders = getOrdersRelatedToProvince(orders, province);

        ordersByProvince.push([province, provinceOrders]);
    })

    return ordersByProvince;
}