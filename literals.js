console.log("Literals is working");
// how we create objects
let car = {
    name: 'Maruti 800',
    topSpeed: 90,
    run: function(){
        console.log("Our Car is running");
    }
}
console.log(car.name)
document.body.innerHTML = `our car name is ${car.name}`;


// new Date()

// creating a constructor for car
function GeneralCar(name, topSpeed){
    this.carName = name;
    this.speed = topSpeed; 
    this.run = function(){
        console.log(`${this.name} is running`);
    }
}
car1 = new GeneralCar('Nissan', 100);
console.log(car1);
console.log(car)
car.run();


// making a prototype in javascript
const proto = {
    slogan: function(){
        `This Company is the best`;
    },
    changeName: function(name){
        this.newName = name;

    }
}

const dev = Object.create(proto);
dev.changeName = "dev";
console.log(dev);

// constructor of an employee
function Employee(name, age, role, salary){
    this.empName = name;
    this.empAge = age;
    this.empRole = role;
    this.empSalary = salary;
    console.log(`this is Employee ${this.empName}`);
}

Emp1 =  new Employee("Anshu", 25, "Developer", 25000);
console.log(Emp1)