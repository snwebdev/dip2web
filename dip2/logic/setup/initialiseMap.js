const placeUnit = require("../map/placeUnit");

module.exports = function (units) {

    placeUnit(units, "England", "Fleet", "Lon");
    placeUnit(units, "England", "Fleet", "Edi");
    placeUnit(units, "England", "Fleet", "Lon");

    placeUnit(units, "France", "Fleet", "Bre");
    placeUnit(units, "France", "Army", "Mar");
    placeUnit(units, "France", "Army", "Par");

    placeUnit(units, "Germany", "Fleet", "Kie");
    placeUnit(units, "Germany", "Army", "Ber");
    placeUnit(units, "Germany", "Army", "Mun");

    placeUnit(units, "Russia", "Fleet", "StP(sc)");
    placeUnit(units, "Russia", "Fleet", "Sev");
    placeUnit(units, "Russia", "Army", "Mos");
    placeUnit(units, "Russia", "Army", "War");

    placeUnit(units, "Russia", "Fleet", "Tri");
    placeUnit(units, "Russia", "Army", "Vie");
    placeUnit(units, "Russia", "Army", "Bud");

    placeUnit(units, "Italy", "Fleet", "Nap");
    placeUnit(units, "Italy", "Army", "Ven");
    placeUnit(units, "Italy", "Army", "Rom");

    placeUnit(units, "Turkey", "Fleet", "Ank");
    placeUnit(units, "Turkey", "Army", "Con");
    placeUnit(units, "Turkey", "Army", "Smy");


    return units;
}