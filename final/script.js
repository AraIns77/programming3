var socket = io()
let side = 20;

function setup() {
    createCanvas(30 * side, 30 * side);

   

}
socket.on("weather", function (data) {
    weath = data;
})

function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                if (weath == "summer") {
                    fill("green");
                }else if (weath == "autumn") {
                    fill("yellow");
                }else if (weath == "winter") {
                    fill("white");
                }else if (weath == "spring") {
                    fill("lightgreen");
                }
                
            } 
            else if (matrix[y][x] == 2) {
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



}


        socket.on('send matrix',nkarel)

function addGrass() {
    socket.emit("add Grass")
}
function addGrassEater() {
    socket.emit("add GrassEater")
}
function Predator() {
    socket.emit("add Predator")
}
function addCactus() {
    socket.emit("add Cactus")
}