let altura
let largura
let vidas = 1
let tempo = 10

let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500
} else if ( nivel === 'dificil') {
    //1000
    criaMosquitoTempo = 1000
} else if (nivel === 'hard') {
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(`Tamanho da tela - ${largura} x ${altura}`)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {

        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    //se posX < 0 = 0 se não continua
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(`Posição - ${posicaoX}x ${posicaoY}y`)

    //criar elemento html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        //essa função remove o elemento que chamou a função, mas também pode ser feito da maneira abaixo dele comentado
        this.remove()
        //document.getElementById('mosquito').remove()
    }

    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            //Coloquei um espaço no final da string para que quando for feita a concatenação em "mosquito.className = tamanhoAleatorio() + ladoAleatorio()", na linha 28, ele não junte as duas strings
            return 'mosquito1 '
        case 1:
            return 'mosquito2 '
        case 2:
            return 'mosquito3 '
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}