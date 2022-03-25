Function.prototype.inherits = function(parent){
  let child = this;
  // function Surrogate() {}
  // Surrogate.prototype = parent.prototype;
  // child.prototype = new Surrogate();
  // child.prototype.constructor = child;
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
};

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

Dog.inherits(Animal);
Cat.inherits(Animal);

Cat.prototype.meow = function () {
  console.log('Meow!');
};

Dog.prototype.woof = function (){
  console.log('Woof!');
};

const newCat = new Cat('New Cat');
const newDog = new Dog('New Dog');
const newAnimal = new Animal('New Animal');

newCat.eat();
newDog.eat();
// newAnimal.meow();
// newDog.meow();
newCat.meow();