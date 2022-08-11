console.log("We are learning about strings functions");
const name = "Dev";
const greetings = "Good AfterNoon";
console.log(greetings + ' ' + name);

let html = `hello <h1> ${name} </h1> ${greetings}`;
console.log(html);
console.log(html.indexOf("ths"));
console.log(html.split());


let fruits = ["apple", "Banana", "Pomogrenate", "Orange"];
let fruits2 = ["lorem1", "Lorem2","lorem3", "Lorem4"];
let myHtml = `hello ${name} and kdk ${greetings}`;
// document.body.innerHTML = myHtml;


let str1 = 'Javascript';
let str2 = 'Js Tutorials';
let sem = `i learn ${str1} and ${str2}`;
console.log(sem)
document.body.innerHTML = sem;
document.write(sem)