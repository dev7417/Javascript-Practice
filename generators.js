console.log("Generators in Javasript");

function* numberGen(){
    let i = 1;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
    }

}
const gen = numberGen();

document.write(JSON.stringify(gen.next().value))
document.write(JSON.stringify(gen.next().value))
document.write(JSON.stringify(gen.next().value))
document.write(JSON.stringify(gen.next().value))
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

let arr = [7,8,44,55,88];
 let largest = arr[0];
 for(i = 0; i < arr.length; i++) {
    if(largest < arr[i]){
        largest = arr[i]
    }
 }
 console.log(largest)

 let a = "5";
 let b = "2";
 var sum = a+b;
 console.log(sum);

 var foo = [1,2];
 console.log(foo.length)
 document.write("Hello World");
 