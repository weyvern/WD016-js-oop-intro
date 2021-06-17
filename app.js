console.log('hello');

// ES5 constructor function
function Car2(model, maker, color) {
  this.model = model;
  this.maker = maker;
  this.color = color;
  // This method will be created on a per instance basis
  // this.move = () => console.log('Vrooom vrooom');
}
// This method will be shared across instances
Car2.prototype.test = () => console.log(this);
Car2.prototype.test2 = function () {
  console.log(this);
};
Car2.prototype.move = function () {
  console.log(`${this.model} goes Vrooom vrooom`);
};

// ES6 class syntax
class Car {
  constructor(model, maker, color) {
    this.model = model;
    this.maker = maker;
    this.color = color;
    // This method will be created on a per instance basis
    // this.move = () => console.log('Vrooom vrooom');
  }
  // This method will be shared across instances
  move() {
    console.log(`${this.model} goes Vrooom vrooom`);
  }
}

console.log(typeof Car);
console.log(typeof Car2);

const ferrari = new Car2('Testarossa', 'Ferrari', 'Red');
const jetta = new Car('Jetta', 'VW', 'Blue');
const tsuru = new Car('Tsuru', 'Nissan', 'White');
ferrari.test();
ferrari.test2();
ferrari.move();
jetta.move();
tsuru.move();

class Animal {
  run() {
    console.log(`Animal runs!`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`Rabbit hides!`);
  }
}
let rabbit = new Rabbit();
console.log(rabbit);
rabbit.run(); // Animal runs!
rabbit.hide(); // Rabbit hides!
