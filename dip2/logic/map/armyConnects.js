/**
 * Created by stewart on 31/07/17.
 */
const getProvinceFromProvinceName = require('./getProvinceFromProvinceName');

module.exports = function (fromProvinceName, toProvinceName) {
    var prov = getProvinceFromProvinceName(fromProvinceName);
    console.log("prov=" + JSON.stringify(prov));
    console.log(toProvinceName);
    console.log(prov.armyNeighbour.indexOf(toProvinceName));

    return prov.armyNeighbour.indexOf(toProvinceName) > -1

}