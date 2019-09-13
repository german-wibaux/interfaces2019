class Point {
    constructor(x, y, radius, colour, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
        this.drawPoint(ctx);
        this.dragging = false;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setDragging(value) {
        this.dragging = value;
    }

    isDragging() {
        return this.dragging;
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }

    getRadius() {
        return this.radius;
    }

    drawPoint(ctx) {
        ctx.fillStyle = this.colour;
        ctx.beginPath(); //Start path
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
        ctx.fill(); // Close the path and fill.
    }

}