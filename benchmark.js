//@ts-check
'use strict'


//benchmatk.js
function main(){
    const cycles = 1000000000; // 1 billion
    let start = Date.now();
    for(let i = 0; i < cycles; i++){
        /* Empty Loop */
    }
    let end = Date.now();
    let duration = (end - start)/1000;
    console.log('JavaScript looped %d tiems in %f seconds', cycles, duration);
}

main();