class Character {
    constructor(width, heigth, top, left, right, bottom) {
        this.width = width
        this.heigth = heigth
        this.left = left
        this.top = top
        this.bottom = bottom
        this.right = right
        this.action = 'quiet-reaper'
    }

    setPosition(top, left, right, bottom) {
        this.top = top
        this.left = left
        this.right = right
        this.bottom = bottom
    }

    run() {
        this.action = 'reaper'
    }

}