class Game {
    constructor() {
        this.background
        this.character        
    }

    setCharacter(charac) {
        this.character = charac
    }

    setBackground(backg) {
        this.background = backg
    }

    backgroundQuiet() {
        this.background.className = 'contain-sprite-quiet'
    }

    characterQuiet() {
        this.character.className = 'quiet-reaper'
    }

    checkState() {
        //INPUT
        //UPDATE
        //RENDER
        //CONDICION
    }

    gameOver() {

    }

    runSession() {
        this.background.className = 'contain-sprite'
        this.character.className = 'reaper'
    }

}