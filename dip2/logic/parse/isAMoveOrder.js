const isAUnitType = require('./isAUnitType');
const isAProvinceName = require('./isAProvinceName');

module.exports = function(array){
    if(
        array.length === 4 &&
        isAUnitType(array[0]) &&
        isAProvinceName(array[1]) &&
        array[2] === "-" &&
            isAProvinceName(array[3])
    ){
        return true;
    } else {
        return false;
    }
}