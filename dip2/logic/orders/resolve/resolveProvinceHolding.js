const isOccupied = require('../../map/isOccupiedFromProvinceName');
const isHolding = require('../isHolding');
const moveToProvinceExists = require('../moveToProvinceExists');
const singleBiggestSupportedMoveInExists = require('../singleBiggestSupportedMoveInExists');
const singleBiggestSupportedMoveInGreaterThanHoldSupport = require('../singleBiggestSupportedMoveInGreaterThanHoldSupport');
const getSingleBiggestSupportedMoveIn = require('../getSingleBiggestSupportedMoveIn');
const failOtherMoveIns = require('../failOtherMoveIns');
const failOrder = require('../failOrder');
const failHoldInProvince = require('../failHoldInProvince');
const markForRetreat = require('../markForRetreat');
const getOrderForUnitInProvince = require('../getOrderForUnitInProvince');
const succeedHoldOrder = require('../succeedOrder');
const failAllMoveIns = require('../failAllMoveIns');
const failConvoyInProvince = require('../failConvoyInProvince');

module.exports = function (orders, province) {

    //console.log("resolving hold.................");
    var holdOrder = getOrderForUnitInProvince(province, orders);

    if (singleBiggestSupportedMoveInExists(orders, province) &&
        singleBiggestSupportedMoveInGreaterThanHoldSupport(orders, province)) {

        //singleBiggestMoveIn wins
        var winningOrder = getSingleBiggestSupportedMoveIn(orders, province);
        winningOrder.outcome = "Succeeds";

        //all other moveIns fail
        failOtherMoveIns(orders, winningOrder);

        //hold fails
        failHoldInProvince(orders, province);
        failConvoyInProvince(orders, province);

        //holding unit needs to retreat
        markForRetreat(orders, province);
    } else {
        //hold succeeds
        succeedHoldOrder(holdOrder);

        //all moveIns fail
        failAllMoveIns(orders, province);
    }

    return;
}