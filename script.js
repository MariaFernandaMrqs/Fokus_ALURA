 const html = document.querySelector('html')//pega todo o html por ser a unica tag do texto
const appImg = document.querySelector('.app__image')
const focoBt = document.querySelector('.app__card-button--foco') 
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const timer = document.querySelector('#timer')
const appTitle = document.querySelector('.app__title')
const botaoInicio = document.querySelector('.app__card-primary-button')

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto){
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


const duracaoFoco = 1500;
const duracaoDescansoCurso = 300;
const duracaoDescansoLongo = 900;