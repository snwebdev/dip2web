const extractConditionalOutcomeOrders = require('../extractConditionalOutcomeOrders');
const getChainOfConditionals = require('./getChainOfConditionals');
const succeedOrder = require('../succeedOrder');
const failOrder = require('../failOrder');
const resolveConditionalLoop = require('./resolveConditionalLoop');
const inConditionalLoop = require('./inConditionalLoop');
const resolveConditionalChain = require('./resolveConditionalChain');


module.exports = function (orders) {
    var conditionals = extractConditionalOutcomeOrders(orders);
    while (conditionals.length > 0) {
        var order = conditionals[0];

        if (inConditionalLoop(orders, order)) {
            resolveConditionalLoop(orders, order);
            conditionals = extractConditionalOutcomeOrders(orders);

        } else {
            resolveConditionalChain(orders, order);
            conditionals = extractConditionalOutcomeOrders(orders);
        }
    }
    return;
}