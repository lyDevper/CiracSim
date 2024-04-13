class Simulator {
    static spriteList = [];
    static interval = null;

    static addSprite(sprite) {
        this.spriteList.push(sprite);
    }

    static updateFrame() {
        for (let sprite of this.spriteList) {
            sprite.update();
            sprite.render();
        }
    }
    static init(fps=24) {
        this.interval = setInterval(() => {
            this.updateFrame();
        }, 1000 / fps);
    }
}