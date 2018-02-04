const getConvoysForWaterArea = require('../getConvoysForWaterArea');

module.exports = function (convoyMove, orders) {
    var waterAreas = convoyMove.waterArea;
    var convoys = [];
    waterAreas.forEach((waterArea) => {
        var convoysForThisWaterArea = getConvoysForWaterArea(waterArea, orders);
        convoysForThisWaterArea.forEach((convoyForThisArea) => {
            convoys.push(convoyForThisArea);
        })
    })
    return convoys;
}