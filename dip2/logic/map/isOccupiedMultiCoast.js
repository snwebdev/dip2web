const hasMultipleCoasts = require('./hasMultipleCoasts');
const multipleCoastalIsOccupied = require('./multipleCoastalIsOccupied');

module.exports = function (units, provinceName) {


    for (var i = 0; i < units.length; i++) {
        if (units[i].locationName === provinceName) {
            return true;
        }
    }
    ;


    return false;

}