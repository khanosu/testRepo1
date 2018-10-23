//@ts-check
'use strict'

let  person4 = {
    name: "Foo"
}

console.log(person4.constructor);

console.log("---   ---   ---");

function Person(){

}

let person5 = new Person();
console.log(person5.constructor);
console.log(person5.constructor === Person);
