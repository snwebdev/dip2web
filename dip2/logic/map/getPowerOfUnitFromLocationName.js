module.exports = function (units, provinceName) {


    for (var i = 0; i < units.length; i++) {

        if (units[i].locationName === provinceName) return units[i].powerName;
    }
}