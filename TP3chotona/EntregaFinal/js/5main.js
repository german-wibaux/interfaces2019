"use strict"

window.onload = initGame()



function initGame () {    

    let containerGame = document.getElementById('container-sprite')
    let characterGame = document.getElementById('character') 
    let title = document.getElementById('begin-game')
    let enemy = document.getElementById('monster')
    let gameSesion = new Game(containerGame, characterGame, title, enemy)

    document.body.onkeyup = actionGame
    
    function actionGame(e) {
        if(e.keyCode == 32){
            if ( gameSesion.getState() == 0) {
                gameSesion.runSession()
                title.innerHTML = 'Space bar to jump'
            } else { 
                let gameH1 = document.getElementById('begin-game')
                gameH1.className = 'hidden'
                gameSesion.characterJump()
                setTimeout(runCharacter, 600)
            }
            
        }
    }
    
    function runCharacter() {
        gameSesion.characterRunning()
    }


}



// document.addEventListener('keypress', jump);

// let move = document.getElementById('move')
// let quietButton = document.getElementById('quiet-button')
// let jumpButton = document.getElementById('jump-button')
// let back = document.getElementById('con-sprite')
// move.onclick = run
// quietButton.onclick = stop
// jumpButton.onclick = jumpTrans

// function stop() {
//     let quietBt = document.getElementById('quiet')
//     back.className = 'contain-sprite-quiet'
//     quietBt.className = 'quiet-reaper'
// }


// function jump(e) {
//     if (e.keyCode == 32) {
//         let run = document.getElementById('quiet')
//         run.className = 'reaper-jump'
//     }
// }

// function jumpTrans() {
//     let jump = document.getElementById('quiet')
//     jump.style.animation = ''
//     jump.className = 'reaper-jump'
//     setTimeout(run, 600);
// }

// function jumpNot(e) {
//     if (e.keyCode == 32) {
//         let run = document.getElementById('quiet')
//         run.className = 'reaper'
//     }
// }

