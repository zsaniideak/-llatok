console.log("helló")

const allatok = [
    { id: 1, nev: "Micike", faj: "macska", ar: "1000", szin: "cirmos" },
    { id: 2, nev: "Lune", faj: "macska", ar: "500", szin: "cirmos" },
    { id: 3, nev: "Macsa", faj: "macska", ar: "2000", szin: "cirmos" }
]
const oszlopok = ["nev", "faj", "ar", "szin", "muveletek"]

function keresdMegEztAzElemetAHtmlben(htmlElemClassNeve) {
 
    let megtalaltHtmlElemek = document.querySelectorAll(htmlElemClassNeve)

    if (megtalaltHtmlElemek.length === 1) {

        return megtalaltHtmlElemek[0]
    } else {

        return megtalaltHtmlElemek;
    }
}

function fejlecHozzaado(elemAmihezHozzaadjukASort) {
    let sor = document.createElement('div');
    sor.className = "row";
    oszlopok.forEach(oszlopNev => {
        let oszlop = document.createElement('div');
        oszlop.className = "col";
        oszlop.innerHTML = oszlopNev;
        sor.appendChild(oszlop);
    })
    elemAmihezHozzaadjukASort.appendChild(sor)
}

function gombHozzaado(oszlop) {
    let gomb1 = document.createElement("button");
    gomb1.innerHTML = "edit";
    let gomb2 = document.createElement("button");
    gomb2.innerHTML = "delete";
    oszlop.appendChild(gomb1)
    oszlop.appendChild(gomb2)
}
function rendel() {
    let container = keresdMegEztAzElemetAHtmlben('.container')
    fejlecHozzaado(container)

    allatok.forEach((allat) => {

        let sor = document.createElement('div');
        sor.className = "row";
        oszlopok.forEach((oszlopNeve) => {
            let oszlop = document.createElement('div');
            oszlop.className = "col";
            if (oszlopNeve === "muveletek") {
                gombHozzaado(oszlop)
            } else {
                oszlop.innerHTML = allat[oszlopNeve];

            }
            sor.appendChild(oszlop);
        }
        )
        container.appendChild(sor);
    }
    )
}

rendel()