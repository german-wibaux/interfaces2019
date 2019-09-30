"use strict"

let idc = document.getElementById('container')




let game = new Game(idc)

let enemy = document.getElementById('monster')

setTimeout(trackEnemy,3000)
setTimeout(trackEnemy,4500)
setTimeout(trackEnemy,6000)
setTimeout(trackEnemy,7500)
setTimeout(trackEnemy,9000)
setTimeout(trackEnemy,10500)
setTimeout(trackEnemy,12000)
setTimeout(trackEnemy,13500)
setTimeout(trackEnemy,15000)

let hero = document.getElementById('character')

setTimeout(trackHero,3000)
setTimeout(trackHero,4500)
setTimeout(trackHero,6000)
setTimeout(trackHero,7500)
setTimeout(trackHero,9000)
setTimeout(trackHero,10500)
setTimeout(trackHero,12000)
setTimeout(trackHero,13500)
setTimeout(trackHero,15000)

function trackHero() {
    console.log(game.getTrackHero())
} 

function trackEnemy() {
    console.log(game.getTrackEnemy())
} 

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

