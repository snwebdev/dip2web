/**
 * Created by stewart on 07/07/17.
 */

const map = [
    {
        name: "Alb",
        fullName: "Albania",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Tri", "Ser", "Gre"],
        fleetNeighbour: ["Tri", "Gre", "ION", "ADS"]
    },
    {
        name: "ADS",
        fullName: "The Adriatic",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["Tri", "Alb", "ION", "Apu", "Ven"]
    },
    {
        name: "AEG",
        fullName: "The Aegean",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["Bul(sc)", "Con", "Smy", "EMS", "ION", "Gre"]
    },
    {
        name: "Ank",
        fullName: "Ankera",
        type: "Coastal",
        waterArea: [3],
        armyNeighbour: ["Arm", "Smy", "Con"],
        fleetNeighbour: ["BLA", "Arm", "Con"]
    },
    {
        name: "Apu",
        fullName: "Apulia",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Ven", "Nap", "Rom"],
        fleetNeighbour: ["ADS", "ION", "Nap"]
    },
    {
        name: "Arm",
        fullName: "Armenia",
        type: "Coastal",
        waterArea: [3],
        armyNeighbour: ["Sev", "Smy", "Syr", "Ank"],
        fleetNeighbour: ["Sev", "Ank", "BLA"]
    },
    {
        name: "BAL",
        fullName: "The Baltic Sea",
        type: "Water",
        waterArea: [2],
        armyNeighbour: [],
        fleetNeighbour: ["GoB", "Liv", "Pru", "Ber", "Kie", "Den", "Swe"]
    },
    {
        name: "BAR",
        fullName: "The Barents Sea",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["StP(nc)", "Nor", "NWG"]
    },
    {
        name: "Bel",
        fullName: "Belgium",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Hol", "Ruh", "Bur", "Pic"],
        fleetNeighbour: ["NTH", "Hol", "Pic", "ENG"]
    },
    {
        name: "Ber",
        fullName: "Berlin",
        type: "Coastal",
        waterArea: [2],
        armyNeighbour: ["Pru", "Sil", "Mun", "Kie"],
        fleetNeighbour: ["Bal", "Pru", "Sil", "Mun", "Kie"]
    },
    {
        name: "BLA",
        fullName: "The Black Sea",
        type: "Water",
        armyNeighbour: [],
        waterArea: [3],
        fleetNeighbour: ["Sev", "Arm", "Ank", "Con", "Bul(nc)", "Rum"]
    },
    {
        name: "Boh",
        fullName: "Bohemia",
        type: "Inland",
        armyNeighbour: ["Sil", "Gal", "Vie", "Tyr", "Mun"],
        fleetNeighbour: []
    },
    {
        name: "Bre",
        fullName: "Brest",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Pic", "Par", "Gas"],
        fleetNeighbour: ["ENG", "Pic", "Gas", "MAO"]
    },
    {
        name: "Bud",
        fullName: "Budapest",
        type: "Inland",
        armyNeighbour: ["Gal", "Rum", "Ser", "Tri", "Vie"],
        fleetNeighbour: []
    },
    {
        name: "Bul",
        fullName: "Bulgaria",
        type: "Inland",
        multipleCoasts: true,
        waterArea: [3],
        armyNeighbour: ["Rum", "Con", "Gre", "Ser"],
        fleetNeighbour: [],
    },
    {
        name: "Bul(nc)",
        fullName: "Bulgaria, north coast",
        type: "Coastal",
        multipleCoasts: true,
        waterArea: [2],
        armyNeighbour: [],
        fleetNeighbour: ["Rum", "BLA", "Con"]
    },
    {
        name: "Bul(sc)",
        fullName: "Bulgaria, south coast",
        type: "Coastal",
        multipleCoasts: true,
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["Con", "AEG", "Gre"]
    },
    {
        name: "Bur",
        fullName: "Burgandy",
        type: "Inland",
        armyNeighbour: ["Bel", "Ruh", "Mun", "Mar", "Gas", "Par", "Pic"],
        fleetNeighbour: []
    },
    {
        name: "Cly",
        fullName: "Clyde",
        type: "Coastal",
        waterArea: [1],
        waterArea: [1],
        armyNeighbour: ["Edi", "Lvp"],
        fleetNeighbour: ["NAO", "Edi", "Lvp", "IRI"]
    },
    {
        name: "Con",
        fullName: "Constantinople",
        type: "Coastal",
        waterArea: [1, 3],
        armyNeighbour: ["Bul", "Ank", "Smy"],
        fleetNeighbour: ["BLA", "Ank", "Smy", "Bul(sc)", "Bul(nc)"]
    },
    {
        name: "Den",
        fullName: "Denmark",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Swe", "Kie"],
        fleetNeighbour: ["Ska", "Swe", "BAL", "Kie", "HEL", "NTH"]
    },
    {
        name: "Edi",
        fullName: "Edinburgh",
        waterArea: [1],
        type: "Coastal",
        armyNeighbour: ["Yor", "Lvp", "Cly"],
        fleetNeighbour: ["NWG", "NTH", "Yor", "Cly"]
    },
    {
        name: "EMS",
        fullName: "The Eastern Mediteranean",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["Smy", "Syr", "ION", "AEG"]
    },
    {
        name: "ENG",
        fullName: "The English Channel",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["Wal", "Lon", "NTH", "Bel", "Pic", "Bre", "MAO", "IRI"]
    },
    {
        name: "Fin",
        fullName: "Finland",
        type: "Water",
        waterArea: [2],
        armyNeighbour: ["Nor", "StP", "Swe"],
        fleetNeighbour: ["StP(sc)", "GoB"]
    },
    {
        name: "Gas",
        fullName: "Gascony",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Bre", "Par", "Bur", "Mar", "Spa"],
        fleetNeighbour: ["Bre", "Spa(nc)", "MAO"]
    },
    {
        name: "Gal",
        fullName: "Galicia",
        type: "Inland",
        armyNeighbour: ["War", "Ukr", "Rum", "Bud", "Vie"],
        fleetNeighbour: []
    },
    {
        name: "GoB",
        fullName: "The Gulf of Bothnia",
        type: "Water",
        waterArea: [2],
        armyNeighbour: [],
        fleetNeighbour: ["Fin", "StP(sc)", "Liv", "BAL", "Swe"]
    },
    {
        name: "GoL",
        fullName: "The Gulf of Lyon",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["Mar", "Pie", "TYR", "WES", "Spa(sc)"]
    },
    {
        name: "Gre",
        fullName: "Greece",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Alb", "Ser", "Bul"],
        fleetNeighbour: ["Bul(sc)", "AEG", "ION", "Alb"]
    },
    {
        name: "HEL",
        fullName: "The Heligoland Bight",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["NTH", "Den", "Kie", "Hol"]
    },
    {
        name: "Hol",
        fullName: "Holland",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Kie", "Ruh", "Bel"],
        fleetNeighbour: ["NTH", "Hel", "Kie", "Bel"]
    },
    {
        name: "ION",
        fullName: "The Ionian Sea",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["ADS", "Alb", "Gre", "AEG", "EAS", "Tun", "TYS", "Nap", "Apu"]
    },
    {
        name: "IRI",
        fullName: "The Irish Sea",
        type: "Water",
        armyNeighbour: [],
        fleetNeighbour: ["NAO", "Lvp", "Wal", "ENG", "MAO"]
    },
    {
        name: "Kie",
        fullName: "Kiel",
        waterArea: [1],
        type: "Coastal",
        armyNeighbour: ["Den", "Ber", "Mun", "Ruh", "Hol"],
        fleetNeighbour: ["Den", "BAL", "Ber", "Hol", "HEL"]
    },
    {
        name: "Lon",
        fullName: "London",
        type: "Coastal",
        waterArea: [1],
        waterArea: [1],
        armyNeighbour: ["Yor", "Wal"],
        fleetNeighbour: ["Yor", "NTH", "ENG", "Wal"]
    },
    {
        name: "Lvn",
        fullName: "Livonia",
        type: "Coastal",
        waterArea: [2],
        armyNeighbour: ["StP", "Mos", "War", "Pru"],
        fleetNeighbour: ["Pru", "BAL", "GoB", "StP(sc)"]
    },
    {
        name: "Lpl",
        fullName: "Liverpool",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Cly", "Edi", "Yor", "Wal"],
        fleetNeighbour: ["Cly", "Wal", "IRI", "NAO"]
    },
    {
        name: "MAO",
        fullName: "The Mid Atlantic Ocean",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["NAO", "IRI", "ENG", "Bre", "Gas", "Spa(nc)", "Spa(sc)", "Por", "WMS", "NAf"]
    },
    {
        name: "Mar",
        fullName: "Marseilles",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Bur", "Pie", "Spa", "Gas"],
        fleetNeighbour: ["Pie", "GoL", "Spa(sc)"]
    },
    {
        name: "Mos",
        fullName: "Moscow",
        type: "Inland",
        armyNeighbour: ["StP", "Sev", "Ukr", "War", "Lvn"],
        fleetNeighbour: []
    },
    {
        name: "Mun",
        fullName: "Munich",
        type: "Inland",
        armyNeighbour: ["Kie", "Ber", "Sil", "Boh", "Tyr", "Bur", "Ruh"],
        fleetNeighbour: []
    },
    {
        name: "NAf",
        fullName: "North Africa",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Tun"],
        fleetNeighbour: ["MAO", "WMS"]
    },
    {
        name: "NAO",
        fullName: "The north Atlantic Ocean",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["NWG", "Cly", "Lvp", "IRI", "MAO"]
    },
    {
        name: "Nap",
        fullName: "Naples",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Apu", "Rom"],
        fleetNeighbour: ["Apu", "ION", "TYS", "Rom"]
    },
    {
        name: "NTH",
        fullName: "The North Sea",
        type: "Water",
        armyNeighbour: [],
        fleetNeighbour: ["NWG", "Nor", "Ska", "Den", "HEL", "Hol", "Bel", "ENG", "Lon", "Yor", "Edi"]
    },
    {
        name: "NWG",
        fullName: "The Norwegian Sea",
        type: "Water",
        armyNeighbour: [],
        fleetNeighbour: ["BAR", "Nwy", "Edi", "NAO"]
    },
    {
        name: "Nwy",
        fullName: "Norway",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["StP", "Fin", "Swe"],
        fleetNeighbour: ["StP", "Fin", "Swe"]
    },
    {
        name: "Par",
        fullName: "Paris",
        type: "Inland",
        armyNeighbour: ["Pic", "Bur", "Gas", "Bre"],
        fleetNeighbour: []
    },
    {
        name: "Pic",
        fullName: "picardy",
        type: "Coastal",
        armyNeighbour: ["Bel", "Bur", "Par", "Bre"],
        fleetNeighbour: ["Bel", "Bre", "ENG"]
    },
    {
        name: "Pie",
        fullName: "Piedmont",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Tyr", "Ven", "Tus", "Mar"],
        fleetNeighbour: []
    },
    {
        name: "Por",
        fullName: "Portugal",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Spa"],
        fleetNeighbour: ["MAO", "Spa(nc)", "Spa(sc)"]
    },
    {
        name: "Pru",
        fullName: "Prussia",
        waterArea: [2],
        armyNeighbour: ["Lvn", "War", "Sil", "Ber"],
        fleetNeighbour: ["BAL"]
    },
    {
        name: "Rom",
        fullName: "Rom",
        waterArea: [1],
        type: "Coastal",
        armyNeighbour: ["Tus", "Ven", "Apu", "Nap"],
        fleetNeighbour: ["Tus", "Nap", "TYS"]
    },
    {
        name: "Ruh",
        fullName: "Ruhr",
        type: "Inland",
        armyNeighbour: ["Hol", "Kie", "Mun", "Bur", "Bel"],
        fleetNeighbour: []
    },
    {
        name: "Rum",
        fullName: "Rumania",
        type: "Coastal",
        waterArea: [3],
        armyNeighbour: ["Ukr", "Sev", "Bul", "Ser", "Bud", "Gal"],
        fleetNeighbour: ["Sev", "BLA", "Bul(nc)"]
    },
    {
        name: "Sev",
        fullName: "Sevastapol",
        type: "Coastal",
        waterArea: [3],
        armyNeighbour: ["Mos", "Arm", "Rum", "Ukr"],
        fleetNeighbour: ["Aam", "BLA", "Rum"]
    },
    {
        name: "Sil",
        fullName: "Silesia",
        type: "Inland",
        waterArea: [1],
        armyNeighbour: ["Ber", "Pru", "War", "Gal", "Sil", "Mun"],
        fleetNeighbour: []
    },
    {
        name: "SKA",
        fullName: "Skagerak",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["Nor", "Swe", "Den", "NTH"]
    },
    {
        name: "Smy",
        fullName: "Smyrna",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Con", "Ank", "Arm", "Syr"],
        fleetNeighbour: ["Con", "Syr", "EMS", "AEG"]
    },
    {
        name: "Spa",
        fullName: "Spain",
        multipleCoasts: true,
        armyNeighbour: ["Gas", "Mar", "Por"],
        fleetNeighbour: [""]
    },
    {
        name: "Spa(nc)",
        fullName: "Spain (north coast)",
        type: "Coastal",
        multipleCoasts: true,
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["MAO", "Gas", "Por"]
    },
    {
        name: "Spa(sc)",
        fullName: "Spain (south coast)",
        type: "Coastal",
        multipleCoasts: true,
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["GoL", "WMS", "MAO"]
    },
    {
        name: "StP",
        fullName: "Saint Petersburg",
        type: "Inland",
        multipleCoasts: true,
        armyNeighbour: ["Mos", "Lvn", "Fin"],
        fleetNeighbour: []
    },
    {
        name: "StP(nc)",
        fullName: "Saint Petersburg (north coast)",
        type: "Coastal",
        multipleCoasts: true,
        waterArea: [2],
        armyNeighbour: [],
        fleetNeighbour: ["BAR", "Nor"]
    },
    {
        name: "StP(sc)",
        fullName: "Saint Petersburg (south coast)",
        type: "Coastal",
        multipleCoasts: true,
        waterArea: [2],
        armyNeighbour: [],
        fleetNeighbour: ["Lvn", "GoB", "Fin"]
    },
    {
        name: "Swe",
        fullName: "Sweden",
        type: "Coastal",
        waterArea: [1, 2],
        armyNeighbour: ["Nor", "Fin", "Den"],
        fleetNeighbour: ["Fin", "GoB", "Den", "SKA", "Nor"]
    },
    {
        name: "Syr",
        fullName: "Syria",
        type: "Coastal",
        armyNeighbour: ["Arm", "Smy"],
        fleetNeighbour: ["EMS", "Smy"]
    },
    {
        name: "Tri",
        fullName: "Trieste",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Vie", "Bud", "Ser", "Alb", "Ven", "Tyr"],
        fleetNeighbour: ["Alb", "ADS", "Ven"]
    },
    {
        name: "Tun",
        fullName: "Tunis",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["NAf"],
        fleetNeighbour: ["TYS", "ION", "NAf"]
    },
    {
        name: "Tus",
        fullName: "Tuscany",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Ven", "Rom", "Pie"],
        fleetNeighbour: ["Rom", "TYS", "GoL", "Pie"]
    },
    {
        name: "Tyr",
        fullName: "Inland",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Mun", "Boh", "Vie", "Tri", "Ven", "Pie"],
        fleetNeighbour: []
    },
    {
        name: "TYS",
        fullName: "The Tyrrhenian Sea",
        type: "Water",
        armyNeighbour: [],
        fleetNeighbour: ["GoL", "Tus", "Rom", "Nap", "ION", "Tun", "WES"]
    },
    {
        name: "Ukr",
        fullName: "Ukraine",
        type: "Inland",
        armyNeighbour: ["Mos", "Sev", "Rum", "Gal", "War"],
        fleetNeighbour: []
    },
    {
        name: "Ven",
        fullName: "Venice",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Tyr", "Tri", "Apu", "Rom", "Tus", "Pie"],
        fleetNeighbour: ["Tri", "ADS", "Apu"]
    },
    {
        name: "Vie",
        fullName: "Vienna",
        type: "Inland",
        armyNeighbour: ["Boh", "Gal", "Bud", "Tri", "Tyr"],
        fleetNeighbour: []
    },
    {
        name: "Wal",
        fullName: "Wales",
        type: "Coastal",
        waterArea: [1],
        armyNeighbour: ["Lvp", "Yor", "Lon"],
        fleetNeighbour: ["Lvp", "Lon", "ENG", "IRI",]
    },
    {
        name: "War",
        fullName: "Warsaw",
        type: "Inland",
        armyNeighbour: ["Pru", "Lvn", "Mos", "Ukr", "Gal", "Sil"],
        fleetNeighbour: []
    },
    {
        name: "WMS",
        fullName: "The Western Mediteranean",
        type: "Water",
        waterArea: [1],
        armyNeighbour: [],
        fleetNeighbour: ["GoL", "TYS", "Tun", "NAf", "MAO", "Spa(sc)"]
    },
    {
        name: "Yor",
        fullName: "Yorkshire",
        type: "Coastal",
        armyNeighbour: ["Edi", "Lon", "Wal", "Lvp"],
        fleetNeighbour: ["Edi", "NTH", "Lon"]
    },
];


module.exports = map;

