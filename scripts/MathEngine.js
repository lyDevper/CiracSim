class MathEngine {
    static degToRad(deg) {
        return deg * Math.PI / 180;
    }

    static radToDeg(rad) {
        return rad * 180 / Math.PI;
    }

    static getPosAtTime(t) {
        // the ball is in projectile motion. calculate parametric curve.
        let {x_0, y_0} = MathEngine.getBallInitPos();
        let thetaRad = MathEngine.degToRad(StatePara.theta);
        let omega = StatePara.omega;
        let r = StatePara.r;
        let h_c = StatePara.h_c;
        let g = StatePara.g;
        
        let x_t = x_0 + omega * r * Math.sin(thetaRad) * t;
        let y_t = y_0 + omega * r * Math.cos(thetaRad) * t - 0.5 * g * t ** 2;
        return new Point(x_t, y_t);
    }

    static getYAtX(x) {
        
    }

    static getBallInitPos() {
        let thetaRad = MathEngine.degToRad(StatePara.theta);
        let r = StatePara.r;
        let x_i = - r * Math.cos(thetaRad);
        let y_i = StatePara.h_c + r * Math.sin(thetaRad);
        return new Point(x_i, y_i);
    }

    static getBallFinalPos() {
        
    }
}