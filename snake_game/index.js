let direction={
    x:0,
    y:0,
};
let foodsound=new Audio('food.mp3');
let gameover=new Audio('gameover.mp3');
let move=new Audio('move.mp3');
let music=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;

//game func

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 <1/speed){
        return;
    }
    lastPaintTime=ctime;
    co
}











//main
window.requestAnimationFrame(main);