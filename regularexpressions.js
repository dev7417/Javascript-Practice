console.log("this is all about regular expressions")

let reg = /Dev/;
console.log(reg);
console.log(reg.source);

// functions to match expressions
let s = "Dev is a good boy ";
let result = reg.exec(s);
console.log(result);
let result2 = reg.test(s);
console.log(result2)

let result3 = s.match(reg);
console.log(result3);

