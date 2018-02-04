module.exports = function (provinceName, potentialConvoys) {
    for (var i = 0; i < potentialConvoys.length; i++) {
        if (potentialConvoys[i].convoyFrom === provinceName) {
            return true;
        }
    }
    return false;
}