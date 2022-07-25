// main script and stuff

let score = 0;
let highscore = 0;

let box = [];
box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,1,1,getRandomColor()));
let gbox = {
    x: 390,
    y: 480,
    w: 20,
    h: 20,
    speed: 4,
    color: "white"
}
let t = 0;

function randomInt(low,high){
    return Math.floor(Math.random() * (high - low) + low);
}


requestAnimationFrame(draw);
function draw(){
    t += 1;
    console.log(score)
    ctx.clearRect(0,0,cnv.width,cnv.height);
    movegodbox()
    drawgodbox()
    gameover()
    for (let i = 0; i < box.length; i++){
        drawbox(box[i]);
        moveBubble(box[i]);
    }
    if (t === 200){
        let l = randomInt(0,5);
        if (l === 0){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,1,1,getRandomColor()));
        }
        else if (l === 1){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,1,-1,getRandomColor()));
        }
        else if (l === 2){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,-1,-1,getRandomColor()));
        }
        else if (l === 3){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,-1,1,getRandomColor()));
        }
        score += 1;
        score.innerHTML = score;
        if (score >= highscore) {
            highscore = score;
        }
        t = 0;
    }
    requestAnimationFrame(draw);
}

function drawgodbox(){
    fill(gbox.color)
    rect1(gbox.x, gbox.y, gbox.w, gbox.h, "fill")
}

function movegodbox(){
    if (keyPressed["ArrowUp"]) {
        gbox.y += -gbox.speed;
        if (gbox.y <= 0) {
            gbox.y = 0;
        }
    }
    if (keyPressed["ArrowDown"]) {
        gbox.y += gbox.speed;
        if (gbox.y >= cnv.height - gbox.h) {
            gbox.y = cnv.height - gbox.h;
        }
    }
    if (keyPressed["ArrowLeft"]) {
        gbox.x += -gbox.speed;
        if (gbox.x <= 0) {
            gbox.x = 0;
        }
    }
    if (keyPressed["ArrowRight"]) {
        gbox.x += gbox.speed;
        if (gbox.x >= cnv.width -gbox.w) {
            gbox.x = cnv.width -gbox.w;
        }
    }
}

function newbox(initX, initY, initW, initH,initspeedx,initspeedy, initColor){
    return{
        x:initX,
        y:initY,
        w:initW,
        h:initH,
        sx:initspeedx,
        sy:initspeedy,
        color: initColor
    };
}

function drawbox(aBubble){
    fill(aBubble.color);
    rect1(aBubble.x,aBubble.y,aBubble.w,aBubble.h,"fill");
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveBubble(aBubble){
    aBubble.y += aBubble.sy;
    aBubble.x += aBubble.sx;
    if (aBubble.y >= 566){
        aBubble.sy = -0.7;
    }
    if (aBubble.y <= 0){
        aBubble.sy = 0.7;
    }
    if (aBubble.x >= 766){
        aBubble.sx = -0.7;
    }
    if (aBubble.x <= 0){
        aBubble.sx = 0.7;
    }
}

function gameover() {
    for (let i = 0; i < box.length; i++) {
        if (rectCollide(gbox, box[i])) {
            box = [];
            score = 0
            gbox.w += 5;
            gbox.h += 5;

        }
    }
}
