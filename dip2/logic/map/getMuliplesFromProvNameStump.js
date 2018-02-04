const map = require('./map');

module.exports = function (provNameStump) {

    var multipleProvinces = []

    map.forEach((province) => {
        if (province.name.substr(0, 3) === provNameStump) {
            multipleProvinces.push(province);
        }
    })
    return multipleProvinces;
}