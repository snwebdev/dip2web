const linksToEndOfChain = require('./linksToEndOfChain');


module.exports = function ((chains, link)
)
{
    chains.forEach((chain) => {
        if (linksToEndOfChain(chain, link)) {

        }
    })
}