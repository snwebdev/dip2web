/**
 * Created by stewart on 07/07/17.
 */

var map = require('./orders/map');

exports.getArea = function(areaName){
    for (var i = 0; i < map.length; i++){
        if (map[i].name === areaName) {
            var area = map[i];
            return map[i];
        }
    }
}

exports.isAreaName = function(text){
    for (var i = 0; i < map.length; i++){
        if (map[i].name === text) {
            return true;
        }
    }
    return false;
}

exports.isOccupied = function (areaName){
    for (var i = 0; i < map.length; i++){
        if (map[i].name === areaName) {
            if (map[i].hasOwnProperty("occupiedBy")){
                return true
            } else {
                return false;
            }
        }
    }
    return false;
}

exports.occupiedAreas = function(){
    for (var i = 0; i < map.length; i++){

    }
}
