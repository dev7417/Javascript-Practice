// for (let i=0; i<100; i++){
//     console.log(i);
// }

// let j = 0;
// while(j<100){
//     console.log(j);
//     j+=1;
// }

// let k = 0;

// do{
//     console.log(k + 1);
//     if(k === 5){
//         break;
//     }
//     k++;
// }while(k < 10);
// console.log('done'
let arr = [1,2,3,5,4,6,8,7,9];
arr.forEach(function(element){
    console.log(element);
})

let obj = {
    name: "Rohan Das",
    age: 20,
    type: "Dangerous Programmer"

}
for(let key in obj){
    console.log(obj)
    console.log(`the ${key} of object is ${obj[key]}`)
}