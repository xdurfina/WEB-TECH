

// function loadXMLDoc() {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             myFunction(this);
//         }
//     };
//     xmlhttp.open("GET", "meniny.xml", true);
//     xmlhttp.send();
// }
//
// function myFunction(xml) {
//     var x, i, xmlDoc, txt;
//     xmlDoc = xml.responseXML;
//     txt = "";
//     x = xmlDoc.getElementsByTagName("HU");
//     for (i = 0; i< x.length; i++) {
//         txt += x[i].childNodes[0].nodeValue + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }