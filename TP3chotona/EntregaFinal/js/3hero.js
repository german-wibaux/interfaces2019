class Hero {
    constructor(element) {
        this.element = element        
        this.left
        this.right
        this.bottom
        this.top
        this.quiet()         
    }

    setPosition(top, left, right, bottom) {
        this.top = top
        this.left = left
        this.right = right
        this.bottom = bottom
    }
    
    getPosition() {
        return [this.top, this.left, this.right, this.bottom]
    }

    quiet() {
        this.element.className = 'quiet-reaper'
    }

    run() {
        this.element.className = 'reaper'
    }

    jump() {
        this.element.className = 'reaper-jump'
    }
    
}