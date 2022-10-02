let LivingCreature = require("./LivingCreature")
module.exports =class Predator extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 20;
        this.multiply = 0
        this.directions = [];
    }
  
    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]//random(emptyCells);
// var emptyCells = this.chooseCell(1)
        if (newCell && this.multiply >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newGrass = new Predator(newX, newY);
            predatorArr.push(newGrass);
            this.multiply = 0;
        }
        if (weath == "winter") {
            this.multiply -= 4;
            this.energy -= 4;
        }
        if (weath == "autumn") {
            this.multiply -= 2;
            this.energy -= 2;
        }

        if (weath == "spring") {
            this.multiply -= 2;
            this.energy += 2;
        }
        if (weath == "summer") {
            this.multiply += 4;
            this.energy += 4;
        }
    }
    move() {
        this.energy--
        var emptyCells = super.chooseCell(0)
        var emptyCells1 = super.chooseCell(1)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        var newCell1 = emptyCells1[Math.floor(Math.random() * emptyCells1.length)]

        if (newCell && this.energy >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }else if (newCell1 && this.energy >= 0) {
            var newX = newCell1[0]
            var newY = newCell1[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 1
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCells = super.chooseCell(2)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}