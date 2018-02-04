const getConvoys = require('./getConvoys');
const linksToEndOfAChain = require('./linksToEndOfAChain');
const addLink = require('./addLink');

module.exports = function (orders) {
    var convoys = getConvoys(orders);
    var chains = [];

    convoys.forEach((convoy) => {
        if (order.outcome !== "fails") {
            //if doesn't link to end of a chain, start new chain
            if (!linksToEndOfAChain(chains, convoy)) {
                chains.push([convoy]);
            } else {
                //if it does link to end of chain add it on
                addLink(chains, convoy);
            }
        }

    })
    return chains;
}