class Sprite {
    constructor(ctx) {
        this.ctx = ctx;
        Simulator.addSprite(this);
    }

    render() {
        // to be overridden
    }

    update() {
        // to be overridden
    }
    
}