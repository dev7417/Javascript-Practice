console.log("this is all about maps in javascript")

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function(){};

myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank object');

console.log(myMap);

let value1 = myMap.get(key1);
console.log(value1)
console.log(myMap.size);

for(let [key, value] of myMap){
    console.log(key, value);
}

for(let key of myMap.keys()){
    console.log(myMap)
}

let myArray = Array.from(myMap);
console.log(myArray);

let myKeysArrays = Array.from(myMap.keys());
console.log(myKeysArrays)