/**
 * Created by stewart on 19/07/17.
 */

const game = require('../../game');

module.exports = function (orderTextArray) {
    var power = orderTextArray[0];
    var powers = game.powers

    if (powers.indexOf(power) > -1) {
        return power;
    } else {

        order.powerErrorText = power;
        return -1
    }
}