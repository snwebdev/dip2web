/**
 * Created by stewart on 10/07/17.
 */

module.exports = function (orderTextArray) {
    var unitType;
    var text = orderTextArray[1].trim();
    switch (text) {
        case "A":
            return "Army"
        case "F":
            return "Fleet"
        default:
            return -1
    }
}


