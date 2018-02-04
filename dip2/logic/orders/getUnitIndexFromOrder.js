const getProvinceFromOrder = require('./getProvinceFromOrder');

module.exports = function (units, order) {
    var province = getProvinceFromOrder(order);

    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (unit.locationName === province) {
            return i;
        }
    }
}