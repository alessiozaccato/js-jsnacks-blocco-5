const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//link the ul thwt i need from html
let longList = document.getElementById("long_list");
let otherList = document.getElementById("other_list");

//first array of zucchine lenght > 15
const longZucchine = zucchine.filter((element) => {
  return (element.length > 15) ? (element) : (null);
})

console.log(longZucchine);//print on console
longZucchine.forEach((element) => {

  let { type, weight, length } = element; //with destructuring 
  longList.innerHTML += `<li>${type} ,${weight},${length}  </li>`//print on web Page

})



//second array of zucchine lenght < 15
const othersZucchine = zucchine.filter((element) => {
  return (element.length < 15) ? (element) : (null);
})

console.log(othersZucchine)

othersZucchine.forEach((element) => {

  let { type, weight, length } = element; //with destructuring 
  otherList.innerHTML += `<li>${type} ,${weight},${length}  </li>`//print on web Page

})


