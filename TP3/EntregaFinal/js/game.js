
class Game {

    constructor(containerGame, containerGame1, containerGame2) {
        this.background
        this.background2
        this.background3
        this.state = 0
        this.setBackground(containerGame, containerGame1, containerGame2)
        this.backgroundQuiet()
        this.hero = new Hero('character')
        this.enemy = new Enemy('monster')
        this.enemy1 = new Enemy('monster1')
        this.t
        this.n
        this.points = 0
    }

    runCharacter() {
        this.hero.run()
    }

    jumpCharacter() {
        this.hero.jump()        
    }

    gameOver(){
        window.clearInterval(this.n)
        // let aux = document.getElementById("number").html
        this.state = 0
        this.enemy.disappear()
        let x = document.getElementById("points").innerText;
        let res = document.getElementById("max-points").innerText;
        let x1 = parseInt(x)
        let res1 = parseInt(res)
        if (res1 < x1) {
            this.hero.stop()
            this.backgroundQuiet()
            var l = document.getElementById("max-points");
            l.innerHTML = x1;
            let gameH1 = document.getElementById('begin-game')
            gameH1.innerHTML = "Perdiste! Presiona la barra para comenzar"
            gameH1.className = 'beginGameH1'
        } else {
            this.hero.stop()
            this.backgroundQuiet()
            let gameH1 = document.getElementById('begin-game')
            gameH1.innerHTML = "Perdiste! Presiona la barra para comenzar"
            gameH1.className = 'beginGameH1'
        }
        
        
        // alert(this.hero)
        //this.hero.die()
        
        //this.enemy.quiet()        
        //this.hero.quiet()
        
        
        
    }   

    actionHero(e) {
        if (e.keyCode == 32) {
            let gameH1 = document.getElementById('begin-game')
            if (this.state == 0) {
                this.runSession()
                
                gameH1.innerHTML = "Presionar barra para saltar"
                
                this.enemy.atack()
                checkState()
            } else {
                gameH1.className = 'hidden'
                this.hero.jump()        
                this.t = setTimeout(runCharacter, 1100)
            }        
            
        }
    }

    stop() {
        clearTimeout(this.t); 
    }

    getTrackHero() {
        return this.hero.getPosition()
    }

    getTrackEnemy() {
        return this.enemy.getPosition()
    }

    setBackground(backg, backg1, backg2) {
        this.background = backg
        this.background2 = backg1
        this.background3 = backg2
    }

    getState() {
        return this.state
    }

    backgroundQuiet() {
        this.background.className = 'contain-sprite-quiet'
        this.background2.className = 'contain-sprite-quiet-1'
        this.background3.className = 'contain-sprite-quiet-2'
    }

    runSession() {
        this.background.className = 'contain-sprite'
        this.background2.className = 'contain-sprite-1'
        this.background3.className = 'contain-sprite-2'
        this.hero.run()        
        this.state = 1
        var n = 0;
        var l = document.getElementById("points");
        this.n = window.setInterval(function(){
        l.innerHTML = n;
        n++;
        },50);
    }
}