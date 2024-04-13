class Point {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    distanceTo(p) {
        return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
    }
}