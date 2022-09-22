let LivingCreature = require("./LivingCreature")
module.exports = class Cactus extends LivingCreature {
    constructor(x, y) {
        super(x, y)
     this.energy = 8;
     this.multiply = 0
     this.directions = [];
 } 
 }