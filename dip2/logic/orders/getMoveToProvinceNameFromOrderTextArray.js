/**
 * Created by stewart on 10/07/17.
 */

const isAProvinceName = require('./isAProvinceName');

module.exports = function (orderTextArray) {

    var text = orderTextArray[4];
    if (isAProvinceName(text)) {
        return text;
    }
    return -1;

}

