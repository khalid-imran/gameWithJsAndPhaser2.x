gameObject.state8 = function () {};
gameObject.state8.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state8');
        stateChangeEvent();
    },
    update: function () {},
}