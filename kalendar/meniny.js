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

function loadXMLDoc() {
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
                txt+=json[key].SK;
            }
        }
    }
    document.getElementById("demo").innerHTML = txt;
}

function myFunctionMenoNaDatum() {

}

