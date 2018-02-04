/**
 * Created by stewart on 31/07/17.
 */

const map = require('./map');

module.exports = function (provinceName) {
    for (var i = 0; i < map.length; i++) {
        if (map[i].name === provinceName) return map[i];
    }
    return -1;
}