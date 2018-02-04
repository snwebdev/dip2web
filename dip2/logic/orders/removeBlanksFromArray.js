/**
 * Created by stewart on 10/07/17.
 */

const removeBlankelementsFromArray = require('/orders/removeBlankElementsFromArray');

module.exports = function (array) {
    var newArray = [];
    array.forEach((element) => {
        if (
            element !== '') {
            newArray.push(element);
        }
    })
    newArray = removeBlankelementsFromArray(newArray);
    return newArray;
}