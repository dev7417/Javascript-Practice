console.log("all about bind method in javascript");

let person1 = {
    name: "Dev",
    sirName: "Gangwar",
    age: 22,
    fun1: function(city, state){
        console.log(this.name+" "+city+" "+state);
    }
}
    person1.fun1("Bareilly", "Uttarpradesh");

let person2 = {
    name: "honey",
    sirName: "Singh",
    age: 32,
}

person1.fun1.apply(person2, ["Bareilly", "Uttarpradesh"]);