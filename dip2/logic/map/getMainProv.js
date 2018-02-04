const hasMultipleCoasts = require('./hasMultipleCoasts');

module.exports = function (provinceName) {
    if (!hasMultipleCoasts(provinceName)) {
        return provinceName
    } else {
        return provinceName.substr(0, 3)
    }

}