const isMoveToProvince = require('./isMoveToProvince');


module.exports = function (orders, province) {
    var movesToProvince = [];
    orders.forEach((order) => {
        if (isMoveToProvince(order, province)) {
            movesToProvince.push(order);
        }
    })
    return movesToProvince;
}