const html = document.querySelector('html')//pega todo o html por ser a unica tag do texto
const appImg = document.querySelector('.app__image')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const timer = document.querySelector('#timer')
const appTitle = document.querySelector('.app__title')
const botaoInicio = document.querySelector('.app__card-primary-button')
const botoes = document.querySelectorAll('.app__card-button')
const startpauseBt = document.querySelector('#start-pause')
const musicaFoco = document.querySelector('#alternar-musica')//# por ser um id
const musica = new Audio('/sons/luna-rise-part-one.mp3') //musica é uma variavel do tipo Audio criando um novo objeto em js que nesse caso recebeu o caminho do arquivo de audio
const play = new Audio('/sons/play.wav')
const pause = new Audio('/sons/pause.mp3')
const tempoFinalizado = new Audio('./sons/beep.mp3')


let tempoDecorrido = 5
let intervaloId = null

musica.loop = true //musica vai tocar em loop

musicaFoco.addEventListener('change', ()=> {
    if(musica.paused){ //paused - propriedade do obj audio nativo do js, usando os metodos dele que sao play e pause
        musica.play()
    } else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    appImg.setAttribute('src', `/assets/${contexto}.png`)
    switch (contexto) {
        case "foco":
            appTitle.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            appTitle.innerHTML = `Que tal da uma respirada?<br>
                <strong class="app__title-strong">faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            appTitle.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
    }

}

const contagemRegressiva = () =>{
    if (tempoemSeg <= 0){
        tempoFinalizado.play()
        alert('tempo finalizado') //alert que acabou a contagem
        zerar()//zera o alert
        return
    }
    tempoemSeg -= 1 //diminue 1segundo a cada tempo
}
startpauseBt.addEventListener ('click', iniciarOuPausar)

function iniciarOuPausar(){
    if (intervaloId){ 
        pause.play();
        zerar() //interrompe o temporizador quando clickar
        return
    }
    play.play();
    intervaloId - setInterval(contagemRegressiva, 1000) //intervalo de contagem
}
function zerar(){
    clearInterval(intervaloId)
    intervaloId = null
}


