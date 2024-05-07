gameObject.state5 = function () {};
gameObject.state5.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state5');
        stateChangeEvent()
    },
    update: function () {},
}