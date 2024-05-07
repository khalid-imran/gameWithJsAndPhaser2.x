gameObject.state1 = function () {};
gameObject.state1.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#5ae31b';
        console.log('state1');
        stateChangeEvent();
    },
    update: function () {},
}