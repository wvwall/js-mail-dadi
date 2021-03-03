// Creare array email

var emails = ["pippo@gmail.com", "pluto@gmail.com","paperino@gmail.com"] ;
console.log(emails);

//Chiedi email all'utente

var email = prompt("Inserisci la tua email:");
console.log(email);

//Verifica se può accedere

var diLivio = false;

for (var i = 0; i < emails.length; i++) {
    if (emails[i] === email) {
        diLivio = true;
        break;
    }
}

if (diLivio) {
    document.getElementById("consentito").innerHTML = "CONSENTITO: <br> Email presente.";
   // console.log("La sua email permette l'accesso.");
} else {
    document.getElementById("consentito").innerHTML = "NEGATO: <br> Email non presente.";
   // console.log("La sua email non permette l'accesso.");
}
