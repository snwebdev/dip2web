const failOrder = require('../failOrder');

module.exports = function (chain) {
    chain.forEach((order) => {
        failOrder(order);
    })
    return;
}