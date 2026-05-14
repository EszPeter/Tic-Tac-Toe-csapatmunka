let jatekos = "X";
let tabla = ["", "", "", "", "", "", "", "", ""];
let aktiv = true;


let pontok = JSON.parse(localStorage.getItem('pontok')) || { X: 0, O: 0 };
pontFrissites();


function kattintas(index) {

    if (tabla[index] !== "" || !aktiv) {
        return;
    }



}