const getConvoyMoves = require('../getConvoyMoves');
const getConvoysRelevantToConvoyMove = require('./getConvoysRelevantToConvoyMove');
const convoyFromExists = require('./convoyFromExists');
const failOrder = require('../failOrder');
const getConvoyChains = require('./getConvoyChains');
const convoyMoveRouteExists = require('./convoyMoveRouteExists');

module.exports = function (orders) {
    var convoyMoves = getConvoyMoves(orders);

    convoyMoves.forEach((convoyMove) => {
        var potentialConvoys = getConvoysRelevantToConvoyMove(convoyMove, orders);
        var chains = getConvoyChains(potentialConvoys);
        convoyMoveRouteExists(convoyMove, chains);


        return;

    })
    return;
}