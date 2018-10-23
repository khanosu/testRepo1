//@ts-check
'use strict'

let person1 =  {
    name: "Foo",
    age: 340,
    weight: 300,

    sayName: function() {
        console.log(this.name);
    } 
}

person1.sayName();

console.log(`
             name: ${person1.name}
             age: ${person1.age} micro-seconds
             weight: ${person1.weight} mg \n`);

             console.log(`name in person1: ${"name" in person1}`);
             console.log("height" in person1);
             console.log("sayName" in person1);

             console.log(person1.hasOwnProperty("name"));

             console.log("toString" in person1);
             console.log(person1.hasOwnProperty("toStrin"));