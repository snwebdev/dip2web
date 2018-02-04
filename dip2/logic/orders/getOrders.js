/**
 * Created by stewart on 07/07/17.
 */

// const fs = require('fs');
//
// const ordersFile = "orders.txt";
// const ordersText = fs.readFileSync(ordersFile, 'utf-8');




module.exports = function (input) {
    input = input.replace(/[\r]/g, '');
    return input.split('\n');
}