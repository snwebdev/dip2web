const isOccupiedFromProvinceName = require('../../map/isOccupiedFromProvinceName');

module.exports = function (units, order) {
    var locationName = order.supportMoveFromName;

    return isOccupiedFromProvinceName(units, locationName);
}