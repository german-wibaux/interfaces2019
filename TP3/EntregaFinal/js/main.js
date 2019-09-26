"use strict"

document.addEventListener('keypress', jump);

let move = document.getElementById('move')
let quietButton = document.getElementById('quiet-button')
let jumpButton = document.getElementById('jump-button')
let back = document.getElementById('con-sprite')
move.onclick = run
quietButton.onclick = stop
jumpButton.onclick = jumpTrans

function stop () {
    let quietBt = document.getElementById('quiet')
    back.className = 'contain-sprite-quiet'
    quietBt.className = 'quiet-reaper'
}


function jump(e) {
    if (e.keyCode == 32) {
        let run = document.getElementById('quiet')
        run.className = 'reaper-jump'
    }
}

function jumpTrans() {
    let jump = document.getElementById('quiet')
    jump.className = 'reaper-jump'
    setTimeout(run, 600);
}

function jumpNot(e) {
    if (e.keyCode == 32) {
        let run = document.getElementById('quiet')
        run.className = 'reaper'
    }
}

function run() {
    let run = document.getElementById('quiet')
    run.style.animation = ''
    back.className = 'contain-sprite'
    run.className = 'reaper'
}