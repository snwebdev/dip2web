module.exports = function (orders) {
    var convoyMoves = [];
    orders.forEach((order) => {
        if (order.type === "Move" &&
            !order.resolved &&
            order.outcome === "DependsOnConvoy") {
            convoyMoves.push(order);
        }
    });

    return convoyMoves;
}