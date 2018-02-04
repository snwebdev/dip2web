module.exports = function (order) {
    if (order.legal) {
        return order.unitLocation;
    }
}