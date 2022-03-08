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
        update: update
    }
};



//Loads assets b4 creation
function preload ()
{
    console.log("Loading Images");
    this.load.image('sky', "./src/assets/sky.png");
    this.load.image('star',"./src/assets/star.png")
    console.log("Completed Loading Images");
}
//On creation
var x = 400;
var y = 300;
function create () {
    //With phaser positioning is from center so 800/600 would be 400/300 to center
    this.add.image(400,300,'sky');

    const stars = this.physics.add.image(x, y, 'star');
    const particles = this.add.particles('green');

    const emitter = particles.createEmitter({
        speed: 500,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    //Update on mouse Move
    this.input.on('pointermove', function (pointer) {
        emitter.setPosition(pointer.x, pointer.y);
    });

}

//every frame
function update ()
{
    x = x+5;
    y=y+5;

}

var game = new Phaser.Game(config);