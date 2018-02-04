module.exports = function (orderTextArray) {
    order = {};
    order.rejected = true;
    order.rejectedReasonText = "Could not identify what type of order this is meant to be";

    return order
}