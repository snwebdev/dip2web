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
const failAllMoveIns = require('../failAllMoveIns');
var succeedOrder = require('../succeedOrder');

module.exports = function (units, orders, province, provinceOrders) {

    // console.log("resolving empty province.................");

    if (singleBiggestSupportedMoveInExists(orders, province)) {
        //singleBiggestMoveIn wins
        var winningOrder = getSingleBiggestSupportedMoveIn(orders, province);
        //winningOrder.outcome = "Succeeds";
        succeedOrder(winningOrder);

        //all other moveIns fail
        failOtherMoveIns(orders, winningOrder);
    } else {
        // all moveIns fail
        failAllMoveIns(orders, province);

    }


    return;
}