let jatekos = "X";
let tabla = ["", "", "", "", "", "", "", "", ""];
let aktiv = true;


let pontok = JSON.parse(localStorage.getItem('pontok')) || { X: 0, O: 0 };
pontFrissites();


function kattintas(index) {

    if (tabla[index] !== "" || !aktiv) {
        return;
    }

    tabla[index] = jatekos;
    document.getElementById("c" + index).innerText = jatekos;

ellenorzes();
}
function ellenorzes() {
    const nyeroMintak = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    let nyertValaki = false;

    for (let minta of nyeroMintak) {
        let a = tabla[minta[0]];
        let b = tabla[minta[1]];
        let c = tabla[minta[2]];

        if (a !== "" && a === b && b === c) {
            nyertValaki = true;
            break;
        }
    }
     if (nyertValaki) {
        document.getElementById("status").innerText = "Győztes: " + jatekos;
        pontok[jatekos]++;
        mentes();
        aktiv = false;
    } else if (!tabla.includes("")) {
        document.getElementById("status").innerText = "Döntetlen!";
        aktiv = false;
    } else {

        jatekos = (jatekos === "X") ? "O" : "X";
        document.getElementById("status").innerText = jatekos + " jön";
    }
}
