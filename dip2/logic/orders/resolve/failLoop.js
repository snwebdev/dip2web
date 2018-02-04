const failOrder = require('../failOrder');

module.exports = function (loop) {
    loop.forEach((order) => {
        failOrder((order));
    })
    return;
}