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

let side = 20;

let matrix = generator(30, 100, 20, 20, 5);

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let cactusArr = []
function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(5)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            }else if (matrix[y][x] == 2) {
                let ea = new GrassEater(x, y)
                grassEaterArr.push(ea)
            }
            else if(matrix[y][x] == 3){
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            else if(matrix[y][x] == 4){
                let ct = new Cactus(x, y)
                cactusArr.push(ct)
            }
        }
    }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3){
                fill("red")
            }
            else if (matrix[y][x] == 4){
                fill("gray") 
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            
            rect(x * side, y * side, side, side);
        }
    }


    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let b in grassEaterArr) {
        grassEaterArr[b].mul()
        grassEaterArr[b].eat()
    }
    for (let g in predatorArr){
        predatorArr[g].mul()
        predatorArr[g].eat()
    }
}