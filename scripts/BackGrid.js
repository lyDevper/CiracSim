class BackGrid extends Sprite {
    constructor(ctx) {
        super(ctx);

        this.gridColor = '#4C84AA88';
        this.gridWidth = 0.5;
        this.axisColor = '#D49AE8';
        this.axisWidth = 2;
    }

    drawGridLines() {
        let numGridLeft = Math.floor(GridProps.originX / GridProps.pixPerGridCell);
        let numGridRight = Math.floor((GridProps.canvasWidth - GridProps.originX) / GridProps.pixPerGridCell);
        let numGridTop = Math.floor(GridProps.originY / GridProps.pixPerGridCell);
        let numGridBottom = Math.floor((GridProps.canvasHeight - GridProps.originY) / GridProps.pixPerGridCell);

        this.ctx.strokeStyle = this.gridColor;
        this.ctx.lineWidth = this.gridWidth;
        this.ctx.beginPath();
        for (let i = 1; i <= numGridLeft; i++) {
            this.ctx.moveTo(GridProps.originX - i * GridProps.pixPerGridCell, 0);
            this.ctx.lineTo(GridProps.originX - i * GridProps.pixPerGridCell, GridProps.canvasHeight);
        }
        for (let i = 1; i <= numGridRight; i++) {
            this.ctx.moveTo(GridProps.originX + i * GridProps.pixPerGridCell, 0);
            this.ctx.lineTo(GridProps.originX + i * GridProps.pixPerGridCell, GridProps.canvasHeight);
        }
        for (let i = 1; i <= numGridTop; i++) {
            this.ctx.moveTo(0, GridProps.originY - i * GridProps.pixPerGridCell);
            this.ctx.lineTo(GridProps.canvasWidth, GridProps.originY - i * GridProps.pixPerGridCell);
        }
        for (let i = 1; i <= numGridBottom; i++) {
            this.ctx.moveTo(0, GridProps.originY + i * GridProps.pixPerGridCell);
            this.ctx.lineTo(GridProps.canvasWidth, GridProps.originY + i * GridProps.pixPerGridCell);
        }
        this.ctx.stroke();
    }

    drawAxes() {
        this.ctx.strokeStyle = this.axisColor;
        this.ctx.lineWidth = this.axisWidth;

        this.ctx.beginPath();
        // y-axis
        this.ctx.moveTo(GridProps.originX, 0);
        this.ctx.lineTo(GridProps.originX, GridProps.canvasHeight);
        // x-axis
        this.ctx.moveTo(0, GridProps.originY);
        this.ctx.lineTo(GridProps.canvasWidth, GridProps.originY);
        this.ctx.stroke();
    }

    render() {
        this.drawGridLines();
        this.drawAxes();
    }
}