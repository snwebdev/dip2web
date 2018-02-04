const getFullProvinceName = require('../map/getFullProvinceName');

module.exports = function (units) {
    units.forEach((unit) => {
            var text = unit.powerName + ": ";

            text = text + unit.unitType;
            text = text + " in ";
            if (unit.move === "retreat") {
                text = text + getFullProvinceName(unit.retreatFrom);
                text = text + " needs to retreat or disband.";
            }

            if (unit.move === "Remain") {
                text = text + getFullProvinceName(unit.locationName);
                text = text + " remains.";
            }

            if (unit.move === "Move") {
                text = text + getFullProvinceName(unit.locationName);
                text = text + " moves to ";
                text = text + getFullProvinceName(unit.moveToName);
            }
            console.log(text);
        }
    )
    return;
}