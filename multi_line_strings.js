var s1 = `This\
        is
        a
        string`;
var s2 = `This \n is a \n string`;

var s3 = `
        HEADING
    1) subheading1
    2) subheading2
        -------`
var a = 2.356;
var b = true;
var c = 'foo';

var s4 = `${a} - ${b} - ${c}`;
var s4 = `
                HEADING
        1)      ${a+1.6} 
        2)      ${b}
        3)      ${c}
                -------
                `
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

var s5 = `Hi There!`;
var s6 = s5.toLowerCase();
console.log(s6);