console.log("traversing included");

let cont = document.querySelector('.container');
console.log(cont.childNodes);
console.log(cont.children);
let element = document.createElement('li');
element.textContent = "list 1";

let cont1 = document.querySelector('.container');
cont1.appendChild(element);
console.log(cont1);


let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.textContent = "this is our third heading";
cont1.appendChild(elem2);

let h1 = document.getElementById('heading');
h1.replaceWith(elem2)