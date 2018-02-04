module.exports = function (order) {
    return (order.type === "Move" &&
        order.outcome === "DependsOnConvoy")

}