const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//link the p from the html to js
let paragraph = document.querySelector("p")

people.forEach((element) => {
  console.log(element.name) //print on console 
  paragraph.innerHTML += `${element.name} <br>` //print on web page
})

