const isAPower = require('./isAPower');
const isAnOrder = require('./isAnOrder');
const lineIsAnOrder = require('./lineIsAnOrder');
const powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"]

module.exports = function (line) {
    return (
        powers.indexOf(line) > -1 ||
        lineIsAnOrder(line)
    )
}