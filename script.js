function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let box1Id = `row-${getRandomInt(4)}-col-${getRandomInt(4)}`
let box2Id = `row-${getRandomInt(4)}-col-${getRandomInt(4)}`
while (box2Id === box1Id) {
    box2Id = `row-${getRandomInt(4)}-col-${getRandomInt(4)}`
}
let box3Id = `row-${getRandomInt(4)}-col-${getRandomInt(4)}`
while (box3Id === box1Id && box3Id === box2Id) {
    box3Id = `row-${getRandomInt(4)}-col-${getRandomInt(4)}`
}
let box4Id = `row-${getRandomInt(4)}-col-${getRandomInt(4)}`
while (box4Id === box1Id && box4Id === box2Id && box4Id === box3Id) {
    box4Id = `row-${getRandomInt(4)}-col-${getRandomInt(4)}`
}
document.getElementById(box1Id).classList.toggle('box-red');
document.getElementById(box2Id).classList.toggle('box-red');
document.getElementById(box3Id).classList.toggle('box-red');
document.getElementById(box4Id).classList.toggle('box-red');

var boxes = document.getElementsByClassName("box");

var myFunction = function() {
    var attribute = this.getAttribute("id");
    if (attribute === box1Id || attribute === box2Id || attribute === box3Id || attribute === box4Id) {
        boxesClicked++;
        if (boxesClicked == 4) {
            location.reload();
        }
    }
    console.log(attribute);
};

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', myFunction, false);
}

let boxesClicked = 0;