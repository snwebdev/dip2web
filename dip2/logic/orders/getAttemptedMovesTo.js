const isMoveToProvince = require('./isMoveToProvince');
const orderIsLegal = require('./orderIsLegal');


module.exports = funcion(orders, province)
{
    var movesTo = [];
    orders.forEach((order) => {
        if (isMoveToProvince(order, province) && orderIsLegal(order)) {
            movesTo.push(order;
        )
        }
    })
    return movesTo;
}