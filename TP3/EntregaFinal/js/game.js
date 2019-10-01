
class Game {

    constructor(containerGame) {
        this.background
        this.state = 0
        this.setBackground(containerGame)
        this.backgroundQuiet()
        this.hero = new Hero('character')
        this.enemy = new Enemy('monster')
    }

    runCharacter() {
        this.hero.run()
    }

    jumpCharacter() {
        this.hero.jump()        
    }

    gameOver(){
        this.state = 0
        this.backgroundQuiet()
        this.enemy.quiet()
        console.log("quiet");
        
        this.hero.quiet()
        let gameH1 = document.getElementById('begin-game')
        gameH1.innerHTML = "Press spacebar to start"
        gameH1.className = 'beginGameH1'
    }   

    actionHero(e) {
        if (e.keyCode == 32) {
            let gameH1 = document.getElementById('begin-game')
            if (this.state == 0) {
                this.runSession()
                
                gameH1.innerHTML = "Press spacebar to jump"
                
                this.enemy.atack()
                checkState()
            } else {
                gameH1.className = 'hidden'
                this.hero.jump()        
                setTimeout(runCharacter, 1100)
            }        
            
        }
    }

    getTrackHero() {
        return this.hero.getPosition()
    }

    getTrackEnemy() {
        return this.enemy.getPosition()
    }

    setBackground(backg) {
        this.background = backg
    }

    getState() {
        return this.state
    }

    backgroundQuiet() {
        this.background.className = 'contain-sprite-quiet'
    }

    runSession() {
        this.background.className = 'contain-sprite'
        this.hero.run()        
        this.state = 1
    }
}