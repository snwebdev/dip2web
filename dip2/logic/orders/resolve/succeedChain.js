const succeedOrder = require('../succeedOrder');

module.exports = function (chain) {
    chain.forEach((order) => {
        succeedOrder(order);
    })
    return;
}