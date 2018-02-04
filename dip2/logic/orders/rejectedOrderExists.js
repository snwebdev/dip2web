module.exports = function(orders){
    for (var i=0; i < orders.length; i++){
        if (orders[i].rejected === true) return true;
    }
    return false;
}