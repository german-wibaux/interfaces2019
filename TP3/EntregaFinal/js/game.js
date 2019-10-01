
class Game {

    constructor(containerGame, containerGame1) {
        this.background
        this.background2
        this.background3
        this.state = 0
        this.setBackground(containerGame, containerGame1)
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

    setBackground(backg, backg1) {
        this.background = backg
        this.background2 = backg1
    }

    getState() {
        return this.state
    }

    backgroundQuiet() {
        this.background.className = 'contain-sprite-quiet'
        this.background2.className = 'contain-sprite-quiet-1'
    }

    runSession() {
        this.background.className = 'contain-sprite'
        this.background2.className = 'contain-sprite-1'
        this.hero.run()        
        this.state = 1
    }
}