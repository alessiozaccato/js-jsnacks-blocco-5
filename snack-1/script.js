const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//let's link ul from html with tag name
let nameList = document.getElementById("list")

names.forEach((element) => {
    console.log(element)//print on foreach
})

console.log(names.join(" , "));//print on console

//print on web page using literal and for on the array
for (i = 0; i < names.length; i++) {
    nameList.innerHTML += `<li>${names[i]}</li>`
}

