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

}