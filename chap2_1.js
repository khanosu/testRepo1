//@ts-check
'strict mode'
function test(a){
    var arg_length = arguments.length;
    var l = test.length;
    console.log(`Number of named arguments: ${l}`);
    console.log(`Number of arguments: ${arg_length}`);
    for(var i = 0; i < arg_length; ++i){
        console.log(`arg: ${arguments[i]}`);
    }
    //console.log(`Number of named arguments: ${length}`);
}

test(2, true, "hi");
test(`Hello World!`, true, 3.0+7.8, false);
console.log(`Number of named arguments: ${test.length}`);
