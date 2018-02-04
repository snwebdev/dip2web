module.exports = function (array) {
    var newArray = []
    array.forEach((element) => {
        if (element !== "") {
            newArray.push(element)
        }
    })
    return newArray
}