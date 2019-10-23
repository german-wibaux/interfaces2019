"use strict"

let idc = document.getElementById('contain-game')
let idc1 = document.getElementById('contain-game-1')
let idc2 = document.getElementById('contain-game-2')
let game = new Game(idc, idc1, idc2)

let enemy = document.getElementById('monster')

let hero = document.getElementById('character')

document.addEventListener('keypress', jumpCharacter);

// window.onload = checkState

function checkState() {
    // call itself by requesting the next animation frame, and so begin the endless loop
    //requestAnimationFrame(main);
    if (game.getState() == 1)
    {
        if (isMatch()) {
            game.stop()
            game.gameOver()
        } else {
            requestAnimationFrame(checkState);
        }
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

function runCharacter() {
    game.runCharacter()
}

function jumpCharacter(e) {
    // e.preventDefault();
    // e.stopPropagation();    
    game.actionHero(e)   
}


