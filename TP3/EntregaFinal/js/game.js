
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

    jumpCharacter() {
        this.hero.jump()
    }

    track() { 
        
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

    runCharacter() {
        
        this.hero.run()
    }

    backgroundQuiet() {
        this.background.className = 'contain-sprite-quiet'
    }

    runSession() {
        this.background.className = 'contain-sprite'
        this.hero.run()
        //console.log(this.hero.getPosition().top);
        
        this.state = 1
    }
}