module.exports = function (order) {
    order.outcome = "Succeeds";
    order.resolved = "true";
    delete order.action;
    delete order.dependsOn;
    return;
}
