
const path = anime.path("#cesta1");
const path2 = anime.path("#cesta2");
const path3 = anime.path("#cesta3");
const path4 = anime.path("#cesta4");
const path5 = anime.path("#cesta5");


var aktualneAuta = [];
var spravneAuta = [1,1,1,1,2];



window.onload = function nastavAutaNaPozicie() {
    //Nastavi modre auto na poziciu
    modreauto.style.marginTop = "252px";
    modreauto.style.marginLeft = "110px";
    // modreauto.style.transform = "rotate(21deg)";


    //Nastavi cervene auto na poziciu
    cerveneauto.style.marginTop = "328px";
    cerveneauto.style.marginLeft = "110px";
    // cerveneauto.style.transform="rotate(-90deg)";

    //Nastavi zlte auto na poziciu
    zlteauto.style.marginTop = "470px";
    zlteauto.style.marginLeft = "540px";
    // cerveneauto.style.transform="rotate(-90deg)";

    //Nastavi cierne auto na poziciu
    cierneauto.style.marginTop = "-60px";
    cierneauto.style.marginLeft = "277px";
    cierneauto.style.transform="rotate(90deg)";


    //Nastavi chodca1 na poziciu
    chodec1.style.marginTop = "443px";
    chodec1.style.marginLeft = "292px";
    // cyklista_id.style.transform = "rotate(90deg)";

    //Nastavi chodca2 na poziciu
    chodec2.style.marginTop = "405px";
    chodec2.style.marginLeft = "630px";
    chodec2.style.transform = "rotate(180deg)";


}


function motionPath1() {
    modreauto.style.marginTop = "-45px";
    modreauto.style.marginLeft = "-80px";

    anime({
        targets: '.auto.modre',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(1);
    vyhodnotAuta();
}


const modreauto = document.getElementById("modreauto");
modreauto.addEventListener('click', motionPath1);


function motionPath2() {

    cerveneauto.style.marginTop = "-57px";
    cerveneauto.style.marginLeft = "-80px";


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

function motionPath5() {

    cierneauto.style.marginTop = "-65px";
    cierneauto.style.marginLeft = "-110px";


    anime({
        targets: '.auto.cierne',
        translateX: path5('x'),
        translateY: path5('y'),
        rotate: path5('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(1);
    vyhodnotAuta();
}

const cierneauto = document.getElementById("cierneauto");
cierneauto.addEventListener("click", motionPath5);

function motionPath3() {
    chodec1.style.marginTop = "-30px";
    chodec1.style.marginLeft = "-10px";

    anime({
        targets: '.chodec_jeden',
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
const chodec1 = document.getElementById("chodec1");
chodec1.addEventListener("click",motionPath3);

function motionPath4() {
    chodec2.style.marginTop = "-30px";
    chodec2.style.marginLeft = "-26px";

    anime({
        targets: '.chodec_dva',
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
const chodec2 = document.getElementById("chodec2");
chodec2.addEventListener("click",motionPath4);



function vyhodnotAuta() {
    if (aktualneAuta.length == 5){
        if (aktualneAuta[0] == spravneAuta[0] && aktualneAuta[1] == spravneAuta[1] && aktualneAuta[2] == spravneAuta[2] && aktualneAuta[3] == spravneAuta[3] && aktualneAuta[4] == spravneAuta[4]){
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
  setTimeout(motionPath3, 0);
  setTimeout(motionPath2, 2000);
  setTimeout(motionPath4,0);
  setTimeout(motionPath5,0);


    document.getElementById("vypis1").style.visibility = "hidden";
  document.onmousedown=function (e) {
      window.location.reload();}
  document.getElementById("dalsiakrizovatka").style.opacity = "0";


}






