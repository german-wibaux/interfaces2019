
class Game {

    constructor(containerGame, characterGame, title, enemy) {
        this.background
        this.setBackground(containerGame)
        this.setCharacter(characterGame)
        this.backgroundQuiet()
        this.character.quiet()
        this.title = title         
        //state 0 = quiet
        //state 1 = running        
    }

    

    

    setCharacter(charac) {
        this.character = new Hero(charac)
        this.character.top = 0
        this.character.left = 0
        this.character.right = 0
        this.character.bottom = 10
    }

    setBackground(backg) {
        this.background = backg
    }

    runEnemy () {
       this.enemy.className = 'monster'
    }

    backgroundQuiet() {
        this.background.className = 'contain-sprite-quiet'
    }

    // characterQuiet() {
    //     this.character.quiet()
    // }

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
        this.runEnemy()
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