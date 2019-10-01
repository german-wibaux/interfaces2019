class Hero {
    constructor(id) {
        this.id = id
        document.getElementById(this.id).className = 'quiet-reaper'
        //this.draw()
    }

    // setPosition(top, left, right, bottom) {
    //     this.top = top
    //     this.left = left
    //     this.right = right
    //     this.bottom = bottom
    // }
    
    getPosition() {
        return document.getElementById(this.id).getBoundingClientRect()
    }

    quiet() {
        this.element.className = 'quiet-reaper'
    }

    run() {
        
        document.getElementById(this.id).className = 'reaper'
    }

    jump() {
        console.log("pasooo");
        document.getElementById(this.id).className = 'reaper-jump'
    }

    // draw() {
        
    //     document.getElementById(this.id).style.bottom = 100 + "px"
    //     console.log(document.getElementById(this.id).style.bottom);
        
    // }
    
}