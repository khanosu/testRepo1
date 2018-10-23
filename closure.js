//@ts-check
'use strict'

function fun(index){
    return function(fac){
        return fac*index;
    }
}

var bb = fun(3);
console.log(bb(2));

var cc = fun(10);
console.log(cc(2));
console.log(bb(2));


console.log(fun(4)(3));
