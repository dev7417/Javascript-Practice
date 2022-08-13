console.log("this is drag and top utility");

const imgBox = document.querySelector('.img-box');
const whiteBoxes = document.getElementsByClassName('whiteBox');


// Events Listener for draggable img box
imgBox.addEventListener('dragstart', (e) => {
    console.log("Drag Start has been triggered");
    e.target.className += ' hold';
    setTimeout(() => {

        e.target.className = ' hide'
    }, 0)
});

imgBox.addEventListener('dragend', (e) => {
    console.log("Drag end has been triggred")
    e.target.className = 'img-box';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("dragover method is triggered")

    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log("dragenter method is triggered");
        e.target.className += ' dashed';
        });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log("dragleave method is triggered");
        e.target.className += 'whiteBox';


    });
    whiteBox.addEventListener('drop', (e) => {
        console.log("drop method is triggered")
        e.target.append(imgBox);

    });
}