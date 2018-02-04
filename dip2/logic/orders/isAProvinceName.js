/**
 * Created by stewart on 10/07/17.
 */

const map = require('./../map/map');

module.exports = function (text) {
    for (var i = 0; i < map.length; i++) {
        if (map[i].name === text) {
            return true;
        }
    }
    return false;
}
