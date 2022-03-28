var games = [
    {
        "id": "0",
        "name": "Jogo da cobrinha",
        "img": "https://s2.glbimg.com/HDXr8p36WSK9lXo9RDAvMMhSZGw=/0x0:1400x816/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/P/3/gF0mfQTSmAZZXQ41JFPw/jogos-da-cobrinha-gratis-destaque.jpg",
        "url": "./teste.html"
    },
    {
        "id": "1",
        "name": "Genius",
        "img": "https://s2.glbimg.com/cX5ZbmXzi8cpVk1gJo6u5_l_kaI=/0x600/s.glbimg.com/po/tt2/f/original/2014/09/11/df6043ec012dfef612313b075c91.jpeg",
        "url": "http://127.0.0.1:5500/genius.html"
    },
    {
        "id": "2",
        "name": "Jogo da Velha",
        "img": "https://www.bananaquantica.com.br/wp-content/uploads/2020/12/41ZApWfYLUL.png",
        "url": "./teste.html"
    },
    {
        "id": "3",
        "name": "Space Shot",
        "img": "https://play-lh.googleusercontent.com/VsJBTv7Ta15_SDZbxM0C-GGHhYYx2e1brTFYUx8vDafNCzJrv3mRK2iX2oX8mxb3hgU",
        "url": "./teste.html"
    },
    {
        "id": "4",
        "name": "Mario Boss",
        "img": "https://i.ytimg.com/vi/cWOkHQXw0JQ/maxresdefault.jpg",
        "url": "./teste.html"
    },
    {
        "id": "5",
        "name": "Jogo da Memória",
        "img": "https://i.ytimg.com/vi/rvm0q-vNVEI/maxresdefault.jpg",
        "url": "./teste.html"
    },
    {
        "id": "6",
        "name": "Aladin",
        "img": "http://brutalgamer.com/wp-content/uploads/2017/04/Aladdin-RR-1.jpg"
    },
    {
        "id": "7",
        "name": "Stunts",
        "img": "https://i.ytimg.com/vi/-hKK4_gvOS0/maxresdefault.jpg",
        "url": "./teste.html"
    },
    {
        "id": "8",
        "name": "Donkey Kong",
        "img": "https://ucegamers.com.br/siteuceg/wp-content/uploads/2018/07/image1.png",
        "url": "./teste.html"
    },
    {
        "id": "9",
        "name": "Pac-man",
        "img": "https://i.pinimg.com/474x/63/46/7f/63467f56eb0d31c0574b0daf787ffb0b--vintage-games-pac-man.jpg",
        "url": "./teste.html"
    },
    {
        "id": "10",
        "name": "Sim city",
        "img": "https://www.retrogamer.net/wp-content/uploads/2013/10/snes_sim_city.png",
        "url": "./teste.html"
    },

    {
        "id": "11",
        "name": "Prince of Persia",
        "img": "https://macmagazine.com.br/wp-content/uploads/2010/05/28-prince.png",
        "url": "./teste.html"
    },

    {
        "id": "12",
        "name": "Bust a move",
        "img": "https://gaminghistory101.files.wordpress.com/2015/04/bam2ae_2.jpg",
        "url": "./teste.html"
    }
];

var row = document.querySelector('#row');
var current_url = window.location.href;

for (let i = 0; i < games.length && i <= 13; i++) {
    if (!(games[i].url === current_url)) {
        row.innerHTML += `
        <div class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-3">
            <a class="games-card" href="${games[i].url}">
                <img
                src="${games[i].img}" />
                ${games[i].name}
            </a>
        </div>
        `;
    }
}

