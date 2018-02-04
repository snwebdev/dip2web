/**
 * Created by stewart on 07/07/17.
 */

var map = require('./../map/map');
var area = require('./../area');


exports.unitCouldMoveFromTo = function (unitType, fromAreaName, toAreaName) {
    var from = area.getArea(fromAreaName);


    if (unitType === "Army") {
        return from.armyNeighbour.indexOf(toAreaName) > -1;
    }

    if (unitType === "Fleet") {
        return from.fleetNeighbour.indexOf(toAreaName) > -1;
    }

}
