class Enemy {
    constructor(id) {
        this.id = id
        document.getElementById(this.id).className = 'monster-quiet'
        //this.draw()
    }
    
    getPosition() {
        return document.getElementById(this.id).getBoundingClientRect()
    }

    atack() {
        document.getElementById(this.id).className = 'monster'
    }

    quiet() {
        document.getElementById(this.id).className = 'monster-quiet'
    }
    
    disappear() {
        document.getElementById(this.id).className = 'monster-disappear'
    }

    stopOnly() {
        document.getElementById(this.id).style.WebkitAnimationPlayState = "paused"
    }


}