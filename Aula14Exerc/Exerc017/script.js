function contar(){
    var inc = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    var res = document.querySelector('div#res')


    if (inc.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERROR] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: </br>'
        var i = Number(inc.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        
        if ( i < f) {  // Contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        } else { // contagem decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}` // Pega do Site Unicode Emoji e tira o inicio U+ e coloca \u , só funciona no ``
    }
}



    /*res.innerHTML = ''
    if (incv == '') {
        res.innerHTML = 'Impossivel contar!'
    } else if (incv < fimv){
        if (passo == 0) {
            window.alert('Passo Invalido! Condisderando PASSO 1')
            for(c ;c <= fimv; c++){
                res.innerHTML += `${c} `
            }
        } else {
            while (incv <= fimv) {
                res.innerHTML += `${incv} &#128073`
                incv += paso
            }
            res.innerHTML += '&#127937'
        }

    } else if (paso == 0) {
        window.alert('Passo Invalido! Condisderando PASSO 1')
        for(c ;c >= fimv; c--){
            res.innerHTML += `${c} `
        }
    } else {
        /*for(incv ;incv<=fimv; incv++){
            res.innerHTML += `${incv} &#128073 `
        }
        while (incv <= fimv) {
            res.innerHTML += `${incv} &#128073`
            incv += paso
        }
        res.innerHTML += '&#127937'
    }*/