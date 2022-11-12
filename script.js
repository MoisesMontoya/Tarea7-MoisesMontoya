function loadDocGame() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableGame(this);
    }
    xhttp.open("GET", "ejercicio.xml");
    xhttp.send();
  }
  function TableGame(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("game");
    let table="<tr><th>Jueguinhos</th><th>Fecha</th><th>Rating</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("tittle")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("rate")[0].childNodes[0].nodeValue +
      "</td>";
    }
    document.getElementById("mostrar").innerHTML = table;
  }
  
  function loadDocPhone() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TablePhone(this);
    }
    xhttp.open("GET", "ejercicio2.xml");
    xhttp.send();
  }
  function TablePhone(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("phone");
    let table="<tr><th>Telefono</th><th>Año</th><th>SPECS</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("tittle")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("bspecs")[0].childNodes[0].nodeValue +
      "</td>";
    }
    document.getElementById("mostrar").innerHTML = table;
    xhttp.close();
  }