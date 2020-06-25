class Crystal {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
        this.layers = []
        jumble(layerConstructors);
        layerConstructors.forEach((lcon) => {
          let picker = random(1);
          if (picker > lcon.weight) {
            this.layers.push(lcon.init());
          }
        });
    }

    render(angle) {
        push();        
        translate(this.x, this.y);
        this.layers.forEach((layer) => {
          layer.render(angle);
        });
        pop();
    }
}