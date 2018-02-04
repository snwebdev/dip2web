const hasMultipleCoasts = require('../../map/hasMultipleCoasts');
const getMainProv = require('../../map/getMainProv');
const couldMoveFromTo = require('../../map/couldMoveFromTo');


module.exports = function (supportingProv, supportedProv) {
    var mainSupportedProv = getMainProv(supportedProv);
    var mainSupporingProv = getMainProv(supportedProv);
    return couldMoveFromTo("Army", mainSupporingProv, mainSupportedProv);
}