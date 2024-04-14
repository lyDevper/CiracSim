class Ball extends Sprite {
    constructor(ctx) {
        super(ctx);
        this.color = '#FFEBA6';        
    }

    drawBall() {
        let ballRadius = GridProps.meterToPix(StatePara.ballDiameter / 2);
        let theta = StatePara.theta;
        let thetaRad = theta * Math.PI / 180;
        let x_i_actual = - StatePara.r * Math.cos(thetaRad);
        let y_i_actual = StatePara.h_c + StatePara.r * Math.sin(thetaRad);
        let p_ball = GridProps.xyToCanvasPoint(x_i_actual, y_i_actual);

        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(p_ball.x, p_ball.y, ballRadius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    render() {
        this.drawBall();
    }
}