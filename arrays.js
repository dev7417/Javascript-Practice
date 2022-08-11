const marks = [34,55,77,88,98,65];
const fruits = ["apple", "banana","Litchi", "Pineapple"];
const mixed = ["apple", 88, "pineapple"];

const arr = new Array(23,88,55, 'Orange');
console.log(arr);

let val = marks.indexOf(88);
console.log(val);

 marks.push(44);
 marks.unshift(12); 
 marks.pop(65);   
 console.log(marks);

 let myobj = {
    name: "Dev",
    Sirname: "Gangwar",
    Status: "Active",
    marks: [24,55,66,44]
 }
 console.log(myobj);
 console.log(myobj['Sirname']);
 console.log(myobj['Status']);