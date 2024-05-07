gameObject.state7 = function () {};
gameObject.state7.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state7');
        stateChangeEvent();
    },
    update: function () {},
}