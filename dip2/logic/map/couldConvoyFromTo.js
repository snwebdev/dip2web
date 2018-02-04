const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');
const isCoastalFromProvinceName = require('./isCoastalFromProvinceName');


module.exports = function (unitType, fromName, toName) {
    var from = getProvinceFromProvinceName(fromName);

    if (
        unitType === "Fleet" &&
        isCoastalFromProvinceName(fromName) &&
        isCoastalFromProvinceName(toName) &&
        connectedByWater(fromName, toName)
    ) {
        order.couldMoveFromToByConvoy = true;
        return true;
    } else {
        return false;
    }


}