const isAUnitType = require('./isAUnitType');
const isAProvinceName = require('./isAProvinceName');

module.exports = function(array){
    if(
        array.length ===3 &&
          isAUnitType(array[0]) &&
            isAProvinceName(array[1]) &&
            array[2] === "h"
    ){
        return true;
    } else {
        return false;
    }
}