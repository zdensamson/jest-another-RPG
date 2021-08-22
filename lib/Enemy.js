const Potion = require('./Potion');
const Character = require('./Character');

// OLD CODE ES5--------------------
// function Enemy(name, weapon) {
//     this.name = name; 
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);
    
//     Enemy.prototype = Object.create(Character.prototype);

//     Enemy.prototype.getDescription = function() {
//       return `A ${this.name} holding a ${this.weapon} has appeared!`;
//     };
// };

// ES6 CODE -------
class Enemy extends Character {
  constructor(name, weapon) {
    super(name);


    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
};


module.exports = Enemy;