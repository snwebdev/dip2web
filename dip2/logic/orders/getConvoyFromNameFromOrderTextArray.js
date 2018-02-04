const isAProvince = require('./isAProvinceName');

module.exports = function (orderTextArray) {
    var text = orderTextArray[4];
    if (isAProvince(text)) {
        return text;
    }
    return -1;
}