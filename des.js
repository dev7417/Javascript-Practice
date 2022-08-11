const fruits = ['Apple', 'Banana', 'Mangoes'];
[a,b,c] = fruits;
console.log(a,b,c);

const numbers = [1,2,3,4,5,6,7,8,9];
[a,b,c,...d] = numbers;
console.log(a,b,c,...d);
console.log(d);

// Destructuring of an object


let laptop = {
    model: "Dell",
    age: "4 years",
    color: "black",
    start: function(){
        console.log("started")
    },
    hjhdj: "njdhjhccb",
    bcjsbcjb:"dbbchb",
    hell: "nell"
}
const {model, age, color} = laptop;
console.log(model,age,color);