/**
 * Created by stewart on 10/07/17.
 */
// takes ordersTextArray and returns the first power encountered
// powers is an array of strings representing the name of game powers
// ordersTextArray is an array of lins from the orders.txt file where a line
// is either the name of a power indicating th
//at the orders that follow ar made by that power,
// or an order isued by a power named above

/**
 *
 * @param powers
 * @param ordersTextArray
 *
 **/

const isAPower = require('./isAPower');


module.exports = function (powers, ordersTextArray) {
    for (var i = 0; i < ordersTextArray.length; i++) {
        var line = ordersTextArray[i];
        if (isAPower(powers, line)) {
            return line;
        }
    }
    return -1;

}
