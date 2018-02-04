//returns the first rejected order from array of orders

module.exports = function(orders){
    for (var i = 0; i < orders.length; i++){
        if (orders[i].rejected === true) return orders[i];
    }
    return -1;
}
