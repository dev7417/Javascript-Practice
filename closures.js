console.log("This is all about closures in javascript")

var sum = function(a){
    console.log("Hello Viewers" +" " +a);
    var c = 4;
    return function(b){
        return a+b+c;
    }
}
var store = sum(2);
console.log(store(5))

// Example 2 on Closures
let add = function(a,b,c){
    return {
        getSumTwo: function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
let store2 = add(3,4,5)
console.log(store2.getSumTwo())
console.log(store2.getSumThree())


