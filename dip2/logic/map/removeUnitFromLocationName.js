module.exports = function (units, locationName) {
    for (var i = 0; i < units.length; i++) {
        if (units[i].locationName === locationName) {
            units.splice(i, 1);
        }
    }
    return;
}