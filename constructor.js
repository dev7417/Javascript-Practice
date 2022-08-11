// let obj1 = {
//     name: "Maruti 800",
//     topSpeed: 89,
//     run: function (){
//         console.log(run)
//     }
// }

function generalcar(name, topSpeed, sirName){
    this.name = name;
    this.speed = topSpeed;
    this.sirname = sirName;
    this.run = function(){
        console.log(`${this.name} is running`)   
    }
    console.log(this.sirname);
}
car1 = new generalcar('Nissan', 100, 'Gangwar');
console.log(car1);
console.log(obj1)