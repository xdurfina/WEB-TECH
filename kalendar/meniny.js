function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "xml_meniny.xml", true);
    xmlhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Den</th><th>index</th></tr>";
    var x = xmlDoc.getElementsByTagName("zaznam");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("den")[0].childNodes[0].nodeValue +
            "</td><td>" +i+
        "</td></tr>" ;
    }
    document.getElementById("demo").innerHTML = table;
}

// function myFunction(xml) {
//     var day, month, year,datum;
//     // $('#id').on('change', function() {
//     var date = $('#date1').val().split("-");
//     day = date[2];
//     month = date[1];
//     year = date[0];
//     datum=month+day;
//     alert(datum);
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
//             var pom = xmlDoc.getElementsByTagName("HU");
//             txt += pom[i].childNodes[0].nodeValue + "<br>";
//         }
//     }
//     document.getElementById("demo").innerHTML = txt;
// }