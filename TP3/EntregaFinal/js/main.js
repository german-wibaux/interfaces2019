"use strict"

let idc = document.getElementById('container')


let game = new Game(idc)



window.onload = initGame


function draw() {
    game.draw()
}

function main() {
    draw()
    game.runSession()
    let idc = document.getElementById('monster').onchange = game.track
    // call itself by requesting the next animation frame, and so begin the endless loop
    //requestAnimationFrame(main);
}

function initGame() {
    // Initialise the game!
    
    requestAnimationFrame(main);

    

    // // Initialise
    // init();

    // // Start the loop!
    // requestAnimationFrame(main);


}

