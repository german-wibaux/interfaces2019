"use strict"

let idc = document.getElementById('container')
let idc1 = document.getElementById('container-1')
let game = new Game(idc, idc1)

let enemy = document.getElementById('monster')

let hero = document.getElementById('character')

document.addEventListener('keypress', jumpCharacter);

window.onload = checkState

function checkState() {
    // call itself by requesting the next animation frame, and so begin the endless loop
    //requestAnimationFrame(main);
    if (game.getState() == 1)
    {
        if (isMatch()) {
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
    e.preventDefault();
    e.stopPropagation();    
    game.actionHero(e)   
}


