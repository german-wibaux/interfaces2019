class Rect {
    constructor(x, y, height, width, colour, ctx) {
        this.x = x;
        this.y = y;
        this.heig = height;
        this.widt = width;
        this.colour = colour;
        this.setMeas(this.heig, this.widt);
        this.drawRect(ctx);
        this.dragging = false;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setMeas(height, width) {
        this.height = height;
        this.width = width;
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

    getHeigth() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    changePosition(x, y, ctx) {
        ctx.clearRect(this.x, this.y, this.widt, this.heig);
        this.x = x;
        this.y = y;
        ctx.fillRect(this.x, this.y, this.widt, this.heig);
    }

    drawRect(ctx) {
        console.log(this.width + "///" + this.height);

        ctx.fillRect(this.x, this.y, this.widt, this.heig);

    }

}