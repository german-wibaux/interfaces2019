let canvas = document.getElementById("picture");
let context = document.getElementById("picture").getContext("2d");
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;
var mouseClicked = false;
var mouseReleased = true;
canvas.addEventListener("click", addPoint, false);
// General variables of the estructures
let shapes = [];
let polygon = new Polygon();
shapes.push(polygon);
let currShape = 0;

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

function closePolygon() {
    let shape = shapes[currShape];
    shape.close(context);
}

function getPosition(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
    let y = event.clientY - rect.top; // y == the location of the click in the document - the location (relative to the top) of the canvas in the document
    return [x, y];
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