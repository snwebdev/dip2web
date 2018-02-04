module.exports = function(rejectedOrder) {
    var text = "";
    text += "***Error in submitted orders***";
    text += "\n\n";
    text += rejectedOrder.orderText;
    text += "\n\n";
    text += "The above line needs to be the name of a power or a properly constructed order.";
    text += "\n";
    text += rejectedOrder.rejectedReasonText;
    text += "\n";
    text += "Orders cannot be processed until this error is corrected."

    return text;
}