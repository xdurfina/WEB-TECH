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
