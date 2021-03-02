// Generare n. random

var nPlayer = Math.floor(Math.random() * 6) + 1;

var nComputer = Math.floor(Math.random() * 6) + 1;

console.log(nPlayer, nComputer);

//Stabilire il vincitore

if (nPlayer > nComputer) {
    console.log("Ha vinto il player");
} else if (nPlayer < nComputer) {
    console.log("Ha vinto il computer");
}   else {
    console.log("E' finita in parità");
}