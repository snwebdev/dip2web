module.exports = function (orders, province) {
    var convoysFromLocation = [];
    orders.forEach((order) => {
        if (order.type === "Convoy" &&
            order.legal &&
            order.convoyFrom === Location
        ) {
            convoysFromLocation.push(order);
        }
    })
    return convoysFromLocation;
}