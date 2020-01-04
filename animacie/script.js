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

const path = anime.path("#cesta1");
const path2 = anime.path("#cesta2");
const path3 = anime.path("#cesta3");

const poradieaut = [];

// const easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];




function motionPath1() {
    modreauto.style.marginTop = "0px";
    anime({
        targets: '.box.red',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    });
    const spravneporadie = [1,2,3];
    poradieaut.push(1);
    poradieaut.push(2);
    poradieaut.push(3);
    if (poradieaut.sort() === spravneporadie) {
        console.log("sikokot");
    } else {console.log(poradieaut.sort())}
}


const modreauto = document.getElementById("modreauto");
modreauto.addEventListener('click', motionPath1);


const motionPath2 = anime({
    targets: '.box.blue',
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    easing: 'easeInOutCubic',
    duration: 5000,
    loop: true
});

const motionPath3 = anime({
    targets: '.box.yellow',
    translateX: path3('x'),
    translateY: path3('y'),
    rotate: path3('angle'),
    easing: 'easeInOutCubic',
    duration: 5000,
    loop: true
});





