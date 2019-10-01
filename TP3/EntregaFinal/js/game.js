
class Game {

    constructor(containerGame) {
        this.background
        this.state = 0
        this.setBackground(containerGame)
        this.backgroundQuiet()
        this.hero = new Hero('character')
        this.enemy = new Enemy('monster')
    }

    draw() {
        //this.hero = this.setHero ('character')
    }

    runCharacter() {
        this.hero.run()
    }

    jumpCharacter() {
        this.hero.jump()        
    }

    actionHero(e) {
        if (e.keyCode == 32) {
            if (this.state == 0) {
                this.runSession()
                this.enemy.atack()
            } else {
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