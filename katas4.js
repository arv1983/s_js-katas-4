const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

kata1();

function kata1() {
    cria(gotCitiesCSV, 'kata 1');
}

kata2();

function kata2() {
    cria(bestThing.split(" "), 'kata 2');
}

kata3();

function kata3() {
    cria(gotCitiesCSV.replaceAll(",", ";"), 'kata 3');
}

kata4();

function kata4() {
    cria(lotrCitiesArray.join(','), 'kata 4');
}

kata5();

function kata5() {
    cria(lotrCitiesArray.slice(0, 5), 'kata 5');
}

kata6();

function kata6() {
    cria(lotrCitiesArray.slice(3, 8), 'kata 6');
}

kata7();

function kata7() {
    cria(lotrCitiesArray.slice(2, 5), 'kata 7');
}

kata8();

function kata8() {

    let array = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
    array.splice(2, 1);
    cria(array, 'kata 8');

}

kata9();

function kata9() {
    let array2 = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
    array2.splice(6, 2)

    cria(array2, 'kata 9');

}
kata10();

function kata10() {
    let array2 = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
    array2.splice(6, 2)
    cria(array2, 'kata 10');

}

kata11();

function kata11() {
    let array3 = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
    array3.splice(5, 1, 'Deadest Marshes');
    cria(array3, 'kata 11');
}

kata12();

function kata12() {
    cria(bestThing.slice(0, 14), 'kata 12');
}

kata13();

function kata13() {
    cria(bestThing.slice(-12), 'kata 13');
}


kata14();

function kata14() {
    cria(bestThing.slice(23, 38), 'kata 14');
}

kata15();

function kata15() {
    cria(bestThing.substring(81, 69), 'kata 15'); // ultimos 12
}

kata16();

function kata16() {
    cria(bestThing.substring(81, 69), 'kata 16'); // ultimos 12
}

kata17();

function kata17() {
    array17 = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
    array17.pop();
    return cria(array17, 'kata 17'); // ultimos 12

}

kata18();

function kata18() {
    array17.push("Harad");
    cria(array17, 'kata 18'); // ultimos 12
}

kata19();

function kata19() {
    array17.shift();
    cria(array17, 'kata 19'); // ultimos 12
}

kata20();

function kata20() {
    array17.unshift('Mordor');
    cria(array17, 'kata 20'); // ultimos 12
}

//// bonus
kata21();

function kata21() {

    cria(bestThing.indexOf('only'), 'BONUS kata 21'); // ultimos 12
}

kata22();

function kata22() {


    cria(bestThing.lastIndexOf(''), 'BONUS kata 22'); // ultimos 12
}

kata23();

function kata23() {


    cria("PASSEI adoraria aprender como...", 'BONUS kata 23'); // ultimos 12
}

kata24();

function kata24() {
    let retorna = [];

    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].substr(-2) == 'or') {
            retorna.push(lotrCitiesArray[i]);
        }
    }

    cria(retorna, 'BONUS kata 24'); // ultimos 12
}

kata25();

function kata25() {
    let arrNovo25 = [];
    let arrKata25 = bestThing.split(' ');

    console.log(arrKata25[0].substr(0, 1));

    for (let i = 0; i < arrKata25.length; i++) {
        if (arrKata25[i].substr(0, 1) == 'b') {
            arrNovo25.push(arrKata25[i]);
        }
    }
    cria(arrNovo25, 'BONUS kata 25'); // ultimos 12
}

kata26();

function kata26() {

    if (lotrCitiesArray.indexOf('Mirkwood') == -1) {
        cria("Não", 'BONUS kata 26'); // ultimos 12
    } else {
        cria("Sim", 'BONUS kata 26'); // ultimos 12
    }
}


kata27();

function kata27() {

    if (lotrCitiesArray.indexOf('Hollywood') == -1) {
        cria("Não", 'BONUS kata 27'); // ultimos 12
    } else {
        cria("Sim", 'BONUS kata 27'); // ultimos 12
    }
}

kata28();

function kata28() {
    cria(lotrCitiesArray.indexOf('Mirkwood'), 'BONUS kata 28'); // ultimos 12

}

kata29();

function kata29() {


    let teste = lotrCitiesArray.filter(material => material.indexOf(' ') != -1)
    cria(teste, 'BONUS kata 29'); // ultimos 12

}

kata30();

function kata30() {
    cria(lotrCitiesArray.reverse(), 'BONUS kata 30'); // ultimos 12
}
kata31();

function kata31() {
    cria(lotrCitiesArray.sort(), 'BONUS kata 31'); // ultimos 12
}

kata32();

function kata32() {


    cria(lotrCitiesArray.sort((a, b) => a.length - b.length), 'BONUS kata 32'); // ultimos 12
}


// kata1();"Rohan", "Beleriand", "Mirkwood"
//["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
// daqui em diante é contigo


//cria();


function cria(resposta, kata) {

    let header = document.createElement("div");
    header.setAttribute("id", "kata");
    header.textContent = kata;
    document.body.appendChild(header);
    let newElement = document.createElement("div");
    newElement.setAttribute("id", "kataResposta");
    newElement.textContent = JSON.stringify(resposta);
    //newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)

}