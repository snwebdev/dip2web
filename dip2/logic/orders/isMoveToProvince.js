const hasMultipleCoasts = require('../map/hasMultipleCoasts');
const getMuliplesFromProvNameStump = require('../map/getMuliplesFromProvNameStump');

module.exports = function (order, province) {
    if (hasMultipleCoasts(province)) {
        var multiples = getMuliplesFromProvNameStump(province.substr(0, 3));

        for (var i = 0; i < multiples.length; i++) {
            if (order.legal &&
                order.type === "Move" &&
                order.moveToName === multiples[i].name) {
                return true;
            }
        }
        //move is not to one of the multiples
        return false;

    } else {
        //not multiple coasts
        return (
            order.legal &&
            order.type === "Move" &&
            order.moveToName === province)
    }


}