module.exports = function (orders, firstLink) {
    var conditionals = [];


    var chain = [];
    var order = firstLink;
    chain.push(order);
    while (order.action === 'Succeeds if other succeeds') {
        if (conditionals.length === 1) return chain;
        order = order.dependsOn;
        chain.push(order);
        conditionals.splice(conditionals.indexOf(order), 1);
    }


    return chain;
}