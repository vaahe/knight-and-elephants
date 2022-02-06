let canvas = document.getElementById('canvas');

const startButton = document.getElementById('startButton');
const modal = document.getElementById('modal');

startButton.addEventListener('click', function() {
    modal.style.display = "none";
    selector();
});

function createField(x, y) {
    let gridItems = [];
    let canvasItem;
    let rand;
    for (let i = 0; i < x * y; i++) {
        canvasItem = document.createElement('div');
        canvasItem.classList.add('canvas-item');
        canvas.appendChild(canvasItem);
        gridItems.push(i);
    }

    /*    let nodes = canvas.childNodes;
       let elephantImg = document.createElement('img');
       elephantImg.src = "img/elephant.png";
       elephantImg.width = "48";
       elephantImg.heigh = "48";
       nodes[rand].appendChild(elephantImg); 

    rand = Math.floor(Math.random() * (5 * 5));
    let knightImg = document.createElement('img');
    knightImg.src = "img/knight.png";
    knightImg.width = "48";
    knightImg.height = "48";
    nodes[rand].appendChild(knightImg); 
    */
    for (let i = 0; i < 5; i++) {
        var nums = [...gridItems],
            ranNums = [],
            x = nums.length,
            j = 0;
        while (x--) {
            j = Math.floor(Math.random() * (x + 1));
            ranNums.push(nums[j]);
            nums.splice(j, 1);
            console.log(j);
        }
    }

}

function selector() {
    const select = document.getElementById('size');
    if (select.selectedIndex == 0) {
        canvas.style.grid = "repeat(" + 5 + ", 50px) / repeat(" + 5 + ", 50px)";
        createField(5, 5);
    } else if (select.selectedIndex == 1) {
        canvas.style.grid = "repeat(" + 10 + ", 50px) / repeat(" + 10 + ", 50px)";
        createField(10, 10);
    } else if (select.selectedIndex == 2) {
        canvas.style.grid = "repeat(" + 15 + ", 35px) / repeat(" + 15 + ", 35px)";
        createField(15, 15);
    }
}