/**
 * Created by stewart on 07/07/17.
 */

const map = require('./../map/map');

module.exports = function (provinceName) {
    console.log("fleet connections");

    for (let i = 0; i < map.length; i++) {
        if (map[i].name === provinceName) {
            console.log(provinceName + " fleet connects to...");
            map[i].fleetNeighbour.forEach((fleetNeighbour) => {
                console.log(fleetNeighbour);
            });
            console.log("- - - - -")
            return;
        }
    }
};



