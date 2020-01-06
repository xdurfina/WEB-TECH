
const path = anime.path("#cesta1");
const path2 = anime.path("#cesta2");
const path3 = anime.path("#cesta3");
const path4 = anime.path("#cesta4");

var aktualneAuta = [];
var spravneAuta = [1,1,2,2];



window.onload = function nastavAutaNaPozicie() {
    //Nastavi modre auto na poziciu
    modreauto.style.marginTop = "50px";
    modreauto.style.marginLeft = "250px";
    modreauto.style.transform = "rotate(90deg)";

    //Nastavi cervene auto na poziciu
    cerveneauto.style.marginTop = "50px";
    cerveneauto.style.marginLeft = "160px";
    cerveneauto.style.transform = "rotate(90deg)";


    //Nastavi zlte auto na poziciu
    zlteauto.style.marginTop = "385px";
    zlteauto.style.marginLeft = "570px";
    zlteauto.style.transform = "rotate(-90deg)";

    //Nastavi cierne auto na poziciu
    cierneauto.style.marginTop = "385px";
    cierneauto.style.marginLeft = "650px";
    cierneauto.style.transform = "rotate(-90deg)";

    //Nastavi hornu elektricku  na poziciu
    elektrickahorna.style.marginTop = "-25px";
    elektrickahorna.style.marginLeft = "260px";
    elektrickahorna.style.transform = "rotate(-90deg)";

    //Nastavi dolnu elektricku na poziciu
    elektrickadolna.style.marginTop = "480px";
    elektrickadolna.style.marginLeft = "385px";
    elektrickadolna.style.transform = "rotate(-90deg)";


}


function motionPath1() {
    modreauto.style.marginTop = "-45px";
    modreauto.style.marginLeft = "-70px";

    anime({
        targets: '.auto.modre',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(2);
    vyhodnotAuta();
}

const modreauto = document.getElementById("modreauto");
modreauto.addEventListener('click', motionPath1);


function motionPath2() {

    cerveneauto.style.marginTop = "-45px";
    cerveneauto.style.marginLeft = "-80px";
    cerveneauto.style.transform = "rotate(90deg)";

    anime({
        targets: '.auto.cervene',
        translateX: path2('x'),
        translateY: path2('y'),
        rotate: path2('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(2);
    vyhodnotAuta();
}

const cerveneauto = document.getElementById("cerveneauto");
cerveneauto.addEventListener("click", motionPath2);


function motionPath3() {
    cierneauto.style.marginTop = "-74px";
    cierneauto.style.marginLeft = "-87px";

    anime({
        targets: '.auto.cierne',
        translateX: path3('x'),
        translateY: path3('y'),
        rotate: path3('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(1);
    vyhodnotAuta();
}
const cierneauto = document.getElementById("cierneauto");
cierneauto.addEventListener("click",motionPath3);

function motionPath4() {
    zlteauto.style.marginTop = "-70px";
    zlteauto.style.marginLeft = "-97px";

    anime({
        targets: '.auto.zlte',
        translateX: path4('x'),
        translateY: path4('y'),
        rotate: path4('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(1);
    vyhodnotAuta();
}
const zlteauto = document.getElementById("zlteauto");
zlteauto.addEventListener("click",motionPath4);


function vyhodnotAuta() {
    if (aktualneAuta.length == 4){
        if (aktualneAuta[0] == spravneAuta[0] && aktualneAuta[1] == spravneAuta[1] && aktualneAuta[2] == spravneAuta[2] && aktualneAuta[3] == spravneAuta[3]){
            document.getElementById("vypis1").innerHTML = "Gratulujeme, zadal si spravne poradie aut. <br> Klikni na button pre pokracovanie na dalsiu krizovatku";
            aktualneAuta = [];
            document.getElementById("dalsiakrizovatka").style.visibility = "visible";

        }
        else {
            document.getElementById("vypis1").innerHTML = "Nesprávne si vyriešil križovatku. <br> Skús ešte raz, pre pokračovanie klikni myšou";
            aktualneAuta = [];
            document.onmousedown=function (e) {
                window.location.reload();}
        }
    }
}

function zobrazDovod() {
    document.getElementById("dovodtest").style.visibility = "visible";
}


function spustiDemo() {
    document.getElementById("demo").innerHTML = "DEMO🟢";
    setTimeout(motionPath1(),0);
    setTimeout(motionPath2, 2000);
    setTimeout(motionPath3, 4000);
    setTimeout(motionPath4, 4000);

    document.getElementById("vypis1").style.visibility = "hidden";
    document.onmousedown=function (e) {
        window.location.reload();}
    document.getElementById("dalsiakrizovatka").style.opacity = "0";

}






