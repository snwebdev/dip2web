/**
 * Created by stewart on 07/07/17.
 */

const map = require('./../map/map');

module.exports = function (provinceName) {
    console.log("Army connections");

    for (let i = 0; i < map.length; i++) {
        if (map[i].name === provinceName) {
            console.log(provinceName + " army connects to...");
            map[i].armyNeighbour.forEach((armyNeighbour) => {
                console.log(armyNeighbour);
            });
            console.log("- - - - -")
            return;
        }

    }
};