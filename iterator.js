//@ts-check
'use strict'

function makeIterator(array){
    var nextIndex = 0;
    console.log("next index =>", nextIndex);

    return {
        next: function(){
            return nextIndex < array.length
            ? {value: array[nextIndex++], done: false}
            : {done: true};
        }
    };
}

var myArray = ["one", "two", "three"];

var it = makeIterator(myArray);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log("---   ---   ---");

it = makeIterator(myArray);
while(true){
    var a = it.next();
    if(a.done === true) break;
    console.log(`value: ${a.value}`); 
}

console.log("---   ---   ---");

while(true){
    var a = it.next();
    if(a.done === true) break;
    console.log(`value: ${a.value}`); 
}