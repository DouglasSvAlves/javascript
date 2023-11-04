/* Essa era a maneira que eu fazia. Fazendo o aninhamento pelo if e não pelo else
var idade = 16
if (idade < 18){
    if (idade >= 16 && idade < 18){
        console.log('Menor de idade')
        console.log('Pode Votar opcionalmente')    
    } else{
        console.log('Menor de idade')
        console.log('Não pode votar')
    }
} else {
    console.log('Maior de idade')
    console.log('Pode votar')
}
*/

// Esse é a maneira que o professor ensinou. O aninhamento é feito no else
var idade = 64
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('É menor de idade')
    console.log('E não vota')
} else if (idade < 18) {
    console.log('É menor de idade')
    console.log("Mas pode votar opcionalmente")
}
else if (idade < 65) {
    console.log('É maior de idade')
    console.log("E pode votar")
}
else {
    console.log('É maior de idade')
    console.log("E o voto é facultativo")
}

// Também é possivel usar o || como ou como nesse exemplo a baixo:
if (idade < 16){
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}