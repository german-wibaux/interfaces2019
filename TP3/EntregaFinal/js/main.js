"use strict"

document.addEventListener('keypress', jump);

let move = document.getElementById('move')
let back = document.getElementById('con-sprite')
move.onclick = run





function jump(e) {
    if (e.keyCode == 32) {
        let run = document.getElementById('quiet')
        run.className = 'reaper-jump'
    }
}

function jumpNot(e) {
    if (e.keyCode == 32) {
        let run = document.getElementById('quiet')
        run.className = 'reaper'
    }
}

function run() {
    let run = document.getElementById('quiet')
    back.className = 'contain-sprite'
    run.className = 'reaper'
}