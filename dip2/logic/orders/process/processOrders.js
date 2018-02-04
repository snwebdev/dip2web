const processSupportHoldOrders = require('./processSupportHoldOrders');
const setSupportsToZero = require('./setSupportsToZero');
const processHoldOrders = require('./processHoldOrders');
const processSupportMoveOrders = require('./processSupportMoveOrders');
const processMoveOrders = require('./processMoveOrders');
const processConvoyOrders = require('./processConvoyOrders');
const attachWaterAreas = require('./attachWaterAreas');

module.exports = function (units, orders) {

    setSupportsToZero(orders);

    processHoldOrders(units, orders);
    processSupportHoldOrders(units, orders);

    processMoveOrders(units, orders);
    processSupportMoveOrders(units, orders);
    // processMoveOrders(units, orders);
    processConvoyOrders(units, orders);
    attachWaterAreas(orders);

    // addSupports(units, orders);


    return orders;
}