const moveFromToExists = require('../moveFromToExists');
const removeChain = require('./removeChain');

module.exports = function (chains, orders) {
    //delete chains that don't match up to moves
    chains.forEach((chain) => {
        var chainStart = chain[0].convoyFrom;
        var chainEnd = chain[chain.length - 1].convoyTo;
        if (!moveFromToExists(orders, chainStart, chainEnd)) {
            removeChain(chain, chains);
        }

    })
    return;
}