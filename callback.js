console.log("this is all about callbacks")
const students = [
    {name: "dev", subject: "javascript"},
    {name: "Rohan", subject: "Php"},
    {name:"Rajat", subject:"Angular"}
]

function enrollStudents(student){
    setTimeout(() => {
        students.push(student);
        console.log("student has been enrolled")
    }, 3000);
}


function getStudents(){
    setTimeout(() => {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name} </li>` 
        })
        document.getElementById("students").innerHTML = str;
    }, 2000);
}

let newStudent = {name: "sunny", Subject: "python"}
enrollStudents(newStudent);
getStudents();


function show(){
    console.log("I am show function");
}

function geeky(callback){
    callback();
}
geeky(show);