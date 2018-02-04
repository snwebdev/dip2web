const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (fromName, toName) {
    var from = getProvinceFromProvinceName(fromName);
    var fromWaters = from.waterArea;

    var to = getProvinceFromProvinceName(toName);
    var toWaters = to.waterArea;

    if (from.type === "Coastal" || to.type === "Coastal") {
        for (var i = 0; i < fromWaters; i++) {
            if (toWaters.indexOf(fromWaters[i]) > -1) {
                return true;
            }
        }
    }
    return false;
}