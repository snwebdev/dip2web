const getFullProvinceName = require('../logic/map/getFullProvinceName');

module.exports = function (units) {
    var text = "\n";
    units.forEach((unit) => {
            text += unit.powerName + ": ";

            text += unit.unitType;
            text +=  " in ";
            if (unit.move === "retreat") {
                text += getFullProvinceName(unit.retreatFrom);
                text +=  " needs to retreat or disband.";
            }

            if (unit.move === "Remain") {
                text += getFullProvinceName(unit.locationName);
                text += " remains.";
            }

            if (unit.move === "Move") {
                text += getFullProvinceName(unit.locationName);
                text += " moves to ";
                text += getFullProvinceName(unit.moveToName);
            }
            text += "\n"
        }
    )
    return text;
}