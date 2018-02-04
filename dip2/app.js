module.exports = function(input){
   ;
    const  powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"];
    var units = []; //array holding position of units

  //  console.log("dip2");

// const getOrders = require('./logic/orders/getOrders');
   // const getUnits = require('./logic/map/getUnits');

  //  const placeUnit = require("./logic/map/placeUnit");
// const powerHasUnitInProvince = require("./orders/powerHasUnitInProvince");
  //  const printMap = require ("./logic/map/printMap");
// const getProvince = require("./orders/getProvince");
// const getOrdersArrayFromOrdersTextArray = require("./orders/getOrdersArrayFromOrdersTextArray");
    const getOrdersArrayFromOrdersTextFile = require("./logic/orders/getOrdersArrayFromOrderTextFile");
//     const initialiseMap = require("./logic/setup/initialiseMap");
     const initialiseMapFromOrders = require("./logic/setup/initialiseMapFromOrders");
//     const fleetConnects = require('./logic/map/fleetConnects');
//     const armyConnects = require('./logic/map/armyConnects');
//     const orderPowerOwnsUnitInProvince = require('./logic/orders/legal/orderPowerOwnsUnitInProvince');
//     const orderedUnitIsRightType = require('./logic/orders/legal/orderedUnitIsRightType');
//     const checkOrder = require('./logic/orders/legal/checkOrder');
    const processOrders = require('./logic/orders/process/processOrders');
     const addSupportedMoveUnitTypeToOrders = require('./logic/orders/addSupportedMoveUnitTpeToOrders');
//
     const resolve = require('./logic/orders/resolve/resolve');
//     const printUnitOutcome = require('./logic/orders/printUnitOutcome');
//     const connecetedByWater = require('./logic/map/connectedByWater');
     const checkOrdersLegal = require('./logic/orders/legal/checkOrdersLegal');
     const checkUnitsCanBeInProvinces = require('./logic/orders/legal/checkUnitsCanBeInProvinces');
//     const removeRejectedOrders = require('./logic/orders/removeRejectedOrders');
//     const rejectMalformedOrders = require('./logic/orders/rejectMalformedOrders');
//
//     const getRowsFromOrderTextFile = require('./logic/parse/getRowsFromOrderTextFile');
//     const firstRowIsAPower = require('./logic/parse/firstRowIsAPower');
//     const lineIsAnOrder = require('./logic/parse/lineIsAnOrder');
//     const parseOrdersText = require('./logic/parse/parseOrdersText');
    const rejectedOrderExists = require('./logic/orders/rejectedOrderExists');
     const getRejectedOrder = require('./logic/orders/getRejectedOrder');
     const buildRejectedOrderText = require('./response/buildRejectedOrderText');
    const buildAdjudicationResponseText = require('./response/buildAdjudicationResponseText');
//
//
    var response = {};
//
//
//     var rows = getRowsFromOrderTextFile();



//parseOrdersText();



//
     var orders = getOrdersArrayFromOrdersTextFile(input);

//
//

    if (!rejectedOrderExists(orders)){
        response.rejectedOrderExists = false;
        initialiseMapFromOrders(units, orders);
        checkUnitsCanBeInProvinces(orders);
        //removeRejectedOrders(units, orders, rejectedOrders);
        checkOrdersLegal(units, orders);
        addSupportedMoveUnitTypeToOrders(units, orders);
        //orders = processOrders(units, orders);



         processOrders(units, orders);
        console.log("after orderProcessing... ");
        console.log(orders);

         resolve(units, orders)

        console.log("after resolving orders... ");
        console.log(orders);
        // printUnitOutcome(units);
         response.text = buildAdjudicationResponseText(orders, units);
    } else{
        response.rejectedOrderExists = true;
        response.rejectedOrder = getRejectedOrder(orders);
        response.text = buildRejectedOrderText(response.rejectedOrder);
    }
//
//
//     console.log("response...\n\n"+(response.text));
//
// //console.log('end');

     return response.text;
    // return JSON.stringify(orders);
}













