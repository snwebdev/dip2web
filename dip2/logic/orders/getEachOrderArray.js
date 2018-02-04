/**
 * Created by stewart on 10/07/17.
 */

exports.getOrders = function (allOrdersArray) {
    var power = "";
    var isAnOrder = false;
    var powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"]
    allOrdersArray.forEach((text) => {
        text = text.trim();

        if (powers.indexOf(text) > -1) {
            power = text;
            //console.log("power="+text);
        } else {
            var order = orderText.toOrder(text);
            order.power = power;
            order.text = text;
            order.status = 'unresolved'
            //console.log ("getOrders order = "+ JSON.stringify(order));
            orders.push(order);
        }
    })
    return orders;
}
