/**
 * Created by stewart on 19/07/17.
 */


module.exports = function (map, provinceName) {
    for (var i = 0; i < map.length; i++) {
        var prov = map[i];
        if (map[i].name === provinceName) return prov;
    }
    return -1;

}
