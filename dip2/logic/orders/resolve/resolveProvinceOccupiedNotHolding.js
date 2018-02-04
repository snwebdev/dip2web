const singleBiggestSupportedMoveInExists = require('../singleBiggestSupportedMoveInExists');
const getSingleBiggestSupportedMoveIn = require('../getSingleBiggestSupportedMoveIn');
var succeedOrder = require('../succeedOrder');
const failOtherMoveIns = require('../failOtherMoveIns');
var markForRetreat = require('../markForRetreat');
const soleMoveInNoSupportExist = require('../soleMoveInNoSupportExists');
const getOrderForUnitInProvince = require('../getOrderForUnitInProvince');
const getSoleMoveInNoSupport = require('../getSoleMoveInNoSupport');
const markSucceedsIfOtherSucceeds = require('../markSucceedsIfOtherSucceeds');
const failOrder = require('../failOrder');

module.exports = function (units, orders, province) {
    if (singleBiggestSupportedMoveInExists(orders, province)) {
        var singleBiggestSupportedMoveIn = getSingleBiggestSupportedMoveIn(orders, province);
        var singleBiggestSupportedMoveInSupport = singleBiggestSupportedMoveIn.support;

        //check if moveIN from MoveTo
        var provinceOrder = getOrderForUnitInProvince(province, orders);
        if (provinceOrder.moveToName === singleBiggestSupportedMoveIn.unitLocation) {
            if (provinceOrder.support > singleBiggestSupportedMoveIn.support) {
                //provinceOrderWins
                succeedOrder(provinceOrder);

                //singleBiggest... loses
                failOrder(singleBiggestSupportedMoveIn);

                //all other move ins loose
                failOtherMoveIns(order, singleBiggestSupportedMoveIn)
            }
            if (provinceOrder.support === singleBiggestSupportedMoveIn.support) {
                //provinceOrder fails
                failOrder(provinceOrder);

                //singleBiggest... fails
                failOrder(singleBiggestSupportedMoveIn);

                //all other move ins fails
                failOtherMoveIns(orders, singleBiggestSupportedMoveIn);
            }
            if (provinceOrder.support < singleBiggestSupportedMoveIn.support) {
                //provinceOrder fails
                fail(provinceOrder);


                //singleBiggest... succeeds
                succeedOrder(singleBiggestSupportedMoveIn);

                //all other move ins fails
                failOtherMoveIns(orders, singleBiggestSupportedMoveIn);
            }
        }

    }

    if (soleMoveInNoSupportExist(orders, province)) {
        order = getSoleMoveInNoSupport(orders, province);
        dependsOnOrder = getOrderForUnitInProvince(province, orders);
        markSucceedsIfOtherSucceeds(orders, order, dependsOnOrder);
    }

    return;
}