const isOccupied = require('../../map/isOccupiedFromProvinceName');
const isHolding = require('../isHolding');
const moveToProvinceExists = require('../moveToProvinceExists');
const singleBiggestSupportedMoveInExists = require('../singleBiggestSupportedMoveInExists');
const singleBiggestSupportedMoveInGreaterThanHoldSupport = require('../singleBiggestSupportedMoveInGreaterThanHoldSupport');
const getSingleBiggestSupportedMoveIn = require('../getSingleBiggestSupportedMoveIn');
const failOtherMoveIns = require('../failOtherMoveIns');
const failOrder = require('../failOrder');
const failHoldInProvince = require('../failHoldInProvince');
const resolveProvinceHolding = require('./resolveProvinceHolding');
const resolveProvinceEmpty = require('./resolveProvinceEmpty');
const resolveProvinceOccupiedNotHolding = require('./resolveProvinceOccupiedNotHolding');

module.exports = function (units, orders, province, ordersByProvince, provinceOrders) {
    // console.log("looking at "+ province);
    if (
        isOccupied(units, province) &&
        isHolding(province, orders)
    ) {
        resolveProvinceHolding(orders, province);
    }

    else if (
        isOccupied(units, province) &&
        !isHolding(province, orders)
    ) {
        resolveProvinceOccupiedNotHolding(units, orders, province);
    }


    else if (
        !isOccupied(units, province)
    ) {
        resolveProvinceEmpty(units, orders, province, provinceOrders);
    }


    return;
}