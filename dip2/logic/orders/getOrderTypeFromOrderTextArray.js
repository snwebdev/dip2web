/**
 * Created by stewart on 10/07/17.
 */

module.exports = function (orderTextArray) {

    var text = orderTextArray[3];
    switch (text) {
        case "-":
            return "Move";


        case "s":
            return "Support";

        case "h":
            return "Hold";

        case "c":
            return "Convoy";

        default:
            return "unidentified";
    }
}

