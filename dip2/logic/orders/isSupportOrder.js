module.exports = function (order) {
    if (
        order.type === "SupportHold" ||
        order.type === "SupportMove"
    ) {
        return true;
    } else {
        return false;
    }
}