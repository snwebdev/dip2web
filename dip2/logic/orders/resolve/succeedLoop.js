const succeedOrder = require('../succeedOrder');

module.exports = function (loop) {
    loop.forEach((order) => {
        succeedOrder((order));
    })
    return;
}