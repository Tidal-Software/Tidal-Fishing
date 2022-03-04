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
    this.load.image('star',"./src/assets/star.png")
    console.log("Completed Loading Images");
}
//On creation
var x = 400;
var y = 300;
function create () {
    //With phaser positioning is from center so 800/600 would be 400/300 to center
    this.add.image(400,300,'sky');
    this.add.image(x, y, 'star');
    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
        speed: 500,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });
}

//every frame
function update ()
{
    x= this.input.mousePointer.x;
    y = this.input.mousePointer.y;
}

var game = new Phaser.Game(config);