//'use strict'


name2 = 'foo';
function my(){
    return this.name2;
}


console.log(`
    ${my()}
    `);