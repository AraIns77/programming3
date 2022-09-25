var socket = io()

function setup() {
    createCanvas(matrix[1].length * side, matrix.length * side);
    background('#acacac');
    frameRate(5)
   

}

function nkarel() {
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



}

setInterval(
    function(){
        socket.on('send matrix',nkarel)
    },1000
)