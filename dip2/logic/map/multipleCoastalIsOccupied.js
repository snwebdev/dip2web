const getMuliplesFromProvNameStump = require('./getMuliplesFromProvNameStump');
const isOccupiedMultiCoast = require('./isOccupiedMultiCoast');

module.exports = function (units, provinceName) {
    var provNameStump = provinceName.substr(0, 3);
    var multiples = getMuliplesFromProvNameStump(provNameStump);

    for (var i = 0; i < multiples.length; i++) {
        if (isOccupiedMultiCoast(units, multiples[i].name)) {
            return true;
        }
    }
    return false;
}