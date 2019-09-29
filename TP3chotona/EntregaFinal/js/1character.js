class Character {
    constructor(element) {
        this.element = element        
        this.left
        this.right
        this.bottom
        this.top        
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

}