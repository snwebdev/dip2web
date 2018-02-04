/**
 * Created by stewart on 10/07/17.
 */

const removeBlankElementsFromArray = require('./removeBlankElementsFromArray');

module.exports = function (power, orderText) {
    var array = [];
    array.push(power);
    var orderTextArray = orderText.split(' ');
    orderTextArray.forEach((text) => {
        array.push(text);
    })

    return removeBlankElementsFromArray(array);

}