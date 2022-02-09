const container = document.getElementById('container');
const startButton = document.getElementById('startButton');
const modal = document.getElementById('modal');
const select = document.getElementById('size');
let currNode;

function createElephant(x, y) {
    let nodes = container.childNodes;

    for (let i = 0; i < x * y / 5; i++) {
        let rand = Math.floor(Math.random() * (x * y));
        let elephantImg = document.createElement('img');

        elephantImg.src = "img/elephant.png";
        elephantImg.width = '48';
        elephantImg.height = '48';
        nodes[rand].appendChild(elephantImg);
        console.log(rand);

        if (select.selectedIndex == 2) {
            elephantImg.width = '33';
            elephantImg.height = '33';
        }
    }
}

function createKnight(x, y) {
    let nodes = container.childNodes;
    let rand = Math.floor(Math.random() * (x * y));
    let knightImg = document.createElement('img');

    knightImg.src = "img/knight.png";
    knightImg.width = '48';
    knightImg.height = '48';
    currNode = nodes[rand].appendChild(knightImg);

    if (select.selectedIndex == 2) {
        knightImg.width = '33';
        knightImg.height = '33';
    }

   
}

function createField(x, y) {
    for (let i = 0; i < x * y; i++) {
        let containerItem = document.createElement('div');
        containerItem.classList.add('container-item');
        container.appendChild(containerItem);
    }

    createElephant(x, y);
    createKnight(x, y);
}

function selector() {
    if (select.selectedIndex == 0) {
        container.style.grid = "repeat(" + 5 + ", 50px) / repeat(" + 5 + ", 50px)";
        createField(5, 5);
    } else if (select.selectedIndex == 1) {
        container.style.grid = "repeat(" + 10 + ", 50px) / repeat(" + 10 + ", 50px)";
        createField(10, 10);
    } else if (select.selectedIndex == 2) {
        container.style.grid = "repeat(" + 15 + ", 35px) / repeat(" + 15 + ", 35px)";
        createField(15, 15);
    }
}

function render() {
    currNode.addEventListener('keypress', (e) => {
        if (e.key == 'w') {
            alert(1);
        }
    })
}

startButton.addEventListener('click', () => {
    modal.style.display = "none";
    selector();
});
