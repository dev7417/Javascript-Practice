console.log("this is all about Ecmascript classes");
class Employee {
    constructor(name, experience, division){
        this.Name = name;
        this.Experience = experience;
        this.Division = division; 

    }
}

dev = new Employee("Dev", 25, "It");
console.log(dev)

