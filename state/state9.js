gameObject.state9 = function () {};
gameObject.state9.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state9');
        stateChangeEvent();
    },
    update: function () {},
}