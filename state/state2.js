gameObject.state2 = function () {};
gameObject.state2.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#e77828';
        console.log('state2')
    },
    update: function () {},
}