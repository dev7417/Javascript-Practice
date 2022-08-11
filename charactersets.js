console.log("All About Character sets");

let regex = /^Dev Bhaii/;

const str = "dev Bhaii";

let result = regex.exec(str);
console.log(`Hello ${result}`)

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`);
}else{
    console.log(`the string ${str} does not matches the expression ${regex.source}`);
}