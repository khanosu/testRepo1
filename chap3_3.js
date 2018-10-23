//@ts-check
'use strict'

var person3 = {
    name: "Nicholas"
}

console.log(Object.isExtensible(person3));
Object.preventExtensions(person3);
console.log(Object.isExtensible(person3));

person3.lastname = "bucks";
console.log("lastname" in person3);