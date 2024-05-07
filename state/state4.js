gameObject.state4 = function () {};
gameObject.state4.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state4');
        stateChangeEvent();
    },
    update: function () {},
}