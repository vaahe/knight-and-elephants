const container = document.getElementById('container');
const startButton = document.getElementById('startButton');
const modal = document.getElementById('modal');
const select = document.getElementById('size');
let matrix;
let interval;
let seconds = 0;

const createElephant = (x, y) => {
    const nodes = container.childNodes;

    for (let i = 0; i < x * y / 5; i++) {
        const elephantImg = document.createElement('img');
        const rand = nodes[Math.floor(Math.random()*nodes.length)];

        elephantImg.src = 'img/elephant.png';
        elephantImg.width = 48;
        elephantImg.height = 48;
        elephantImg.classList.add('elephant');
        rand.appendChild(elephantImg);

        if (select.selectedIndex === 2) {
            elephantImg.width = 33;
            elephantImg.height = 33;
        }
    }
}

const createKnight = () => {
    const nodes = [...container.childNodes].filter(item => !item.childNodes.length);

    const rand = nodes[Math.floor(Math.random() * nodes.length)];
    let knightImg = document.createElement('img');

    knightImg.src = 'img/knight.png';
    knightImg.width = 48;
    knightImg.height = 48;
    rand.appendChild(knightImg);

    if (select.selectedIndex === 2) {
        knightImg.width = 33;
        knightImg.height = 33;
    }
}


const createField = (x, y) => {
    for (let i = 0; i < x * y; i++) {
        const containerItem = document.createElement('div');
        containerItem.classList.add('container-item');
        container.appendChild(containerItem);
    }

    createElephant(x, y);
    createKnight();
    nodesToMatrix(x,y)

    document.addEventListener('keydown', move);
    interval = setInterval(() => {
         seconds += 1;
         return seconds;
    }, 1000);
}

const move = (e) => {
    let i,j;
    loop:
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].childNodes[0] && matrix[i][j].childNodes[0].src.split('/').pop() === 'knight.png') {
                break loop;
            }
        }
    }

    let knightImg = document.createElement('img');

    knightImg.src = 'img/knight.png';
    knightImg.width = 48;
    knightImg.height = 48;

    switch (e.key) {
        case "w": {
            if (i > 0) {
                const current = matrix[i][j]
                const next = matrix[i - 1][j]
                if (!next.childNodes.length) {
                    next.appendChild(knightImg);
                    current.innerHTML = ''
                } else {
                    next.innerHTML = '';
                    current.innerHTML = '';
                    next.appendChild(knightImg)
                }
            }
        }
        break;

        case "a": {
            if (j > 0) {
                const current = matrix[i][j];
                const next = matrix[i][j - 1];
                if (!next.childNodes.length) {
                    next.appendChild(knightImg);
                    current.innerHTML = ''
                } else {
                    next.innerHTML = '';
                    current.innerHTML = '';
                    next.appendChild(knightImg)
                }
            }
        }
        break;

        case "d": {
            if (j < matrix[j].length-1) {
                const current = matrix[i][j];
                const next = matrix[i][j + 1];
                if (!next.childNodes.length) {
                    next.appendChild(knightImg);
                    current.innerHTML = ''
                } else {
                    next.innerHTML = '';
                    current.innerHTML = '';
                    next.appendChild(knightImg)
                }
            }
        }
        break;

        case "s": {
            if (i < matrix[i].length-1) {
                const current = matrix[i][j];
                const next = matrix[i + 1][j];
                if (!next.childNodes.length) {
                    next.appendChild(knightImg);
                    current.innerHTML = ''
                } else {
                    next.innerHTML = '';
                    current.innerHTML = '';
                    next.appendChild(knightImg)
                }
            }
        }
        break;

        default: return false;
    }

    if (!document.querySelectorAll('.elephant').length) {
        gameIsOver();
    }
}

function gameIsOver() {
   const secondModal = document.getElementById('modal2');
   const h2 = document.getElementById('h2');
   h2.innerText = `${seconds} seconds has left.`;

   setTimeout(() => {
        secondModal.style.display = 'block';
        const startAgainBtn = document.getElementById('startAgainButton');
        startAgainBtn.onclick = () => {
            secondModal.style.display = 'none';
            container.innerHTML = '';
            modal.style.display = 'block';
        }
   }, 400);

    clearInterval(interval);
    seconds = 0;
}

const selector = () => {
    if (select.selectedIndex === 0) {
        container.style.grid = "repeat(" + 5 + ", 50px) / repeat(" + 5 + ", 50px)";
        createField(5, 5);
    } else if (select.selectedIndex === 1) {
        container.style.grid = "repeat(" + 10 + ", 50px) / repeat(" + 10 + ", 50px)";
        createField(10, 10);
    } else if (select.selectedIndex === 2) {
        container.style.grid = "repeat(" + 15 + ", 35px) / repeat(" + 15 + ", 35px)";
        createField(15, 15);
    }
}

const nodesToMatrix = (x,y) => {
    const nodes = [...container.childNodes];
    matrix = [];
    for (let i = 0, k = -1; i < nodes.length; i++) {
        if (i % y === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(nodes[i]);
    }
}


startButton.addEventListener('click', () => {
    modal.style.display = 'none';
    selector();
});
