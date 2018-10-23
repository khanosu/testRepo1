//@ts-check
'use strict'

function Car(model){
    this.model = model;
}

Car.prototype.make = 'ford';

let car1 = new Car('explorer');
let car2 = new Car('focus');

console.log(car1.model);
console.log(car1.make);
console.log(car2.model);
console.log(car2.make);

//car1.make = 'GM'; // this will shadow the prototype "make" property

//This is the correct way.
Car.prototype.make = 'GM';


console.log('---   ---   ---');
console.log(car1.model);
console.log(car1.make);
console.log(car2.model);
console.log(car2.make);

function hasPrototypeProperty(object, name) {
    return name in object && !object.hasOwnProperty(name);
}

console.log('---   ---   ---');
console.log(hasPrototypeProperty(car2, 'model'));
console.log(hasPrototypeProperty(car2, 'make'));