let  gameObject = {};
gameObject.state0 = function () {};
gameObject.state0.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state0');
        stateChangeEvent();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    update: function () {},
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