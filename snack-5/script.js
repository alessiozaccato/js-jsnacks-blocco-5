const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const numsEven = nums.filter((element) => {
    return (element % 2 === 0) ? (element) : (null); //first time that i will use the ternary operator
})

console.log(numsEven);

//shorter form 
// const numsEven = nums.filter((element) => (element % 2 === 0));
