localStorage.setItem('Name', 'Dev');
localStorage.setItem('Name2', 'Dev');

let name  = localStorage.getItem('Name');
console.log(name);
console.log(typeof(name));
localStorage.clear()