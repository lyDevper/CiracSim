class MathEngine {
    static degToRad(deg) {
        return deg * Math.PI / 180;
    }

    static radToDeg(rad) {
        return rad * 180 / Math.PI;
    }

    static getPosAtTime(t) {
        // the ball is in projectile motion. calculate parametric curve.        
        let thetaRad = MathEngine.degToRad(StatePara.theta);
        let omega = StatePara.omega;
        let r = StatePara.r;
        let h_c = StatePara.h_c;
        let x_0 = - r * Math.cos(thetaRad);
        let y_0 = h_c + r * Math.sin(thetaRad);
        let g = StatePara.g;
        //console.log(`x_0: ${x_0}, y_0: ${y_0}, theta: ${StatePara.theta}, omega: ${omega}, r: ${r}, h_c: ${h_c}, g: ${g}`);
        
        let x_t = x_0 + omega * r * Math.sin(thetaRad) * t;
        let y_t = y_0 + omega * r * Math.cos(thetaRad) * t - 0.5 * g * t ** 2;
        return new Point(x_t, y_t);
    }

    static getYAtX(x) {
        let thetaRad = MathEngine.degToRad(StatePara.theta);
        let omega = StatePara.omega;
        let r = StatePara.r;
        let h_c = StatePara.h_c;
        let g = StatePara.g;

        let y = (h_c + r * Math.sin(thetaRad)) + 
                (x + r * Math.cos(thetaRad)) / Math.tan(thetaRad) + 
                - 0.5 * g * ((x + r * Math.cos(thetaRad)) / (omega * r * Math.sin(thetaRad))) ** 2;

        return y;
    }

    static getBallInitPos() {
        let thetaRad = MathEngine.degToRad(StatePara.theta);
        let r = StatePara.r;
        let x_i = - r * Math.cos(thetaRad);
        let y_i = StatePara.h_c + r * Math.sin(thetaRad);
        console.log(`x_i: ${x_i}, y_i: ${y_i}`);
        return new Point(x_i, y_i);
    }

    static getBallFinalPos() {
        
    }
}