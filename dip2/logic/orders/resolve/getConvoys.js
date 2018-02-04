module.exports = function (orders) {
    var convoys = [];
    orders.forEach((order) => {
        if (order.type === "Convoy" &&
            order.legal &&
            order.outcome !== "Fails") {
            convoys.push(order);
        }
    })
    return convoys;
}