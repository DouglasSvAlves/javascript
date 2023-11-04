let num = document.getElementById('val')
let tab = document.getElementById('tabval')
let res = document.getElementById('res')
let valores = []

/* MANEIRA QUE EU FIZ E QUE TAMBÉM ESTÁ CORRETO
function adicionar() {
    if (num.value.length == 0 || num.value > 100 || valores.indexOf(num.value) != -1) {
        window.alert('Valor invalido ou já encontrado na lista')
    } else {
        let item = document.createElement('option')
        valores.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
    }
    res.innerHTML = ''    
}
*/


// Maneira do professor

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML ='' // aqui é para limpar o resultado na hora que vc adicionar um novo valor
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''// Isso aqui é para apagar o valor da caixa do input
    num.focus() // Já esse comando é para que ele volte a está marcado a caixa do input para colocar um novo numero
}

function finalizar() {
    if (valores.length <= 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let md = 0
        /* Maneira que eu fiz
        for (let c = 0; c < valores.length; c++) {
            if (maior < valores[c]) {
                maior = Number(valores[c])
            } else if (menor > valores[c]) {  
                menor = Number(valores[c])
            }
            soma += Number(valores[c])
            var md = soma / valores.length   
        }
        */

        // Maneira do Professor

        for (let pos in valores) {
            soma += valores[pos]             
            if (valores[pos] > maior) 
                maior = valores[pos]             
            if (valores[pos] < menor) 
                menor = valores[pos]                                    
        }
        md = soma / valores.length

        res.innerHTML =''
        res.innerHTML = `<p>Ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${md}.</p>`
    }

}

