function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(`A soma entre 7 e 6 é ${soma(7, 6)}`)


// também é possivel fazer function assim

let v = function(x) {
    return x*2
}

console.log(`A multiplicação de 5 por 2 é ${v(5)}`)

// Fatorial 5! = 5 x 4 x 3 x 2 x 1

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(`O fatorial de 5 é ${fatorial(5)}`)


// Conceito de RECURSIVIDADE
function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}
console.log(`Na maneira recursiva o fatorial 5 é ${fatorial2(5)}`)
/* Se 5! = 5 x 4 x 3 x 2 x 1
Então podemos dizer que 5! = 5 x 4!

logo n! = n x (n-1)!
Mas Fatorial de 1! = 1
*/