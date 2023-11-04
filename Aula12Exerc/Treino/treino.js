function verificar(){
    var sexo = document.getElementsByName('txtsex')
    var res = document.getElementById('res')
    var img = document.createElement('img') // Para criar o Elemento img
    img.setAttribute('id', 'foto') // para atribuir id 
    var genero = ''

    if (sexo[0].checked){
        genero = 'Homem'
        img.setAttribute('src', 'homem.png') // Para colocar a foto
    } else {
        genero = 'Mulher'
        img.setAttribute('src', 'mulher.png')
    }
    res.innerHTML =`Seu genero é ${genero} </br>`
    res.appendChild(img) // Para mostrar a foto na Web
}