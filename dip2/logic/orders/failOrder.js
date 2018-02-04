module.exports = function (order) {
    order.outcome = "Fails";
    delete order.action;
    delete order.dependsOn;
    order.resolved = true;
    return;
}