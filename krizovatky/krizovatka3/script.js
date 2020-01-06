
const path = anime.path("#cesta1");
const path2 = anime.path("#cesta2");


var aktualneAuta = [];
var spravneAuta = [1,2];



window.onload = function nastavAutaNaPozicie() {
    //Nastavi modre auto na poziciu
    modreauto.style.marginTop = "190px";
    modreauto.style.marginLeft = "430px";
    modreauto.style.transform = "rotate(175deg)";



    //Nastavi cervene auto na poziciu
    cerveneauto.style.marginTop = "80px";
    cerveneauto.style.marginLeft = "420px";
    cerveneauto.style.transform = "rotate(180deg)";





}


function motionPath1() {
    modreauto.style.marginTop = "-55px";
    modreauto.style.marginLeft = "-90px";


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

    cerveneauto.style.marginTop = "-50px";
    cerveneauto.style.marginLeft = "-95px";
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



function vyhodnotAuta() {
    if (aktualneAuta.length == 2){
        if (aktualneAuta[0] == spravneAuta[0] && aktualneAuta[1] == spravneAuta[1]){
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
  setTimeout(motionPath2(),0);
  setTimeout(motionPath1, 2000);
  document.getElementById("vypis1").style.visibility = "hidden";
  document.onmousedown=function (e) {
      window.location.reload();}
  document.getElementById("dalsiakrizovatka").style.opacity = "0";


}






