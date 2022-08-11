let a = document;
console.log(a);

let heading = document.querySelector('h1');
console.log(heading.textContent);


let allItems = document.querySelectorAll('ul>li');
allItems.forEach(function(element){
    console.log(element.textContent);
    
})
console.log(allItems)

let unoredredList = document.createElement("ul");
document.body.appendChild(unoredredList);
console.log(unoredredList);

let listItem1 = document.createElement("li");
listItem1.textContent = "Hello 1";
unoredredList.appendChild(listItem1);
