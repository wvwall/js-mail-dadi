// Creare array email

var email = ["pippo@gmail.com", "pluto@gmail.com","paperino@gmail.com"] ;
console.log(email);

//Chiedi email all'utente

var mail = prompt("Inserisci la tua email:");
console.log(mail);

//Verifica se può accedere

var diLivio = false;

for (var i = 0; i < email.length; i++) {
    if (email[i] == mail) {
        diLivio = true;
    }
}

if (diLivio) {
    document.getElementById("consentito").innerHTML = "CONSENTITO: Email presente.";
    console.log("La sua email permette l'accesso.");
} else {
    document.getElementById("consentito").innerHTML = "NEGATO: Email non presente.";
    console.log("La sua email non permette l'accesso.");
}
