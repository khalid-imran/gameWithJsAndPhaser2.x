gameObject.state6 = function () {};
gameObject.state6.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state6');
        stateChangeEvent();
    },
    update: function () {},
}