/**
 * Created by stewart on 10/07/17.
 */
var isAProvinceName = require('./isAProvinceName');
module.exports = function (orderTextArray) {
    var text = orderTextArray[6];
    if (isAProvinceName(text)) {
        return text;
    }
    return -1;
};
