import * as kontra from '../../kontra.js';

let spriteSheet: kontra.SpriteSheet = kontra.SpriteSheet({
  image: new Image(),
  frameWidth: 32,
  frameHeight: 32
});

spriteSheet.createAnimations({
  walk: {
    frames: 1,
    frameRate: 20
  }
});

// options
kontra.SpriteSheet({
  image: new Image(),
  frameWidth: 32,
  frameHeight: 32,
  frameMargin: 32,
  animations: {
    walk: {
      frames: 1,
      frameRate: 20,
      loop: false
    }
  }
});