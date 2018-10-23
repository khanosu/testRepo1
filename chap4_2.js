//@ts-check
'use strict'

function Calc(){
    this.add = function add(a, b){
        return a+b;
    }
}

var calc1 = new Calc();

console.log(calc1.add(2,3));