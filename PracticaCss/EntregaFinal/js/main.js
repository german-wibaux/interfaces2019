"use strict"

window.onload = function() {
    let avgHour
    let avgMin
    let avgSeg

    // let canvas = document.getElementById("picture");
    // let context = document.getElementById("picture").getContext("2d");

    // function clock() {
    // 	let time = new Date();
    // 	let hour = time.getHours();
    // 	let min = time.getMinutes();
    // 	let seg = time.getSeconds();

    //     if (hour >= 12) {
    //      	let avgHour = hour / 12 * 360;
    //     }  else {
    //     	let avgHour = hour / 24 * 360;
    //     }

    //     avgHour += min / 60 * 30;
    //     avgMin = min / 60 * 360;
    //     avgSeg = seg / 60 * 360;

    //     document.getElementById("hour").style.transform = "rotate("+ avgHour +"deg)";
    //     document.getElementById("min").style.transform = "rotate("+ avgMin +"deg)";
    //     document.getElementById("seg").style.transform = "rotate("+ avgSeg +"deg)";
    // }


    document.getElementById("seg").style.transform = "rotate(90deg)";
    // let rect1 = new Rect(0, 0, 50, 50, "#ffffff", context);
    // setInterval(clock, 1000);
    const root = document.documentElement;
    document.onmousemove = move
    let rect3 = document.getElementsByClassName('rect');

    function move(e) {

        // tell the browser we're handling this mouse event
        e.preventDefault()
        e.stopPropagation()
            // let position = getPosition(e)
            // position = getPosition(e)

        // rect1.changePosition(position[0], position[1], context)
        let x = e.clientX / innerWidth;
        let y = e.clientY / innerHeight;
        console.log("paso")
        root.style.setProperty('--mouse-x', x)
        root.style.setProperty('--mouse-y', y)

    }




    rect.onmousedown = myDownClick

    function myDownClick() {
        changeColor(rect)
        changeScale(rect)
        changePosition(rect)


    }

    function changeScale(ball) {
        for (let i = 0; i < 2; i++) {
            let width = Math.floor((Math.random() * 200) + 10);
            let height = Math.floor((Math.random() * 200) + 10);
            rect.style.width = width + "px"
            rect.style.height = height + "px"
        }
    }

    function changePosition(ball) {
        for (let i = 0; i < 2; i++) {
            let top = Math.floor((Math.random() * 200) + 10);
            let left = Math.floor((Math.random() * 200) + 10);
            rect.style.top = top + "px"
            rect.style.left = left + "px"
        }
    }



    // function chanScale() {
    //     let scale = ""
    //     for (let i = 0; i < 2; i++) {
    //         let sub = Math.floor(Math.random() * 256).toString(16)
    //         color += (sub.length == 1 ? "0" + sub : sub)

    //     }

    // }

    function getPosition(event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
        let y = event.clientY - rect.top; // y == the location of the click in the document - the location (relative to the top) of the canvas in the document
        return [x, y];
    }

    function getSetStyle(option) {
        switch (option) {
            case 0:
                let setStyle = [
                    [backgroundColor, "#333333"],
                    [width, "8rem"],
                    [heigth, "8rem"]
                ];
                return setStyle;
            case 1:
                alert("Bananan");
                break;
        }
    }


    function changeColor(ball) {
        let color = "";
        for (let i = 0; i < 3; i++) {
            let sub = Math.floor(Math.random() * 256).toString(16)
            color += (sub.length == 1 ? "0" + sub : sub)
        }
        rect.style.backgroundColor = "#" + color

        //     let sub = Math.floor(Math.random() * 256).toString(8)
        //     color += (sub.length == 1 ? "0" + sub : sub)

        // let setStylus = getSetStyle(color);
        // console.log(setStylus);
        // for (let i = 0; i < setStylus.length; i) {

        //     console.log(setStylus);
        // }       


    }



    /**
     
     function get_random_color() 
     {
         var color = "";
         for(var i = 0; i < 3; i++) {
             var sub = Math.floor(Math.random() * 256).toString(16)
             color += (sub.length == 1 ? "0" + sub : sub)
         }
         return "#" + color
     }

     */
}