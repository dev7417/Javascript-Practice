console.log("this is all about events");
let btn = document.getElementById("btn").addEventListener('click', function (name) {
    console.log(name);
    alert("you have clicked on the btn");
})


let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', func1);

let btn3 = document.getElementById('btn3');
btn3.addEventListener('dblclick', db);

function db() {
    console.log("double click works")
}

function func1(e) {
    console.log("thanks", e)
}

let mouseDown = document.getElementById("mouse");
mouseDown.addEventListener('mousedown', func3);

function func3() {
    console.log("mouse down works");
}

let mouseLeave = document.getElementById('no');
mouseLeave.addEventListener('mouseleave', leave);

function leave() {
    console.log("you leave the given text");
}

mouseLeave.addEventListener('mouseenter', enter);

function enter() {
    console.log("you entered the given text");
}