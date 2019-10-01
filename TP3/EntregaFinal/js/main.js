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

document.addEventListener('keypress', jumpCharacter);

function jumpCharacter(e) {
        if (e.keyCode == 32) {
            
            
            game.jumpCharacter()
             
            
            // setTimeout(game.runCharacter(), 600)
        }
        
    
    
}

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
    console.log(isMatch());
    
} 

function trackEnemy() {
    console.log(game.getTrackEnemy())
    console.log(isMatch());
} 

window.onload = initGame


function draw() {
    game.draw()
}

function main() {
    draw()
    game.runSession()

    

    // call itself by requesting the next animation frame, and so begin the endless loop
    //requestAnimationFrame(main);
    if (isMatch()) {
        alert('Perdio')
        game = new Game(idc)
        initGame()
    } else {
        requestAnimationFrame(main);
    }
    
}

function isMatch () {
    let hero = game.getTrackHero()
    let enemy = game.getTrackEnemy()
    if (hero.left < enemy.left + enemy.width  && hero.left + hero.width  > enemy.left &&
        hero.top < enemy.top + enemy.height && hero.top + hero.height > enemy.top)
        return true
    else
        return false

}



function initGame() {
    // Initialise the game!
    
    requestAnimationFrame(main);

    

    // // Initialise
    // init();

    // // Start the loop!
    // requestAnimationFrame(main);


}

