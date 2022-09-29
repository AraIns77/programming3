var express = require('express');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server);



app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, () => {
    console.log("run.server");
})
function generator(matLen, gr, grEat, pr, ct) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < ct; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    return matrix;
}


 matrix = generator(30, 100, 20, 20, 5);


io.sockets.emit('send matrix', matrix)

grassArr = []
grassEaterArr = []
predatorArr = []
cactusArr = []

var Grass = require("./grass")
var GrassEater = require("./grasseater")
var Predator = require("./predator")
var Cactus = require("./cactus")

function createObjsect(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let ea = new GrassEater(x, y)
                grassEaterArr.push(ea)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                let ct = new Cactus(x, y)
                cactusArr.push(ct)
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}


function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
       
    }
    for (let b in grassEaterArr) {
        grassEaterArr[b].mul()
        grassEaterArr[b].eat()
    }
    for (let g in predatorArr) {
        predatorArr[g].mul()
        predatorArr[g].eat()
    }

    io.sockets.emit('send matrix', matrix)
}

setInterval(game, 200)
io.on('connection', function () {
    createObjsect(matrix)
})