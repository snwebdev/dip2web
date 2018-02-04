const succeedOrder = require('../succeedOrder');
const failOrder = require('../failOrder');
const getConditionalChain = require('./getChainOfConditionals');
const succeedChain = require('./succeedChain');
const failChain = require('./failChain');

module.exports = function (orders, order) {

    var chain = getConditionalChain(orders, order);
    var end = chain[chain.length - 1];
    if (end.outcome === "Succeeds") {
        succeedChain(chain);
    }
    if (end.outcome === "Fails") {
        failChain(chain);
    }

    return;
}

