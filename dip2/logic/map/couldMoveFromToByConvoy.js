const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');
const isCoastalFromProvinceName = require('./isCoastalFromProvinceName');
const connectedByWater = require('./connectedByWater');


module.exports = function (unitType, fromName, toName) {
    var from = getProvinceFromProvinceName(fromName);

    if (
        unitType === "Army" &&
        isCoastalFromProvinceName(fromName) &&
        isCoastalFromProvinceName(toName) &&
        connectedByWater(fromName, toName)
    ) {

        return true;
    } else {
        return false;
    }


}