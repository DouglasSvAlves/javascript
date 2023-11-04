let num = [5, 8, 2, 9, 3]

num.push(4)
num.sort() // Organiza do menor para o maior
num.push(1) // coloca o valor 1 no ultimo elemento
//console.log(num) 
console.log(`O vetor tem ${num.length} posições`) // Mostra a quantidade de elementos tem
console.log(`O primeiro valor do vetor é ${num[0]}`)

/* Essa é a versão padrão
    for (let pos = 0; pos < num.length ; pos++) {
    console.log(`A possição ${pos} tem o valor: ${num[pos]}`)
}*/

// Essa é a versão mais moderna, e compacta
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}

console.log(num)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
