const unitType = ["A", "F"];

module.exports = function (text) {
    return unitType.indexOf(text) > -1;
}