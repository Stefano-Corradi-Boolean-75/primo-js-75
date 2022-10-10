

// chiedo all'utete la data di nascita e restituisco l'età

const annoAttuale = 2022;
const nomeUtente = prompt('Come ti chiami?');

//console.log(typeof annoAttuale);

// 1 salvo in una const la data inserita dall'utente con un prompt
const dataNascita = prompt(`${nomeUtente}, in che anno sei nato?`);
console.log(dataNascita);
console.log("typeof dataNascita " + typeof nomeUtente);

// 2 in una variabile faccio la sottrazione dell'anno attuale con la data di nascita
const anniUtente = annoAttuale - dataNascita;


// 3 stampo in pagina
document.getElementById('risultato').innerHTML = `
 Ciao <strong>${nomeUtente}</strong>, <br>
 ricorda di avere ${anniUtente} anni!
`;