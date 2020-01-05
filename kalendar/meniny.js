// function loadXMLDoc() {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             myFunction(this);
//         }
//     };
//     xmlhttp.open("GET", "xml_meniny.xml", true);
//     xmlhttp.send();
// }

//
// function myFunction(xml) {
//     var day, month, year,datum;
//     // $('#id').on('click', function() {
//     var date = $('#date1').val().split("-");
//     day = date[2];
//     month = date[1];
//     year = date[0];
//     datum=month+day;
//      // console.log(datum);
//     // });
//
//     var x, i, xmlDoc, txt;
//     xmlDoc = xml.responseXML;
//     txt = "";
//     // alert("poadsas");
//     x = xmlDoc.getElementsByTagName("den");
//     // alert(x[i].childNodes[0].nodeValue);
//     for (i = 0; i< x.length; i++) {
//         if(x[i].childNodes[0].nodeValue===datum){
//             if(datum > 0229){
//                 // --i;
//                 var pom = xmlDoc.getElementsByTagName("HU");
//                 txt += pom[i-1].childNodes[0].nodeValue;
//             }
//             else {
//                 var pom = xmlDoc.getElementsByTagName("HU");
//                 txt += pom[i].childNodes[0].nodeValue;
//             }
//         }
//     }
//     document.getElementById("demo").innerHTML = txt;
// }

function loadXMLDoc1() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            myFunctionDatumNaMeno(myObj);
        }
    };
    xmlhttp.open("GET", "meniny.json", true);
    xmlhttp.send();
}
function loadXMLDoc2() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            myFunctionMenoNaDatum(myObj);
        }
    };
    xmlhttp.open("GET", "meniny.json", true);
    xmlhttp.send();
}
function loadXMLDoc3() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            myFunctionMeninyAktualnyDen(myObj);
        }
    };
    xmlhttp.open("GET", "meniny.json", true);
    xmlhttp.send();
}

function myFunctionDatumNaMeno(json) {
    var txt,day, month, year,datum;
    var date = $('#date1').val().split("-");
    day = date[2];
    month = date[1];
    year = date[0];
    datum=month+day;
    txt="";
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            if(json[key].den===datum){
                if(json[key].SK){
                    txt+=json[key].SK;
                }
                else{
                    if(json[key].SKsviatky){
                        txt+=json[key].SKsviatky;
                    }
                    // break;
                }
            }
        }
    }
    document.getElementById("demo1").innerHTML = txt;
}
function myFunctionMeninyAktualnyDen(json) {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();
    var txt,datum;
    datum=month+day;
    txt="";
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            if(json[key].den===datum){
                if(json[key].SK){
                    txt+=json[key].SK;
                }
                else{
                    if(json[key].SKsviatky){
                        txt+=json[key].SKsviatky;
                    }
                }
            }
        }
    }
    document.getElementById("demo3").innerHTML = txt;
}


function myFunctionMenoNaDatum(json) {
    var txt,day, month, year,datum;
    txt="";
    var name = $('#name1').val();
    var res;
    res=name.toLocaleLowerCase();
    res=res.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (var key in json) {
        if (json.hasOwnProperty(key)){
            if(json[key].SK){
                var pom;
                // var pomocne="Tomas";
                // var kokot=pomocne.split(',')
                //     alert(kokot[0]);
                //     alert(kokot[1]);
                //     alert(kokot.length);
                // var meniny=pomocne.split(', ');
                pom=json[key].SK;
                var mena=pom.split(', ');
                if(mena[1]!==undefined){
                    alert("asdasdasa");
                    var data_array = pom.split(', ');
                    console.log(data_array);
                    for(var toto in data_array){
                        toto=toto.toLocaleLowerCase();
                        toto=toto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        // alert(toto);
                        if(toto===res){
                            txt+=json[key].den;
                            break;
                        }
                    }
                }
                else
                {   pom=mena[0];
                    pom = pom.toLocaleLowerCase();
                    pom = pom.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (pom === res) {
                        txt += json[key].den;
                        break;
                    }
                }
            }

        }
    }

    document.getElementById("demo2").innerHTML = txt;
}