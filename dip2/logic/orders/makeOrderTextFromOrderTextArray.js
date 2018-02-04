module.exports = function (orderTextArray) {
    var text = "";
    for (var i = 1; i < orderTextArray.length; i++) {


        text = text + " " + orderTextArray[i];
    }


    return text;
}
