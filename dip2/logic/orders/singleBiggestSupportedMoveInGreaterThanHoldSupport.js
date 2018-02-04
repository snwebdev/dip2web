const getSingleBiggestSupportedMoveIn = require('./getSingleBiggestSupportedMoveIn');
const getOrderForUnitInProvince = require('./getOrderForUnitInProvince');

module.exports = function (orders, province) {
    var singleBiggestMoveIn = getSingleBiggestSupportedMoveIn(orders, province);
    var moveInSupport = singleBiggestMoveIn.support;

    var hold = getOrderForUnitInProvince(province, orders);
    var holdSupport = hold.support;

    return moveInSupport > holdSupport;

}