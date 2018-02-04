module.exports = function (order) {
    if (!order.outcome === "DependsOnConvoy") {
        return false
    }

    if (order.outcome === "DependsOnConvoy") {
        return true
    }

    return false;
}