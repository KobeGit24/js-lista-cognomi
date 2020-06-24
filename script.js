// ESERCIZIO COGNOMI

// FIRST METHOD WITH "FOR"

var surname = ['Rossi', 'Bianco', 'Esposito', 'Russo', 'Zaccaria'];

console.log(surname);

var userSurname = prompt("INSERISCI IL TUO COGNOME");

var user = userSurname.toUpperCase();

surname.push(user);

surname = surname.sort();

console.log(surname);

for (var i = 0; i < surname.length; i++) { 
    
    if (surname[i] == user ) {
        console.log(i + 1);
    } 
} 

// SECOND METHOD WITHOUT "FOR"

// var surname = ['Rossi', 'Bianco', 'Esposito', 'Russo', 'Zaccaria'];

// console.log(surname);

// var userSurname = prompt("INSERISCI IL TUO COGNOME");

// var user = userSurname.toUpperCase();

// surname.push(user);

// surname = surname.sort();

// console.log(surname);

// var userPosition = surname.indexOf(user);

// console.log(userPosition + 1);