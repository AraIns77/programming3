let LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature {
    
    mul() {
       super.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
           super.multiply = 0;
        }
    }

}