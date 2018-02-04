const add = require('./addLink');
const linksToEndOfChain = require('./linksToEndOfChain');
const addToChain = require('./addToChain');

module.exports = function (chains, link) {
    chains.forEach((chain) => {
        if (linksToEndOfChain(chain, link)) {
            addToChain(chain, link);
        }
    })
    return chains;
}