let canvas = document.getElementById("picture");
let context = document.getElementById("picture").getContext("2d");
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;
var mouseClicked = false;
var mouseReleased = true;
canvas.addEventListener("click", addPoint, false);
document.getElementById("close").addEventListener("click", closePolygon, false);

// General variables of the estructures
let shapes = [];
let polygon = new Polygon();
shapes.push(polygon);
let currShape = 0;

// drag related variables
let dragok = false;
let startX;
let startY;
let shapeDrag;

// listen for mouse events
canvas.onmousedown = myDown;
canvas.onmousemove = myMove;
canvas.onmouseup = myUp;

// handle mousedown events
function myDown(e) {

    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    position = getPosition(e);

    // test each rect to see if mouse is inside
    dragok = false;
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        let center = shape.getCenter();
        if (shape.isClosed()) {

            if (position[0] > center[0] && position[0] < center[0] + center[2] &&
                position[1] > center[1] && position[1] < center[1] + center[2]) {
                // if yes, set that rects isDragging=true
                dragok = true;
                shape.setDragging(true);
                shapeDrag = shape;
            }
        }
    }
    // save the current mouse position
    startX = position[0];
    startY = position[1];
}

// handle mouse moves
function myMove(e) {
    // if we're dragging anything...
    if (dragok) {

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        position = getPosition(e);

        // calculate the distance the mouse has moved
        // since the last mousemove
        let dx = position[0] - startX;
        let dy = position[1] - startY;

        // move each rect that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove


        if (shapeDrag.isDragging()) {
            for (let i = 0; i < shapeDrag.getQtyPoints(); i++) {
                let point = shapeDrag.getPointPos(i);
                x = point.getX() + dx;
                y = point.getY() + dy;
                point.setX(x);
                point.setY(y);
            }
            let center = shapeDrag.getCenter();
            x = center[0] += dx;
            y = center[1] += dy;
            shapeDrag.setCenter(x, y);
        }

        // redraw the scene with the new rect positions
        draw();

        // reset the starting mouse position for the next mousemove
        startX = position[0];
        startY = position[1];

    }
}

// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    dragok = false;
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].setDragging(false);
    }
}

// clear the canvas
function clear() {
    context.clearRect(0, 0, width, height);
}

// redraw the scene
function draw() {
    clear();
    // redraw each rect in the rects[] array
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        shape.draw(context);
    }
}

function addPoint(event) {
    let points = getPosition(event);
    if (!overlapCenter(points)) {
        let shape = shapes[currShape];
        if (!shape.isClosed()) {
            let point = new Point(points[0], points[1], 5, "#e60000", context);
            shape.addPoint(point, context);
        } else {
            let addShape = new Polygon();
            shapes.push(addShape);
            currShape++;
            addPoint(event);
        }
    }


}

function overlapCenter(points) {
    let setCenter = [];
    let isvalid = false;
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];

        if (shape.isClosed()) {
            let center = shape.getCenter();
            setCenter.push(center);
        }
    }

    if (setCenter[0] !== "undefined") {
        for (let i = 0; i < setCenter.length; i++) {
            let center = setCenter[i];
            if (points[0] > center[0] && points[0] < center[0] + center[2] &&
                points[1] > center[1] && points[1] < center[1] + center[2]) {
                // if yes, set that rects isDragging=true
                isvalid = true;
            }
        }
    }

    return isvalid;
}

function getPosition(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
    let y = event.clientY - rect.top; // y == the location of the click in the document - the location (relative to the top) of the canvas in the document
    return [x, y];
}

function closePolygon() {
    let shape = shapes[currShape];
    shape.close(context);
}