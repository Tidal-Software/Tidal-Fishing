import Phaser from 'phaser'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
    }
};



//Loads assets b4 creation
function preload ()
{
    console.log("Loading Images");
    this.load.image('sky', "./src/assets/sky.png");
    this.load.image('ground', './src/assets/platform.png');
    this.load.image('star', './src/assets/star.png');
    this.load.image('bomb', './src/assets/omb.png');
    this.load.spritesheet('dude', './src/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    console.log("Completed Loading Images");
}
//On creation
function create () {
    this.add.image(400,300,'sky');
    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });
}

//every frame
function update ()
{
}

var game = new Phaser.Game(config);