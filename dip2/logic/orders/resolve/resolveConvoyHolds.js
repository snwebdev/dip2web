const getConvoys = require('./getConvoys');
const resolveProvinceHolding = require('./resolveProvinceHolding');
const getMovesToProvince = require('../getMovesToProvince');

module.exports = function (orders) {
    var convoys = getConvoys(orders);

    convoys.forEach((order) => {
        var province = order.unitLocation;
        var movesToProvince = getMovesToProvince(orders, province)
        resolveProvinceHolding(orders, province, movesToProvince);
    })
    return;
}