class Robot extends Sprite {
    constructor(ctx) {
        super(ctx);
        this.baseLength = 0.40; // m
    }

    drawBase() {
        let baseLength = this.baseLength;
        let baseLineWidth = 3; // px
        let baseLineColor = '#9CD5FF';

        // draw base line
        let p1 = GridProps.xyToCanvasPoint(-baseLength / 2, 0);
        let p2 = GridProps.xyToCanvasPoint(baseLength / 2, 0);

        this.ctx.strokeStyle = baseLineColor;
        this.ctx.lineWidth = baseLineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();

        // draw vretical beam
        let p3 = GridProps.xyToCanvasPoint(0, 0);
        let p4 = GridProps.xyToCanvasPoint(0, StatePara.h_c);

        this.ctx.strokeStyle = baseLineColor;
        this.ctx.lineWidth = baseLineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(p3.x, p3.y);
        this.ctx.lineTo(p4.x, p4.y);
        this.ctx.stroke();

    }

    render() {
        this.drawBase();
    }
}