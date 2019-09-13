class Polygon {
    constructor() {
        this.points = [];
        this.center = null;
        this.closed = false;
        this.dragging = false;
    }

    getQtyPoints() {
        return this.points.length;
    }

    getPointPos(pos) {
        return this.points[pos];
    }

    addPoint(point, ctx) {
        this.points.push(point);
        this.drawLine(ctx);
    }

    drawLine(ctx) {
        let max = this.points.length - 1;
        if (typeof this.points[max - 1] !== "undefined") {
            var curr = this.points[max],
                prev = this.points[max - 1];
            ctx.beginPath();
            ctx.strokeStyle = "#ffff00";
            ctx.moveTo(prev.getX(), prev.getY());
            ctx.lineTo(curr.getX(), curr.getY());
            ctx.stroke();
        }
    }

    drawCenter(ctx) {
        let x = 0;
        let y = 0;
        for (let i = 0; i < this.points.length; i++) {
            let point = this.points[i];
            x = x + point.getX();
            y = y + point.getY();
        }
        x = x / this.points.length;
        y = y / this.points.length;
        let point = new Point(x, y, 3.5, "#00b33c", ctx);
        this.center = point;
    }

    close(ctx) {
        let curr = this.points[this.points.length - 1],
            prev = this.points[0];
        ctx.beginPath();
        ctx.strokeStyle = "#ffff00";
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();
        this.drawCenter(ctx);
        this.closed = true;
    }

    isClosed() {
        return this.closed;
    }


    isDragging() {
        return this.dragging;
    }

    setCenter(x, y) {
        this.center.setX(x);
        this.center.setY(y);
    }

    getCenter() {
        if (this.center != null)
            return [this.center.getX(), this.center.getY(), this.center.getRadius()];
    }

    setDragging(value) {
        this.dragging = value;
    }

    draw(ctx) {

        for (let i = 0; i < this.points.length - 1; i++) {
            let point = this.points[i];
            let point1 = this.points[i + 1];


            let pointSize = 5; // Change according to the size of the point.


            ctx.fillStyle = "#e60000"; //

            ctx.beginPath(); //Start path
            ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
            ctx.fill(); // Close the path and fill.


            ctx.beginPath();
            ctx.strokeStyle = "#ffff00";
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(point1.x, point1.y);
            ctx.stroke();
        }

        let point = this.points[this.points.length - 1];
        let point1 = this.points[0];
        let pointSize = 5; // Change according to the size of the point.
        ctx.fillStyle = "#e60000"; //
        ctx.beginPath(); //Start path
        ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
        ctx.fill(); // Close the path and fill.
        ctx.beginPath();
        ctx.strokeStyle = "#ffff00";
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point1.x, point1.y);
        ctx.stroke();
        this.drawCenter(ctx);
    }
}