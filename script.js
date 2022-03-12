let order = [];
let clickedOrder = [];
let currentScore = 0;
let bestPoints = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const soundBlue = document.getElementById('sound-blue')
const soundRed= document.getElementById('sound-red')
const soundGreen = document.getElementById('sound-green')
const soundYellow = document.getElementById('sound-yellow')


const round = document.querySelector('.round');
const bestScore = document.querySelector('.score');
const button = document.querySelector('.start')

round.innerHTML = `Round: ${order.length + 1}`

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    round.innerHTML = `Round: ${order.length}`

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        let elementSound = createSoundElement(order[i]);
        lightColor(elementColor, Number(i) + 1 , elementSound);
    }
}

//acende a proxima cor
let lightColor = (element, number , sound) => {
    number = number * 600;
    setTimeout(() => {
        element.classList.add('selected');
        sound.play()
    }, number - 200);
    setTimeout(() => {
        element.classList.remove('selected');
    } ,number);
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            bestScor(order.length);
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color , sound) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    sound.play();

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função que retorna o som
let createSoundElement = (number) => {
    if(number === 0) {
        return soundGreen;
    } else if(number === 1) {
        return soundRed;
    } else if(number === 2) {
        return soundYellow;
    } else if(number === 3) {
        return soundBlue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    currentScore ++;
    shuffleOrder();
}

//atualiza a melhor pontuação do jogador
const bestScor = (length) => {
    points = length;
    if(currentScore > bestPoints) {
        bestPoints = currentScore;
        bestScore.innerHTML = `Best Score: ${bestPoints}`;
    }   
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${currentScore}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`); 
    order = [];
    clickedOrder = [];
}

//funcao de inicio do jogo
let playGame = () => {
    order = [];
    clickedOrder = [];
    round.innerHTML = `Round: ${order.length}`
    currentScore = 0;
    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0 , soundGreen);
red.onclick = () => click(1 , soundRed);
yellow.onclick = () => click(2 , soundYellow);
blue.onclick = () => click(3 , soundBlue);

//Evento de click do botão: Inicia o Game
button.addEventListener('click', () => {
    playGame()
})