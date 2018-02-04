const isAProvinceName = require('../isAProvinceName');

module.exports = function (order) {
    var location = order.unitLocation;
    return isAProvinceName(location);
}