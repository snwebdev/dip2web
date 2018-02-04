var getProvinceFromProvinceName = require('../../map/getProvinceFromProvinceName');
var unitTypeCanBeInProvince = require('../legal/canUnitTypeBeInProvince');

module.exports = function (orders) {
    orders.forEach((order) => {
        if (!order.rejected) {
            var unitType = order.unitType;
            var provName = order.unitLocation;

            if (!unitTypeCanBeInProvince(unitType, provName)) {
                order.rejected = true;
                order.rejectedReasonText = "You cannot have a " + unitType + " in " + provName;

            }
        }
    })
    return;
}