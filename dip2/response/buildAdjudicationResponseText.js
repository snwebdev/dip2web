const buildOutcomeText = require('./buildOutcomeText');

module.exports = function(orders, units){
    // var text = "adjudication response";
    // text += "\nOrders";
    var text = "";

    orders.forEach((order) => {
        text += "\n";
        text += order.orderText;
        text += " (";
        text += order.outcome;
        text += ")";
    });

    var outcomeText = buildOutcomeText(units);

    text += "\n";
    text += outcomeText;




    return text;
}