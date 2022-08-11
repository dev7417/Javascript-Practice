console.log("promises in javascript");

function fun1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log("your promise has been resolved");
                resolve();
            } else {
                console.log("your promise has not been resolved");
                reject("Sorry not fullfilled");
            }
        }, 2000);
    })
}
fun1().then(function(){
    console.log("Dev: Thanks for resolving");
}).catch(function(){
    console.log("Dev: Very bad bro")
});

let myJSON = '["Ford", "BMW", "Fiat"]';
let json = JSON.parse(myJSON);

json.forEach(element => {
    console.log(element);
});
console.log(json);

let obj = '{"name":"John", "age":30, "car":null}';
let par = JSON.parse(obj);

console.log(par);