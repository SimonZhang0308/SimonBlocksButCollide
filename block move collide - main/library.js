// GAME LIBRARY

// Global Variables
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

let mouseX;
let mouseY;
let mouseIsPressed = false;
let keyPressed = {};

// Canvas Default Size
cnv.width = 800;
cnv.height = 600;

// Set the canvas to the provided size
function canvasSize(width, height) {
    cnv.width = width;
    cnv.height = height;
}

// Determine the distance between two points
function dist(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

// Test if point is in circle
function ptInCircle(x, y, aCircle) {
    return dist(x, y, aCircle.x, aCircle.y) < aCircle.r;
}

// Test if point is in rectangle
function ptInRectangle(x, y, aRect) {
    return (x > aRect.x && x < aRect.x + aRect.w && y > aRect.y && y < aRect.y + aRect.h);
}

// Test if two circle objects intersect
function circleCollide(circle1, circle2) {
    return dist(circle1.x, circle1.y, circle2.x, circle2.y) < (circle1.r + circle2.r);
}

// Test if two rectangle objects intersect
function rectCollide(erect1, erect2) {
    let le1 = erect1.x;
    let re1 = erect1.x + erect1.w;
    let te1 = erect1.y;
    let be1 = erect1.y + erect1.h;
    let le2 = erect2.x;
    let re2 = erect2.x + erect2.w;
    let te2 = erect2.y;
    let be2 = erect2.y + erect2.h;
    return le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2;
}

// Event Listeners & Handlers
document.addEventListener("mousedown", () => mouseIsPressed = true);
document.addEventListener("mouseup", () => mouseIsPressed = false);
document.addEventListener("mousemove", mousemoveHandlerLib);
document.addEventListener("keydown", (e) => keyPressed[e.code] = true);
document.addEventListener("keyup", (e) => keyPressed[e.code] = false);

function mousemoveHandlerLib(e) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(e.clientX - cnvRect.left);
    mouseY = Math.round(e.clientY - cnvRect.top);
}