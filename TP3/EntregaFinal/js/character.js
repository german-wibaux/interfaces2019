class Character {
    constructor(element) {
        this.element = element        
        this.action = this.quiet()
        
    }

    setPosition(top, left, right, bottom) {
        this.top = top
        this.left = left
        this.right = right
        this.bottom = bottom
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