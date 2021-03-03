// Generare n. random

var nPlayer = Math.floor(Math.random() * 6) + 1;

var nComputer = Math.floor(Math.random() * 6) + 1;

console.log(nPlayer, nComputer);

//Stabilire il vincitore

if (nPlayer > nComputer) {
    console.log("Ha vinto il player");
    document.getElementById("risultato").innerHTML = "HA VINTO IL PLAYER";
} else if (nPlayer < nComputer) {
    console.log("Ha vinto il computer");
    document.getElementById("risultato").innerHTML = "HA VINTO IL COMPUTER";
}   else {
    console.log("E' finita in parità");
    document.getElementById("risultato").innerHTML = "PAREGGIO";
}

// Stampare il risultato

document.getElementById("punteggio").innerHTML = "Player: " + nPlayer;
document.getElementById("punteggio_2").innerHTML = "Computer: " + nComputer;