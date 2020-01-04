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


window.onload = function nastavAutaNaPozicie() {
    //Nastavi modre auto na poziciu
    modreauto.style.marginTop = "125px";
    modreauto.style.marginLeft = "620px";
    modreauto.style.transform = "rotate(180deg)";

    //Nastavi cervene auto na poziciu
    cerveneauto.style.marginTop = "325px";
    cerveneauto.style.marginLeft = "280px";

    //Nastavi zlte auto na poziciu
    zlteauto.style.marginTop = "405px";
    zlteauto.style.marginLeft = "530px";
    zlteauto.style.transform = "rotate(-90deg)";


}


function motionPath1() {
    modreauto.style.marginTop = "-85px";
    modreauto.style.marginLeft = "-40px";

    anime({
        targets: '.box.blue',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    });
    const spravneporadie = [1, 2, 3];
    poradieaut.push(1);
    poradieaut.push(2);
    poradieaut.push(3);
    if (poradieaut.sort() === spravneporadie) {
        console.log("sikokot");
    } else {
        console.log(poradieaut.sort())
    }
}


const modreauto = document.getElementById("modreauto");
modreauto.addEventListener('click', motionPath1);


function motionPath2() {
    cerveneauto.style.marginTop = "0px";
    cerveneauto.style.marginLeft = "-40px";
    anime({
        targets: '.box.red',
        translateX: path2('x'),
        translateY: path2('y'),
        rotate: path2('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    });
}

const cerveneauto = document.getElementById("cerveneauto");
cerveneauto.addEventListener("click", motionPath2);


function motionPath3() {
    zlteauto.style.marginTop = "-40px";
    zlteauto.style.marginLeft = "0px";
    anime({
        targets: '.box.yellow',
        translateX: path3('x'),
        translateY: path3('y'),
        rotate: path3('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    });
}
const zlteauto = document.getElementById("zlteauto");
zlteauto.addEventListener("click",motionPath3);

function holdOn(milisekundy) {
    setTimeout( function() {
        }, milisekundy );
}

function spustiDemo() {

  motionPath1();
  setTimeout(motionPath2, 2000);
  setTimeout(motionPath3, 4000);
}




