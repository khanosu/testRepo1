//'use strict'


name2 = 'fooBar';
function my(){
    return this.name2;
}


console.log(`
    ${my()}
    `);