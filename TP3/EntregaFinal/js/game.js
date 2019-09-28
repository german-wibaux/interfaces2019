class Game {
    constructor() {
        this.background
        this.character
        this.state = 0
        //state 0 = quiet
        //state 1 = running        
    }

    setCharacter(charac) {
        this.character = new Character(charac)
    }

    setBackground(backg) {
        this.background = backg
    }

    backgroundQuiet() {
        this.background.className = 'contain-sprite-quiet'
    }

    characterQuiet() {
        this.character.quiet()
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
        this.character.run()
        this.state = 1
    }

    characterJump() {
        this.character.jump()
    }

    characterRunning() {
        this.character.run()
    }

    getState() {
        return this.state
    }

}