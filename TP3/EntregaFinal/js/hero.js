class Hero {
    constructor(id) {
        this.id = id
        document.getElementById(this.id).className = 'quiet-reaper'
    }
    
    getPosition() {
        return document.getElementById(this.id).getBoundingClientRect()
    }

    run() {
        document.getElementById(this.id).className = 'reaper'
    }

    jump() {
        document.getElementById(this.id).className = 'reaper-jump'
        
    }

    quiet() {         
        document.getElementById(this.id).className = 'quiet-reaper'
    }
    
    die() {
        document.getElementById(this.id).style.WebkitAnimationPlayState = "running"
        document.getElementById(this.id).className = 'reaper-dying'
    }

    stop() {
        document.getElementById(this.id).style.WebkitAnimationPlayState = "paused"
        document.getElementById(this.id).style.WebkitAnimationPlayState = "running"
        document.getElementById(this.id).className = 'reaper-dying'
    }

}