class Enemy {
    constructor(id) {
        this.id = id
        document.getElementById(this.id).className = 'monster'
        //this.draw()
    }
    
    getPosition() {
        return document.getElementById(this.id).getBoundingClientRect()
    }
    
}