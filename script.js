// ESERCIZIO COGNOMI

var surname = ['Rossi', 'Bianco', 'Esposito', 'Russo', 'Zaccaria'];

var userSurname = prompt("INSERISCI IL TUO COGNOME");

surname.push(userSurname);

surname = surname.sort();

console.log(surname);

var userPosition = surname.indexOf(userSurname);

console.log(userPosition + 1);