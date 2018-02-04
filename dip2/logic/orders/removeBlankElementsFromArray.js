/**
 * Created by stewart on 07/07/17.
 */
// takes an array and returns an array with all blank elements removed

module.exports = function (array) {
    var newArray = [];
    array.forEach((element) => {
        //console.log("element "+ element + " is " + element.length + " long");
        if (element.length > 0) newArray.push(element);
    });
    return newArray;
}
