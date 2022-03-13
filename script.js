//base: https://www.jogos360.com.br/genius_memory_classic.html
let order = [];
let clickedOrder = [];
let currentScore = 0;
let bestPoints = 0;

let clickActive = true;
let gameOverCheck = false;


let orderMenu = [0,1,2,3];
//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const blueMenu = document.querySelector('.blue-menu');
const redMenu = document.querySelector('.red-menu');
const greenMenu = document.querySelector('.green-menu');
const yellowMenu = document.querySelector('.yellow-menu');

const soundBlue = document.getElementById('sound-blue')
const soundRed= document.getElementById('sound-red')
const soundGreen = document.getElementById('sound-green')
const soundYellow = document.getElementById('sound-yellow')
const soundGameOver = document.getElementById('sound-game-over')


const round = document.querySelector('.round');
const bestScore = document.querySelector('.score');
const button = document.querySelector('.start')

round.innerHTML = `Round: ${order.length + 1}`

var gameScene = document.getElementById('game-scene');
var initialScene = document.getElementById('initial-scene');


//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    round.innerHTML = `Round: ${order.length}`
    clickActive = false;
 
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        let elementSound = createSoundElement(order[i]);
        if(gameOverCheck){
            break;
        }
        lightColor(elementColor, Number(i) + 1 , elementSound);
    }

    //metodo para o jogador não clickar enquanto é mostrado a sequencia para ele
    setTimeout(() => {
        clickActive = true;
    }, order.length*600);
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
            gameOverCheck = true;
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
    if(clickActive){
        clickedOrder[clickedOrder.length] = color;
        createColorElement(color).classList.add('selected');
        sound.play();

        setTimeout(() => {
            createColorElement(color).classList.remove('selected');
            checkOrder();
        },250);
    }
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
    soundGameOver.play();
    order = [];
    clickedOrder = [];

    setTimeout(() => {
        changeScene(gameScene,initialScene);
    } ,800);
}

//funcao de inicio do jogo
let playGame = () => {
    gameOverCheck = false;
    changeScene(initialScene,gameScene);
    order = [];
    clickedOrder = [];
    round.innerHTML = `Round: ${order.length}`
    currentScore = 0;
    nextLevel();
}

let changeScene = (scene1,scene2) => {
    scene1.style.display === "none" ? scene1.style.display = "flex" : scene1.style.display = "none";
    scene2.style.display === "none" ? scene2.style.display = "flex" : scene2.style.display = "none";
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


//Programação para animação no menu

//criação da cor
let shuffleOrderMenu = () => {
    let i = 0;
    let repetições = 0;
    for(let i = 0; i<=3 ; i++) {
        let elementColorMenu = createColorElementMenu(orderMenu[i]);
        lightColorMenu(elementColorMenu, Number(i) + 1);
        if(initialScene.style.display === 'none'){
            break;
        }
    }
    //tempo pra chamar a função denovo
    setTimeout(() => {
        shuffleOrderMenu();
    }, (Number(3) + 1)* 500);
}

//acende a proxima cor
let lightColorMenu = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 200);
    setTimeout(() => {
        element.classList.remove('selected');
    } ,number);
}

//funcao que retorna a cor
let createColorElementMenu = (color) => {
    if(color == 0) {
        return greenMenu;
    } else if(color == 1) {
        return redMenu;
    } else if (color == 2) {
        return blueMenu;
        
    } else if (color == 3) {
        return yellowMenu;
    }
}

shuffleOrderMenu();