/**
 * Created by stewart on 10/07/17.
 */

const isAProvinceName = require('./isAProvinceName');

module.exports = function (orderTextArray) {

    var text = orderTextArray[5];

    if (isAProvinceName(text)) {
        return text;
    }

    return -1;
}

