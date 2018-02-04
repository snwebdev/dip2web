/**
 * returns an array of ordersText for given power
 */

const isAPower = require('./isAPower');

module.exports = function (power, ordersTextArray) {
    var ordersText = [];
    for (var i = 0; i < ordersTextArray.length; i++) {
        var line = ordersTextArray[i];
        if (line === power) {
            var j = i + 1;
            while (j < ordersTextArray.length) {
                line = ordersTextArray[j];
                if (!isAPower(line)) {
                    ordersText.push(line);
                }
                j++;
            }
            return ordersText;
        }
    }
    return -1;
}
