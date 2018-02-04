module.exports = function (order) {
    return order.type === "Convoy" && order.legal;
}