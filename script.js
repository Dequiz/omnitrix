let omnitrix = document.querySelector('.omnitrix')
omnitrix.addEventListener('click', abrirOmnitrix)
let alienAtual = 0
let anguloAtual = 0

let chama = "<img src='chama.png'>"
let diamante = "<img src='diamante.png'>"
let fantasmatico = "<img src='fantasmatico.png'>"
let fera = "<img src='fera.png'> "
let insectoide = "<img src='insectoide.png'>"
let massaCinzenta = "<img src='massaCinzenta.png'>"
let monstroAgua = "<img src='monstroAgua.png'>"
let quatroBracos = "<img src='quatroBracos.png'>"
let ultraT = "<img src='ultraT.png'>"
let xlr8 = "<img src='xlr8.png'>"

let rodaDeSelecao = [chama, diamante, fantasmatico, fera, insectoide, massaCinzenta, monstroAgua, quatroBracos, ultraT, xlr8]

let trianguloSelecao = document.querySelector('.trianguloSelecao')
let losangoInterno = document.querySelector('.losangoInterno')
    let circuloInterno = document.querySelector('.circuloInterno')
    let triagulo1 = document.querySelector('.triangulo1')
    let triagulo2 = document.querySelector('.triangulo2')
function abrirOmnitrix(){
    triagulo1.style.right = '400px'
    triagulo2.style.left = '400px'
    trianguloSelecao.style.bottom = '0px'
    circuloInterno.style.backgroundColor = 'rgb(75,75,75)'
    losangoInterno.innerHTML = rodaDeSelecao[0]
    circuloInterno.className = 'circuloTransformacao'
    tocarAudioEntrada()
}

function rodaEscolherFrente() {
    console.log("Função rodaEscolherFrente() foi chamada.");
    alienAtual = (alienAtual + 1) % rodaDeSelecao.length
    console.log("Alien Atual:", losangoInterno.innerHTML);
    console.log("Próximo Alien:", rodaDeSelecao[alienAtual]);
    losangoInterno.innerHTML = rodaDeSelecao[alienAtual];
    rodarRodaSelecao()
}
function rodaEscolherTras() {
    console.log("Função rodaEscolherFrente() foi chamada.");
    alienAtual = (alienAtual - 1) % rodaDeSelecao.length
    console.log("Alien Atual:", losangoInterno.innerHTML);
    console.log("Próximo Alien:", rodaDeSelecao[alienAtual]);
    losangoInterno.innerHTML = rodaDeSelecao[alienAtual];
    rodarRodaSelecaoTras()
}
function rodarRodaSelecao(){
    let movimento = document.querySelector('.movimento')
    anguloAtual = (anguloAtual + 90)
    movimento.style.transform = `rotate(${anguloAtual}deg)`
    let audioVirada = document.querySelector('.audioVirada')
    audioVirada.play()
}
function rodarRodaSelecaoTras(){
    let movimento = document.querySelector('.movimento')
    anguloAtual = (anguloAtual - 90)
    movimento.style.transform = `rotate(${anguloAtual}deg)`
    let audioVirada = document.querySelector('.audioVirada')
    audioVirada.play()
}
function tocarAudioEntrada(){
    let audioEntrada = document.querySelector('.audioEntrada')
    audioEntrada.play()
}
document.addEventListener('keydown', (event) =>{
    if(event.key === 'ArrowUp'){
        abrirOmnitrix()
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        console.log("Tecla ArrowRight foi pressionada.")
        rodaEscolherFrente()
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft'){
        rodaEscolherTras()
    }
})