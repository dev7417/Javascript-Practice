console.log("All About For-in loop in Javascript");

let name1 = [{name:"Dev", sirname: "Aditya", secondName:"Udit", thirdName:"Shubham",fourthName:"Vikrant"}]
        

obj = {
    name: "Dev",
    language: "Javascript",
    Hobbies: "Coding"
}
console.log(obj);

// terating an object  using for in loop
for(let key in obj){
    console.log(obj.name)
    document.body.innerHTML = obj.name;
}


// for Of Loop in Javascript
let people = ["dev","Xyx","jdij","jjd"];

for (let iterator of object) {
    
}