/**
 * Created by stewart on 10/07/17.
 */
const map = require('./../map/map');
const isAProvince = require('./isAProvinceName');

module.exports = function (text) {
    for (var i = 0; i < map.length; i++) {
        var prov = map[i];
        if (prov.name === text) {
            return true;
        }
    }
    return false;
}
