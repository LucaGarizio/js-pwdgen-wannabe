// PASSWORD GENERATOR

// CHIEDI NOME
const userName = (prompt("Il tuo nome"))
// console.log(userName);


// CHIEDI COGNOME
const userSurName = (prompt("Il tuo cognome"))
// console.log(userSurName);


// CHIEDI COLORE PREFERITO
const favColor = (prompt("Il tuo colore preferito"))
// console.log(favColor);


// NUMERO PASSWORD SU RICHIESTA DELL'ESERCIZIO
const passwordNumber = 23;
// console.log(passwordNumber);


// RICAVO PASSWORD
let password = `${userName}${userSurName}${favColor}${passwordNumber}`;
// console.log(password);


// STAMPA SU PAGINA PASSWORD GENERATA
document.getElementById("passwordGenerator").innerHTML = `Ciao ${userName} ${userSurName} la tua password è: ${password}` 
