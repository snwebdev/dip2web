const getOrderRelevantProvinces = require('./getOrderRelevantProvincesFromOrders');
const getOrdersByProvince = require('./getOrdersByProvince');
const cutSupports = require('./cutSupports');
const succeedUncutSupportOrders = require('../succeedUncutSupportOrders');
const addUncutSupports = require('./addUncutSupports');
const resolveProvince = require('./resolveProvince');
const markUnitsForMovement = require('./markUnitsMovement');
const resolveConditionals = require('./resolveConditionals');
const markPossibleConvoyChains = require('./markPossibleConvoyChains');
const getConvoyLocations = require('../getConvoyLocations');
const getConvoyChains = require('./getConvoyChains');
const resolveConvoyMoves = require('./resolveConvoyMoves');
const resolveConvoyChains = require('./resolveConvoyChains');
var resolveConvoyHolds = require('./resolveConvoyHolds');
const addConvoyChainsToMoves = require('./addConvoyChainsToMoves');


module.exports = function (units, orders) {
    // console.log("");
    // console.log("Resolving orders");

    cutSupports(orders);
    succeedUncutSupportOrders(orders);
    addUncutSupports(orders);
    resolveConvoyHolds(orders);
    var convoyChains = getConvoyChains(orders);
    addConvoyChainsToMoves(orders, convoyChains);
    //resolveConvoyChains(convoyChains, orders);


    var orderRelevantProvinces = getOrderRelevantProvinces(orders);
    var ordersByProvince = getOrdersByProvince(orders, orderRelevantProvinces);


    while (ordersByProvince.length > 0) {
        var prov = ordersByProvince[0][0];
        var resolvingOrders = ordersByProvince[0][1];
        resolveProvince(units, orders, prov, ordersByProvince, resolvingOrders, convoyChains);
        ordersByProvince.shift();

    }

    // resolveConvoyMoves(orders);

    resolveConditionals(orders);

    markUnitsForMovement(units, orders);

    return;
}