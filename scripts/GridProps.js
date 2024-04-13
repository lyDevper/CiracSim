class GridProps {
    static init(canvas) {
        this.canvas = canvas;
        this.updateCanvasSize();

        addEventListener('resize', this.updateCanvasSize.bind(this));
    }

    static updateCanvasSize() {
        this.canvas.width = 0.72 * window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;

        this.pixPerMeter = this.canvasWidth / 3.6; // px/m
        this.gridCellSize = 0.2; // m
        this.pixPerGridCell = this.pixPerMeter * this.gridCellSize; // px

        this.originX = this.canvasWidth / 5; // px
        this.originY = 2 * this.canvasHeight / 3; // px
    }

    static meterToPix(meter) {
        return meter * this.pixPerMeter;
    }

    static pixToMeter(pix) {
        return pix / this.pixPerMeter;
    }

    // convert x, y from meter to pixel
    static actualToCanvasPoint(point)  {
        let x = this.originX + this.meterToPix(point.x);
        let y = this.originY - this.meterToPix(point.y);
        return new Point(x, y);
    }

    // convert x, y from pixel to meter
    static canvasToActualPoint(point) {
        let x = this.pixToMeter(point.x - this.originX);
        let y = this.pixToMeter(this.originY - point.y);
        return new Point(x, y);
    }


}