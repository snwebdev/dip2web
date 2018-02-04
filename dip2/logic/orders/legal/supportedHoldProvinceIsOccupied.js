const isOccupiedFromProvinceName = require('../../map/isOccupiedFromProvinceName');

module.exports = function (units, order) {
    var locationName = order.supportedHoldProvinceName;

    return isOccupiedFromProvinceName((locationName));
}