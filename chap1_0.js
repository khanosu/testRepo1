// my change 16
function getValue(condition) {
    if (condition) {
        var value = "blue"; // other code 
    }
    else { // value exists here with a value of undefined 
    } 
    // value exists here with a value of undefineda
    console.log(`vale: ${value}`);
}

getValue(true);
getValue(false);
