let gameObject = {};
const centerX = 1200 / 2;
const centerY = 600 / 2;
let adam, speed = 4;
let rollSpeed = 200;
let isRunning, isRolling = false;
let faceSide = 'right';
let rightKey, leftKey, upKey, downKey, spaceKey;
let loopCount = 0;

gameObject.state0 = function () {};
gameObject.state0.prototype = {
    preload: function () {
        game.load.image('bg', '/assets/backgrounds/game_background_2.png');
        game.load.spritesheet('adamIdle', '/assets/charecters/_Idle.png', 120, 80);
        game.load.spritesheet('adamRun', '/assets/charecters/_Run.png', 120, 80);
        game.load.spritesheet('adamRoll', '/assets/charecters/_Roll.png', 120, 80);
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('state0');
        stateChangeEvent();
        game.world.setBounds(0, 10, 1500, 550);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        let bg = game.add.sprite(0, 0, 'bg');
        bg.scale.setTo(0.4, 0.28);
        adam = game.add.sprite(centerX, centerY, 'adamIdle');
        adam.anchor.setTo(0.5, 0.5);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;

        adam.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 14, true);
        adam.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 14, true);
        adam.animations.add('roll', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 20, true);
        adam.animations.play('idle');

        game.camera.follow(adam);
        game.camera.deadZone = new Phaser.Rectangle(centerX - 300, centerY - 300, 600, 1200);

        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },
    update: function () {
        // movement of Adam
        if (rightKey.isDown || leftKey.isDown || upKey.isDown || downKey.isDown) {
            adam.scale.setTo(1, 1);
            if (rightKey.isDown) {
                adam.x += speed;
                faceSide = 'right'
            }
            if (leftKey.isDown) {
                adam.scale.setTo(-1, 1);
                adam.x -= speed;
                faceSide = 'left'
            }
            if (upKey.isDown) {
                adam.y -= speed;
                if (adam.y < 165) {
                    adam.y = 165;
                }
            }
            if (downKey.isDown) {
                adam.y += speed;
                if (adam.y > 472) {
                    adam.y = 472;
                }
            }
            if (spaceKey.isDown) {
                if (!isRolling) {
                    isRolling = true;
                    adam.animations.stop();
                    adam.loadTexture('adamRoll');
                    adam.animations.play('roll');
                    if (rightKey.isDown || leftKey.isDown || upKey.isDown || downKey.isDown) {
                        rollSpeed = 20
                    } else {
                        rollSpeed = 200
                    }

                    // Apply a short horizontal movement based on facing direction
                    switch (faceSide) {
                        case 'right':
                            adam.body.velocity.x = rollSpeed;
                            break;
                        case 'left':
                            adam.body.velocity.x = -rollSpeed;
                            break;
                        default:
                        // No horizontal movement for other directions
                    }
                }

                adam.animations.currentAnim.onLoop.add(function() {
                    loopCount++;
                    if (loopCount === 1) {  // End the roll after one loop
                        isRolling = false;
                        loopCount = 0;
                        adam.body.velocity.x = 0
                        idleAdam(); // Switch back to idle animation
                    }
                });
            }
            if (!isRunning) {
                adam.loadTexture('adamRun');
                isRunning = true;
            }
            adam.animations.play('run');
        } else if (spaceKey.isDown) {
            if (!isRolling) {
                isRolling = true;
                adam.animations.stop();
                adam.loadTexture('adamRoll');
                adam.animations.play('roll');
                if (rightKey.isDown || leftKey.isDown || upKey.isDown || downKey.isDown) {
                    rollSpeed = 20
                } else {
                    rollSpeed = 200
                }

                // Apply a short horizontal movement based on facing direction
                switch (faceSide) {
                    case 'right':
                        adam.body.velocity.x = rollSpeed;
                        break;
                    case 'left':
                        adam.body.velocity.x = -rollSpeed;
                        break;
                    default:
                    // No horizontal movement for other directions
                }
            }

            adam.animations.currentAnim.onLoop.add(function() {
                loopCount++;
                if (loopCount === 1) {  // End the roll after one loop
                    isRolling = false;
                    loopCount = 0;
                    adam.body.velocity.x = 0
                    idleAdam(); // Switch back to idle animation
                }
            });
        } else {
             if (!isRolling) idleAdam()
        }
        // roll of Adam
    },
};
function changeState(e, stateNum) {
    game.state.start('state'+stateNum);
}
function addKeyCallBack(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function idleAdam() {
    if (adam.animations.currentAnim.name != 'idle') {
        adam.animations.stop();
        adam.loadTexture('adamIdle');
        adam.animations.play('idle');
        isRunning = false;
    }
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