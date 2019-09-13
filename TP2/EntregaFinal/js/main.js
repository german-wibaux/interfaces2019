let canvas = document.getElementById("picture");
let context = document.getElementById("picture").getContext("2d");
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;
var mouseClicked = false;
var mouseReleased = true;
canvas.addEventListener("click", addPoint, false);
document.getElementById("close").addEventListener("click", closePolygon, false);
document.addEventListener("keydown", changeBackground);
canvas.addEventListener('dblclick', deletePoint, false);
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

let dragPoint = false;
let startXpoint;
let startYpoint;
let pointDrag;

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

    // test each shape center to see if mouse is inside
    dragok = false;
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        let center = shape.getCenter();
        if (shape.isClosed()) {

            if (position[0] > center[0] && position[0] < center[0] + center[2] &&
                position[1] > center[1] && position[1] < center[1] + center[2]) {
                // if yes, set that shapes isDragging=true
                dragok = true;
                shape.setDragging(true);
                shapeDrag = shape;
            }


            for (let i = 0; i < shape.getQtyPoints(); i++) {
                let point = shape.getPointPos(i);

                if (position[0] > point.getX() - point.getRadius() && position[0] < point.getX() + point.getRadius() &&
                    position[1] > point.getY() - point.getRadius() && position[1] < point.getY() + point.getRadius()) {

                    dragPoint = true;
                    point.setDragging(true);
                    pointDrag = point;
                    // save the current mouse position
                    startXpoint = position[0];
                    startYpoint = position[1];
                }

            }

        }
    }
    // save the current mouse position
    startX = position[0];
    startY = position[1];
}

function changeBackground(e) {
    if (e.keyCode == 67) {
        document.addEventListener("wheel", newColours);
    }
}

function deletePoint(e) {
    position = getPosition(e);
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        for (let j = 0; j < shape.getQtyPoints(); j++) {
            let point = shape.getPointPos(j);
            if (position[0] > point.getX() - point.getRadius() && position[0] < point.getX() + point.getRadius() &&
                position[1] > point.getY() - point.getRadius() && position[1] < point.getY() + point.getRadius()) {

                shape.deletePointPos(j);
                draw();
            }
        }

    }
}

function newColours(e) {
    if (e.deltaY < 0) {
        // console.log('scrolling up');
        // document.getElementById('status').textContent = 'scrolling up';
        let shape = shapes[0];
        let point = shape.getPointPos(0);
        let imageData = context.getImageData(0, 0, width, height);

        // console.log(getGreen(imageData, point.getX(), point.getY()));
    } else if (e.deltaY > 0) {
        // console.log('scrolling down');
        // document.getElementById('status').textContent = 'scrolling down';
    }
}

function getGreen(imageData, x, y) {
    index = (x + y * imageData.width) * 4;
    return imageData.data[index + 1];
}

// handle mouse moves
function myMove(e) {
    // if we're dragging shape
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

        // move each shape that isDragging 
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

        // redraw the scene with the new shape positions
        draw();

        // reset the starting mouse position for the next mousemove
        startX = position[0];
        startY = position[1];

    }

    // if we're dragging point
    if (dragPoint) {

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        position = getPosition(e);

        // calculate the distance the mouse has moved
        // since the last mousemove
        let dx = position[0] - startXpoint;
        let dy = position[1] - startYpoint;

        // move each point that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove


        if (pointDrag.isDragging()) {
            x = pointDrag.getX() + dx;
            y = pointDrag.getY() + dy;
            pointDrag.setX(x);
            pointDrag.setY(y);
        }

        // redraw the scene with the new shape positions
        draw();

        // reset the starting mouse position for the next mousemove
        startXpoint = position[0];
        startYpoint = position[1];

    }

}

// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    dragok = false;
    dragPoint = false;
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].setDragging(false);
    }

    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        for (let i = 0; i < shape.getQtyPoints(); i++) {
            shape.getPointPos(i).setDragging(false);
        }

    }

}

// clear the canvas
function clear() {
    context.clearRect(0, 0, width, height);
}

//Redraw the scene
function draw() {
    clear();
    // redraw each shape in the shapes[] array
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        shape.draw(context);
    }
}

//Canvas add point
function addPoint(event) {
    let points = getPosition(event);
    if (!overlapCenter(points) && !overlapPoint(points)) {
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
                // if yes, set that shapes isDragging=true
                isvalid = true;
            }
        }
    }

    return isvalid;
}

function overlapPoint(points) {
    let setPoints = [];
    let isvalid = false;
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];

        if (shape.isClosed()) {
            for (let i = 0; i < shape.getQtyPoints(); i++) {
                let point = shape.getPointPos(i);
                setPoints.push(point);
            }
        }
    }
    if (setPoints[0] !== "undefined") {
        for (let i = 0; i < setPoints.length; i++) {
            let point = setPoints[i];
            if (points[0] > point.getX() && points[0] < point.getX() + point.getRadius() &&
                points[1] > point.getY() && points[1] < point.getY() + point.getRadius()) {
                // if yes, set that shapes isDragging=true
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