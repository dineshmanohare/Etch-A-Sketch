
const canvas = document.querySelector('.etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// make a variable called width and height from the same properties of our canvas 

let { width, height } = canvas;

//Create random points x and y which gone points on canvas 

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let MOVE_AMOUNT = 10;
let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;

// Setup out Canvas for Drawing
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 20;
ctx.beginPath();
ctx.lineTo(x, y);
ctx.moveTo(x, y);
ctx.stroke();

// write a draw function
function draw({key}) {
    console.log(key);
    hue += 10;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;

    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what user did
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default: break;
    }
    
    ctx.lineTo(x, y)
    ctx.stroke();
}

// Write a handler for keys
function handleKey(event) {
    if(event.key.includes("Arrow"))
    {
        draw({key:event.key});
        event.preventDefault();
    }
}

// clear and shake function
function clearCanvas() {
    ctx.clearRect(0, 0, width, height);

}
// listen for arrow key
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click',clearCanvas);