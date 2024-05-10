let  gameObject = {};
const centerX = 1200 / 2;
const centerY = 600 /2;
let adam, speed = 4;
gameObject.state0 = function () {};
gameObject.state0.prototype = {
    preload: function () {
        game.load.image('bg', '/assets/backgrounds/game_background_2.png');
        game.load.spritesheet('adam', '/assets/charecters/_Idle.png', 120, 80);
        game.load.spritesheet('adamWalk', '/assets/charecters/_Run.png', 120, 80);
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('state0');
        stateChangeEvent();
        game.world.setBounds(0, 10, 1500, 550);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        let bg = game.add.sprite(0, 0, 'bg')
        bg.scale.setTo(0.4, 0.28);
        adam = game.add.sprite(centerX, centerY, 'adam');
        adam.anchor.setTo(0.5, 0.5);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        adam.animations.add('idle', [0,1,2,3,4,5,6,7,8,9]);
        adam.animations.add('adamWalk', [0,1,2,3,4,5,6,7,8,9]);
        adam.animations.play('idle', 14, true);

        game.camera.follow(adam);
        game.camera.deadZone = new Phaser.Rectangle(centerX - 300, centerY - 300, 600, 1200)
    },
    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            adam.scale.setTo(1, 1)
            adam.x +=speed
            // adam.animations.play('adamWalk', 14, true);
        } else {
            // adam.animations.stop('adamWalk')
            // adam.animations.play('idle', 14, true);
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            adam.scale.setTo(-1, 1)
            adam.x -=speed
            // adam.animations.play('adamWalk', 14, true);
        } else {
            // adam.animations.stop('adamWalk')
            // adam.animations.play('idle', 14, true);
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            adam.y -=speed
            if (adam.y < 165) {
                adam.y = 165;
            }
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            adam.y +=speed
            if (adam.y > 472) {
                adam.y = 472;
            }
        }
    },
}
function changeState(e, stateNum) {
    game.state.start('state'+stateNum);
}
function addKeyCallBack(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function stateChangeEvent() {
    addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9);
}