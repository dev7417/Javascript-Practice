console.log("This is all about metacharacters");

let regex = /Dev/;
 regex = /^De/;
    regex = /ev$/;
    regex = /ha?rryi?/;
let str = "Dev is a Good Boy and dev is code easy with dev";

let result = regex.exec(str);
console.log(result);

if(regex.test(str)){
    console.log(`the string ${str} matched the expression ${regex.source}`)
}else{
    console.log("does not match")
}