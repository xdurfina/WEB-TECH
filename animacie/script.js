// const animate = () => {
//     console.log('animujem!');
//     anime({
//         targets: '.yellow',
//         translateX: 250,
//         rotate: '1turn',
//         // backgroundColor: '#FFF',
//         duration: 1000
//     });
// };

var path = anime.path("#cesta1");
var path2 = anime.path("#cesta2");
var path3 = anime.path("#cesta3");


var easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];

var motionPath = anime({
    targets: '.box.red',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: function (el, i) {
        return easings[i];
    },
    duration: 10000,
    loop: true
});

var motionPath = anime({
    targets: '.box.blue',
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    easing: function (el, i) {
        return easings[i];
    },
    duration: 10000,
    loop: true
});

var motionPath = anime({
    targets: '.box.yellow',
    translateX: path3('x'),
    translateY: path3('y'),
    rotate: path3('angle'),
    easing: function (el, i) {
        return easings[i];
    },
    duration: 10000,
    loop: true
});





