
const path = anime.path("#cesta1");
const path2 = anime.path("#cesta2");
const path3 = anime.path("#cesta3");
const path4 = anime.path("#cesta4");

var aktualneAuta = [];
var spravneAuta = [1,1,3,3];



window.onload = function nastavAutaNaPozicie() {
    //Nastavi cierne auto na poziciu
    modreauto.style.marginTop = "480px";
    modreauto.style.marginLeft = "510px";
    modreauto.style.transform = "rotate(-90deg)";


    //Nastavi cervene auto na poziciu
    cerveneauto.style.marginTop = "370px";
    cerveneauto.style.marginLeft = "170px";

    //Nastavi lavu elektricku  na poziciu
    elektrickalava.style.marginTop = "277px";
    elektrickalava.style.marginLeft = "15px";

    //Nastavi pravu elektricku na poziciu
    elektrickaprava.style.marginTop = "180px";
    elektrickaprava.style.marginLeft = "650px";


}


function motionPath1() {
    modreauto.style.marginTop = "-20px";
    modreauto.style.marginLeft = "-72px";

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

    cerveneauto.style.marginTop = "-43px";
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
    aktualneAuta.push(1);
    vyhodnotAuta();
}

const cerveneauto = document.getElementById("cerveneauto");
cerveneauto.addEventListener("click", motionPath2);


function motionPath3() {
    elektrickalava.style.marginTop = "-42px";
    elektrickalava.style.marginLeft = "-160px";

    anime({
        targets: '.elektricka.lava',
        translateX: path3('x'),
        translateY: path3('y'),
        rotate: path3('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(3);
    vyhodnotAuta();
}
const elektrickalava = document.getElementById("elektrickalava");
elektrickalava.addEventListener("click",motionPath3);

function motionPath4() {
    elektrickaprava.style.marginTop = "-45px";
    elektrickaprava.style.marginLeft = "-160px";

    anime({
        targets: '.elektricka.prava',
        translateX: path4('x'),
        translateY: path4('y'),
        rotate: path3('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(3);
    vyhodnotAuta();
}
const elektrickaprava = document.getElementById("elektrickaprava");
elektrickaprava.addEventListener("click",motionPath4);


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
    setTimeout(motionPath2, 0);
    setTimeout(motionPath3, 4000);
    setTimeout(motionPath4, 4000);

    document.getElementById("vypis1").style.visibility = "hidden";
    document.onmousedown=function (e) {
        window.location.reload();}
    document.getElementById("dalsiakrizovatka").style.opacity = "0";

}






