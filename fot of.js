console.log("all About for of loop in javascript");

let demo = document.getElementById('demo');
let demo2 = document.getElementById('demo2')

// 


obj = {
    name: "Dev",
    language: "Javascript",
    hobbies: "Web Development"
}
for( let object in obj){
    console.log(obj[object])
    demo.innerHTML = obj.name;

}
// demo.innerHTML = obj.name;
console.log(obj);

// we can use for in loop with strings to loop through all the characters
let string = "this is my string";
let html = '';
for(let str in string ){
    console.log(string[str]);
   
}
let data = `<ul>
<li>${string}</li>
</ul>`
html += data;
demo2.innerHTML = html;

let people = ["SkillF1","Skillf2","SkillF3","SkillF4"];

for (const name of people) {
    console.log( name);
}