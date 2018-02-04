const fs = require('fs');
const removeEmptyElements = require('./removeEmptyElements');

const ordersFile = "orders.txt";
const ordersText = fs.readFileSync(ordersFile, 'utf-8');


module.exports = function () {
    var rows = ordersText.split('\n');
    return removeEmptyElements(rows);
}