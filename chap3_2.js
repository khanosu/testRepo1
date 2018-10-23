//@ts-check
'use strict'

let person2 = {
    name: "Foo",
    age: 340,
    weight: 300,

    sayName: function () {
        console.log(this.name);
    }
}

let property;
for (property in person2) {
    console.log(`
        Property Name: ${property}
        Property Value: ${person2[property]}
         `)
}

let properties = Object.keys(person2);

for (let i = 0,  len = properties.length; i < len; i++) {
    console.log(`
        Property Name: ${properties[i]}
        Property Value: ${person2[ properties[i] ]}
    `)
    
}

console.log(`---    --- ---`);

console.log("name" in person2);
console.log(person2.propertyIsEnumerable("name"));
console.log("length" in properties);
console.log(properties.propertyIsEnumerable("length"));