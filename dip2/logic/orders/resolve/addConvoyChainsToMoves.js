const getConvoyChainMoveOrder = require('./getConvoyChainMoveOrder');

module.exports = function (orders, convoyChains) {
    convoyChains.forEach((chain) => {
        var order = getConvoyChainMoveOrder(orders, chain);
        if (order !== -1) {
            if (order.hasOwnProperty("convoyChains")) {
                order.convoyChains.push(chain);
            } else {
                order.convoyChains = [chain];
            }
        }
    })

    return;
}