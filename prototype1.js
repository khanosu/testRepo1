//@ts-check
'use strict'

function Person(name) {
    this.name = name;
    this.age = 45;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getAge = function(){
    return this.age;
}

let person6 = new Person('foo');

console.log(person6.name);
console.log(person6.age);

console.log(Person.prototype.hasOwnProperty("getName"));
console.log(person6.hasOwnProperty('getName'));
console.log('getName' in person6);