const linksToEndOfChain = require('./linksToEndOfChain');

module.exports = function (chains, link) {
    for (var i = 0; i < chains.length; i++) {
        if (linksToEndOfChain(chains[i], link)) {
            return true;
        }
    }
    return false;
}