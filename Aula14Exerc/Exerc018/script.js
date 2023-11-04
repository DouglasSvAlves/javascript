function tabuada(){
    var numero = document.getElementById('num')
    let tab = document.getElementById('seltab')
    //let tab = document.querySelector('select#seltab') É possivel fazer assim tbm
    
    if (numero.value.length <= 0) {
       window.alert('Por Favor, digite um numero!') 
    } else {
        var num = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}` // Isso aqui é mais para o php ou outras linguagem, para saber qual foi selecionado
            tab.appendChild(item)           
            c++
        }
    }
}