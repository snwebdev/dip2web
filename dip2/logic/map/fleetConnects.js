/**
 * Created by stewart on 31/07/17.
 */
const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (fromProvinceName, toProvinceName) {
    var prov = getProvinceFromProvinceName(fromProvinceName);

    return prov.fleetNeighbour.indexOf(toProvinceName) > -1

}