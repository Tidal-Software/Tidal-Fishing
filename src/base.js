import Phaser from 'phaser'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#175029",
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
    console.log("Completed Loading Images");
}
//On creation
function create () {
    this.add.image(400,300,'sky');
    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
        speed: 300,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });
}

//every frame
function update ()
{
}

var game = new Phaser.Game(config);