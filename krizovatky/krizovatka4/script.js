
const path = anime.path("#cesta1");
const path2 = anime.path("#cesta2");
const path3 = anime.path("#cesta3");
const path4 = anime.path("#cesta4");

var aktualneAuta = [];
var spravneAuta = [1,2,3,4];



window.onload = function nastavAutaNaPozicie() {
    //Nastavi modre auto na poziciu
    modreauto.style.marginTop = "277px";
    modreauto.style.marginLeft = "205px";



    //Nastavi cervene auto na poziciu
    cerveneauto.style.marginTop = "395px";
    cerveneauto.style.marginLeft = "453px";
    cerveneauto.style.transform = "rotate(-90deg)";


    //Nastavi zlte auto na poziciu
    zlteauto.style.marginTop = "155px";
    zlteauto.style.marginLeft = "560px";
    zlteauto.style.transform = "rotate(180deg)";

    //Nastavi cierne auto na poziciu
    cierneauto.style.marginLeft = "335px";
    cierneauto.style.marginTop = "50px";
    cierneauto.style.transform = "rotate(90deg)";


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

    cerveneauto.style.marginTop = "-40px";
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


function motionPath3() {
    zlteauto.style.marginTop = "-40px";
    zlteauto.style.marginLeft = "-60px";

    anime({
        targets: '.auto.zlte',
        translateX: path3('x'),
        translateY: path3('y'),
        rotate: path3('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(4);
    vyhodnotAuta();
}
const zlteauto = document.getElementById("zlteauto");
zlteauto.addEventListener("click",motionPath3);

function motionPath4() {
    cierneauto.style.marginTop = "-60px";
    cierneauto.style.marginLeft = "-80px";


    anime({
        targets: '.auto.cierne',
        translateX: path4('x'),
        translateY: path4('y'),
        rotate: path4('angle'),
        easing: 'easeInOutCubic',
        duration: 5000,
        loop: false
    })
    aktualneAuta.push(3);
    vyhodnotAuta();
}


const cierneauto = document.getElementById("cierneauto");
cierneauto.addEventListener('click', motionPath4);



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
  setTimeout(motionPath2(),0);
  setTimeout(motionPath1, 2000);
  setTimeout(motionPath4, 4000);
  setTimeout(motionPath3, 6000);
  document.getElementById("vypis1").style.visibility = "hidden";
  document.onmousedown=function (e) {
      window.location.reload();}
  document.getElementById("dalsiakrizovatka").style.opacity = "0";


}






