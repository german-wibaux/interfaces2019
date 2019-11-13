class Enemy {
    constructor(id) {
        this.id = id
        document.getElementById(this.id).className = 'monster-quiet'
    }
    
    getPosition() {
        return document.getElementById(this.id).getBoundingClientRect()
    }

    atack() {
        // document.getElementById(this.id).style.WebkitAnimationPlayState = "paused"
        // document.getElementById(this.id).style.WebkitAnimationPlayState = "unset" 
        document.getElementById(this.id).style.WebkitAnimationPlayState = "running"      
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
        // document.getElementById(this.id).style.WebkitAnimation = "monsterDisappear 4s ";
        // document.getElementById(this.id).style.WebkitAnimationPlayState = "running"
        
        setTimeout(() => {
            
            document.getElementById(this.id).className = "monster-disappear";
            document.getElementById(this.id).style.WebkitAnimationPlayState = "running"
          }, 1000);
        //setTimeout(document.getElementById(this.id).style.WebkitAnimationPlayState = "running", 2200)        
    }

    


}