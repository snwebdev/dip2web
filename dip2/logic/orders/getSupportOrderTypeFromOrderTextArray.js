module.exports = function (orderTextArray) {


    var signifier = orderTextArray[5];

    switch (signifier) {
        case 'h':
            return "Hold"
        case '-':
            return "Move"
        default:
            return -1
    }
}
