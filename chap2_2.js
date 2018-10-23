//@ts-check
'strict mode'


console.log(this);
let myname = `global name`;

function foo(){
    console.log(`this is: ${this.myname}`);
}

foo();

var ohio = {
   myname: `ohio`, 
   ohioFun: foo
}

var newyork ={
    myname: `newyork`,
    newyorkfun: foo
}

ohio.ohioFun();
newyork.newyorkfun();

foo.call(this);
foo.call(ohio);
foo.call(newyork);

console.log(this.myname);
console.log(myname);

var foo1 = foo.bind(ohio);
foo1();

var foo2 = foo.bind(newyork);
foo2();