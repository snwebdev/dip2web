/**
 * Created by stewart on 10/07/17.
 */

/**
 * tests whether a piece of text is the name of a power
 *
 * @param powers - an array of text names of powers
 * @param text - text to be tested
 * @returns {boolean}
 *
 */

const powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"];

module.exports = function (text) {
    for (var i = 0; i < powers.length; i++) {
        if (powers[i] === text) {
            return true;
        }
    }
    return false;
}
