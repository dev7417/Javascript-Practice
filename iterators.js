console.log("All about iterators");

function fruitsIterator(values){
    let nextIndex = 0;
    // we will return an object
    return {
        next: function(){
            if(nextIndex < values.length){
                // we will return this object
           return   {
                    value: values[nextIndex++],
                    done: false
                }
            }else{
                {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apple','Grapes','Oranges','Bhindi'];
console.log("my Array is", myArray);

const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next());