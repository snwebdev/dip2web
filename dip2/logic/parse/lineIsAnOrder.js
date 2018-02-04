const isAnOrder = require('./isAnOrder');

module.exports = function(text){
    var array = text.split(" ");
    var newArray = [];
    array.forEach((element) => {
        if (element.length > 0){
            newArray.push(element);
        }
    })

    return isAnOrder(newArray);
}