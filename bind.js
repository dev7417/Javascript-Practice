console.log("This is all about bind method in javascript")

const person = {
    name: "Dev",
    sirName: "Gangwar",
    age: 22,
    fun1: function(){
        console.log(this)
    }
}
person.fun1();

const person2 = {
    name: "Manoj",
    sirName: "Sahu",
    age:28
}

let bindMethod = person.fun1.bind(person2);
bindMethod()