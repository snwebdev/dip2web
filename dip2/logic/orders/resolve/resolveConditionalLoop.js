const succeedOrder = require('../succeedOrder');
const failOrder = require('../failOrder');
const getConditionalLoop = require('./getConditionalLoop');
const succeedLoop = require('./succeedLoop');
const failLoop = require('./failLoop');

module.exports = function (orders, order) {

    var loop = getConditionalLoop(orders, order);
    if (loop.length > 2) {
        succeedLoop(loop);
    } else {
        failLoop(loop);
    }

    return;
}

