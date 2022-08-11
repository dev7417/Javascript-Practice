console.log("hello")

let a = "Dev";
a = undefined;
if(a!= undefined){
    throw new Error('this sis not undefined');
}else{
    console.log('this is undefined');
}

try {
    console.log("we are in inside the try block")
} catch (error) {
    console.log("are you Okay")
}
finally{
    console.log("Finally we will run this")
}