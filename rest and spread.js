console.log("All About Rest and Spread Operators in Javascript");


// All About Rest Operator  ... three dot is an rest operator
function addNumber(a,b,c,...other){
    console.log(other)
    return a,b,c;
}
const res = addNumber(2,5,8,7,4,2,6,1);
console.log(res);


// All About Spread Operator

let names = ["DEv","Anuj","Rohan","Sohan"];

function getNames(name1,name2,name3,name4){
    console.log(name1,name2,name3,name4)
}
getNames(...names);

const num = [1,2,5,7,8,7,6];
[a,b,c,...d] = num;
console.log(a,b,c,...d)
console.log(...d)

// How Rest Works With an Object

var student = {
    name: "Ajay",
    age: 25,
    hobbies: ["Cricket","Singing"]
}
const {age,...rest} = student;
console.log(student);
console.log(rest)


var students={
    ...student,
    age: 20
}
console.log(students)