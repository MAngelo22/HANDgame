<<<<<<< HEAD
var misJuegos = [];

let arrayPiedraPapelTijera = {
  piedra: "piedra",
  tijera: "tijera",
  papel: "papel",
};
misJuegos.push(arrayPiedraPapelTijera);

arrayPiedraPapelTijeraLagartoSpok = {
  piedra: "piedra",
  tijera: "tijera",
  papel: "papel",
  lagarto: "lagarto",
  spok: "spok",
};
misJuegos.push(arrayPiedraPapelTijeraLagartoSpok);

arrayCaraCruz = {
  cara: "cara",
  cruz: "cruz",
};
misJuegos.push(arrayCaraCruz);

arrayMonkeyIsland = {
  mano0: "0",
  mano1: "1",
  mano2: "2",
  mano3: "3",
  mano4: "4",
  mano5: "5",
};
misJuegos.push(arrayMonkeyIsland);

arrayVaqueros = {
  recarga: "recarga",
  escudo: "escudo",
  dispara: "dispara",
};
misJuegos.push(arrayVaqueros);

array21cartas = {
  cartaAsh: "11",
  carta2: "2",
  carta3: "3",
  carta4: "4",
  carta5: "5",
  carta6: "6",
  carta7: "7",
  carta8: "8",
  carta9: "9",
  cartaJ: "10",
  cartaQ: "11",
  cartaK: "12",
};
misJuegos.push(array21cartas);

//Datos que usaremos en todas las funciones
//colores textos
var colorneonrosa = "color: rgb(255, 0, 212); justify-content: center;";
var colorneonazul = "color: rgb(64, 201, 219); justify-content: center;";

var SaltoLinea = document.createElement("br"); // Se declara los saltos de linea

function cargarDOM() {
  //generamos div1 en el body
  document.body.appendChild(div1);

  //creamos los textos y el contenido

  var newH1 = document.createElement("h1");
  var contenteH1 = document.createTextNode(
    "Disfrutaras de los juegos clásicos"
  );
  var newH2 = document.createElement("h2");
  var newH3 = document.createElement("h3");
  var contentH2 = document.createTextNode("Reglas:");
  var contentTextoHome = document.createTextNode(
    "Deberás elegir el botón del juego al que desees jugar."
  );
  newH1.appendChild(contenteH1);
  /*newH1.setAttribute("style", "background-color: rgba(255, 255, 255, 0.5)")*/
  newH1.setAttribute("style", colorneonrosa);
  newH2.setAttribute("style", colorneonazul+ "text-align: center;");
  newH3.setAttribute("style", colorneonrosa+ "text-align: center;");

  newH2.appendChild(contentH2);
  newH3.appendChild(contentTextoHome);
  newH1.setAttribute("align", "center");
  div1.setAttribute("id", "div1");
  console.log("Mis juegos: ", misJuegos);
  document.body.insertBefore(newH1, div1);
  document.body.insertBefore(newH2, div1);
  document.body.insertBefore(newH3, div1);

  //pruebas
  console.log("FOR IN: Array asociativo");
  for (let clave in arrayPiedraPapelTijera) {
    console.log(clave + " : " + arrayPiedraPapelTijera[clave]); //clave - valor
  }
  //ni caso a lo de arriba XD

  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  legend.setAttribute("style", colorneonazul);
  legend.setAttribute("id", "legend1");
  fieldset.setAttribute("id", "fieldset1");
  fieldset.setAttribute("background", "none");

  var contentlegend = document.createTextNode("Elegir juego");
  legend.appendChild(contentlegend);

  fieldset.appendChild(legend); //se crea el parrafo
  div1.appendChild(fieldset); // se crea el fieldset

  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var li2 = document.createElement("li");
  var a1 = document.createElement("a");
  var a2 = document.createElement("a");
  var a3 = document.createElement("a");
  var a4 = document.createElement("a");
  var a5 = document.createElement("a");
  var a6 = document.createElement("a");
  var boton1 = document.createElement("button");
  var boton2 = document.createElement("button");
  var boton3 = document.createElement("button");
  var boton4 = document.createElement("button");
  var boton5 = document.createElement("button");
  var boton6 = document.createElement("button");
  var contenidoPPT = document.createTextNode("Piedra Papel o Tijera");
  var contenidoPPTLS = document.createTextNode(
    "Piedra Papel Tijera Lagarto Spock"
  );
  var contenido21 = document.createTextNode("21");
  var contenidoPistol = document.createTextNode("Pistolero");
  var contenidoCC = document.createTextNode("Cara o Cruz");
  var contenidoMonkey = document.createTextNode("Monkey");

  fieldset.appendChild(ul);
  ul.setAttribute("style", "display:inline-block");
  fieldset.appendChild(li);

  a1.setAttribute("href", "piedra1.html");
  li.appendChild(a1);
  a1.appendChild(boton1);
  boton1.appendChild(contenidoPPT);

  a2.setAttribute("href", "piedra2.html");
  li.appendChild(a2);
  a2.appendChild(boton2);
  boton2.appendChild(contenidoPPTLS);

  a3.setAttribute("href", "21cartas.html");
  li.appendChild(a3);
  a3.appendChild(boton3);
  boton3.appendChild(contenido21);

  fieldset.appendChild(li2);
  a4.setAttribute("href", "caracruz.html");
  li2.appendChild(a4);
  a4.appendChild(boton4);
  boton4.appendChild(contenidoCC);

  a5.setAttribute("href", "Vaqueros.html");
  li2.appendChild(a5);
  a5.appendChild(boton5);
  boton5.appendChild(contenidoPistol);

  a6.setAttribute("href", "Monkey.html");
  li2.appendChild(a6);
  a6.appendChild(boton6);
  boton6.appendChild(contenidoMonkey);

  var ahome = document.createElement("a");
  var botonHome = document.createElement("button");
  var contentbuttonhome = document.createTextNode("Menu principal");
  fieldset.appendChild(SaltoLinea);
  fieldset.appendChild(ahome);
  ahome.setAttribute("href", "home.html");
  ahome.appendChild(botonHome);
  botonHome.appendChild(contentbuttonhome);
}

//---------------------------------------------------------------------------------------------PPT--------------

function piedra1(eleccionJ1) {
  console.log("El jugador 1 a seleccionado " + eleccionJ1);

  //Seleccion de la IA
  const choices = ["piedra", "papel", "tijera"];
  const selecionIA = choices[Math.floor(Math.random() * choices.length)];

  console.log("La IA a seleccionado " + selecionIA);
  //declaracion de mensajes
  var img = document.createElement("img");
  var divPPT = document.createElement("div");
  var h1 = document.createElement("h1");
  document.body.appendChild(divPPT);
  divPPT.setAttribute("id", "result");
  divPPT.setAttribute(
    "style",
    "text-align: center; color:" + colorneonazul + ";" + "font-size:50px;"
  );
  //------------------------------------------------------------------------------
  //Funcionamiento del juego
  let result = "";

  if (eleccionJ1 === selecionIA) {
    result = "¡Es un empate!";
  } else if (
    (eleccionJ1 === "piedra" && selecionIA === "tijera") ||
    (eleccionJ1 === "papel" && selecionIA === "piedra") ||
    (eleccionJ1 === "tijera" && selecionIA === "papel")
  ) {
    result = "¡Ganaste!";
  } else {
    result = "¡Perdiste!";
  }
  var mensaje = (document.getElementById(
    "result"
  ).innerText = `Elegiste: ${eleccionJ1}, la IA eligió: ${selecionIA}. ${result}`);

  var contenidoh1 = document.createTextNode(mensaje);

  h1.appendChild(contenidoh1);
  divPPT.appendChild(SaltoLinea);
  img.setAttribute("id", "imgresult");
  img.setAttribute("src", "media/duelo pptls/titulo1.png");
  divPPT.appendChild(img);
  img.setAttribute("style", "width:300px;height:300px");

  var imgid = document.getElementById("imgresult");
  // -----------------------------------------------------------------------------

  //Empate Piedra
  if (selecionIA === "piedra" && eleccionJ1 === "piedra") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatepiedra.jpeg");

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate PIEDRA");
  }
  //Papel gana Piedra
  else if (selecionIA === "papel" && eleccionJ1 === "piedra") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/papelGanaPiedra.jpeg"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
  }
  //Tijeras pierden Piedra
  else if (selecionIA === "tijera" && eleccionJ1 === "piedra") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaTijera.jpeg"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
  }

  //------------------------------------------------------------

  //Papel gana Piedra
  else if (selecionIA === "piedra" && eleccionJ1 === "papel") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/papelGanaPiedra.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
  }
  //Empate papel
  else if (selecionIA === "papel" && eleccionJ1 === "papel") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatepapel.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Papel");
  }
  //Papel Pierde Tijera
  else if (selecionIA === "tijera" && eleccionJ1 === "papel") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/tijeraGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
  }

  //--------------------------------------------------------------

  //Tijera pierde
  else if (selecionIA === "piedra" && eleccionJ1 === "tijera") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaTijera.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
  }
  //Gana Tijera
  else if (selecionIA === "papel" && eleccionJ1 === "tijera") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/tijeraGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Tijera");
  }
  //empate tijera
  else if (selecionIA === "tijera" && eleccionJ1 === "tijera") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatetijera.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Tijera");
  }
  console.log("fin del if. IA: " + selecionIA + " J1: " + eleccionJ1);
}

//---------------------------------------------------------------------------------------------PPTLS--------------

function piedra2(eleccionJ1) {
  console.log("El jugador 1 a seleccionado " + eleccionJ1);

  //Seleccion de la IA
  const choices = ["piedra", "papel", "tijera", "lagarto", "spock"];
  const selecionIA = choices[Math.floor(Math.random() * choices.length)];

  console.log("La IA a seleccionado " + selecionIA);
  //declaracion de mensajes
  var img = document.createElement("img");
  var divPPT = document.createElement("div");
  var h1 = document.createElement("h1");
  document.body.appendChild(divPPT);
  divPPT.setAttribute("id", "result");
  divPPT.setAttribute(
    "style",
    "text-align: center; color:" + colorneonazul + ";" + "font-size:50px;"
  );
  //------------------------------------------------------------------------------
  //Funcionamiento del juego

  divPPT.appendChild(SaltoLinea);
  img.setAttribute("id", "imgresult");
  h1.setAttribute("id", "idh1");
  img.setAttribute("src", "media/duelo pptls/titulo1.png");
  divPPT.appendChild(img);
  divPPT.appendChild(h1);
  img.setAttribute("style", "width:300px;height:300px");
  h1.setAttribute("style", "color: rgb(64, 201, 219); -webkit-text-stroke-width: 3px; -webkit-text-stroke-color: rgb(255, 0, 212); background-color: rgba(0, 0, 0, 0.5);")

  var imgid = document.getElementById("imgresult");
  var h1id = document.getElementById("idh1");
  // -----------------------------------------------------------------------------

  //Empate Piedra
  if (selecionIA === "piedra" && eleccionJ1 === "piedra") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatepiedra.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    var contenidoh1 = document.createTextNode("Empate Piedra");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
    console.log("empate PIEDRA");
  }
  //Papel gana Piedra
  else if (selecionIA === "papel" && eleccionJ1 === "piedra") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/papelGanaPiedra.jpeg"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
    var contenidoh1 = document.createTextNode(
      "Papel envuelve Piedra, Tu PIERDES"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
    divPPT.appendChild(h1);
  }
  //Tijeras pierden Piedra
  else if (selecionIA === "tijera" && eleccionJ1 === "piedra") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaTijera.jpeg"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
    var contenidoh1 = document.createTextNode("Piedra rompe Tijera, Tu GANAS");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }

  //------------------------------------------------------------

  //Papel gana Piedra
  else if (selecionIA === "piedra" && eleccionJ1 === "papel") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/papelGanaPiedra.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
    var contenidoh1 = document.createTextNode(
      "Papel envuelve Piedra, Tu GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //Empate papel
  else if (selecionIA === "papel" && eleccionJ1 === "papel") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatepapel.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Papel");
    var contenidoh1 = document.createTextNode("Empate de Papel");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //Papel Pierde Tijera
  else if (selecionIA === "tijera" && eleccionJ1 === "papel") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/tijeraGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
    var contenidoh1 = document.createTextNode("Tijera corta Papel, Tu PIERDES");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }

  //--------------------------------------------------------------

  //Tijera pierde
  else if (selecionIA === "piedra" && eleccionJ1 === "tijera") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaTijera.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
    var contenidoh1 = document.createTextNode(
      "Piedra rompe Tijera, Tu PIERDES"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //Gana Tijera
  else if (selecionIA === "papel" && eleccionJ1 === "tijera") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/tijeraGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Tijera gana a papel");
    var contenidoh1 = document.createTextNode("Tijera corta Papel, Tu GANAS");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //empate tijera
  else if (selecionIA === "tijera" && eleccionJ1 === "tijera") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatetijera.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Tijera");
    var contenidoh1 = document.createTextNode("Empate Tijeras");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }

  //Spock rompe tijera
  else if (selecionIA === "spock" && eleccionJ1 === "tijera") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/spokGanaTijera.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Spock rompe Tijera, TU PIERDES");
    var contenidoh1 = document.createTextNode("Spock rompe Tijera, Tu PIERDES");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "tijera" && eleccionJ1 === "spock") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/spokGanaTijera.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Spock rompe Tijera, TU GANAS");
    var contenidoh1 = document.createTextNode("Spock rompe Tijera, Tu GANAS");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "lagarto" && eleccionJ1 === "tijera") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/lagartoPierdeTijera.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Tijera corta Lagarto, TU GANAS");
    var contenidoh1 = document.createTextNode(
      "Tijera corta a Lagarto, Tu GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "tijera" && eleccionJ1 === "lagarto") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/lagartoPierdeTijera.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Tijera corta Lagarto, TU PIERDES");
    var contenidoh1 = document.createTextNode(
      "Tijera corta a Lagarto, Tu PIERDES"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //Lagarto come papel
  else if (selecionIA === "papel" && eleccionJ1 === "lagarto") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/lagartoGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Lagarto se come el papel, TU GANAS");
    var contenidoh1 = document.createTextNode(
      "Lagarto se come Papel, Tu GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //Papel es comido por lagarto
  else if (selecionIA === "lagarto" && eleccionJ1 === "papel") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/lagartoGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Lagarto se come el papel, TU PIERDES");
    var contenidoh1 = document.createTextNode(
      "Lagarto se come Papel, Tu GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "spock" && eleccionJ1 === "papel") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/spokpierdepapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Papel desautoriza a Spock, TU GANAS");
    var contenidoh1 = document.createTextNode(
      "Papel desautoriza a Spock, TU GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "papel" && eleccionJ1 === "spock") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/spokpierdepapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Papel desautoriza a Spock, TU PIERDES");
    var contenidoh1 = document.createTextNode(
      "Papel desautoriza a Spock, TU PIERDES"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "spock" && eleccionJ1 === "piedra") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/spokGanaPiedra.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Papel desautoriza a Spock, TU PIERDES");
    var contenidoh1 = document.createTextNode("Spock desintegra Piedra");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "piedra" && eleccionJ1 === "spock") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/spokGanaPiedra.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Papel desautoriza a Spock, TU GANAS");
    var contenidoh1 = document.createTextNode(
      "Spock Desintegra Piedra, TU GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //lagarto envenena a spock
  else if (selecionIA === "spock" && eleccionJ1 === "lagarto") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/spockPierdeLagarto.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Lagarto envenena a Spock, TU GANAS");
    var contenidoh1 = document.createTextNode(
      "Lagarto envenena a Spock, TU GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "lagarto" && eleccionJ1 === "spock") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/spockPierdeLagarto.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Lagarto envenena a Spock, TU PIERDES");
    var contenidoh1 = document.createTextNode(
      "Lagarto envenena a Spock, TU PIERDES"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  //Piedra aplasta lagarto
  else if (selecionIA === "lagarto" && eleccionJ1 === "piedra") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaLagarto.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Piedra aplasta a Lagarto, TU PIERDES");
    var contenidoh1 = document.createTextNode(
      "Piedra aplasta Lagarto, Tu GANAS"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "piedra" && eleccionJ1 === "lagarto") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaLagarto.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Piedra aplasta a Lagarto, TU PIERDES");
    var contenidoh1 = document.createTextNode(
      "Piedra aplasta Lagarto,Tu PIERDES"
    );
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "spock" && eleccionJ1 === "tijera") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaLagarto.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("Piedra aplasta a Lagarto, TU PIERDES");
    var contenidoh1 = document.createTextNode("Spock rompe Tijera, Tu GANAS");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "spock" && eleccionJ1 === "spock") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empateSpock.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Spock");
    var contenidoh1 = document.createTextNode("Empate SPOCK's");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  } else if (selecionIA === "lagarto" && eleccionJ1 === "lagarto") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empateLagarto.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Lagarto");
    var contenidoh1 = document.createTextNode("Empate Lagartos");
    divPPT.appendChild(h1);
    h1.appendChild(contenidoh1);
    h1.setAttribute("id", "idh1");
  }
  console.log("fin del if. IA: " + selecionIA + " J1: " + eleccionJ1);
}

//---------------------------------------------------------------------------------------------Cara o Cruz--------------

function CaraCruz(eleccionJ1) {
  console.log("El jugador 1 a seleccionado " + eleccionJ1);

  //Seleccion de la IA
  const choices = ["cara", "cruz"];
  const selecionIA = choices[Math.floor(Math.random() * choices.length)];

  console.log("La IA a seleccionado " + selecionIA);
  //declaracion de mensajes
  var img = document.createElement("img");
  var divPPT = document.createElement("div");
  var h1 = document.createElement("h1");
  document.body.appendChild(divPPT);
  divPPT.setAttribute("id", "result");
  divPPT.setAttribute(
    "style",
    "text-align: center; color:" + colorneonazul + ";" + "font-size:50px;"
  );
  //------------------------------------------------------------------------------
  //Funcionamiento del juego

  

  divPPT.appendChild(SaltoLinea);
  img.setAttribute("id", "imgresult");
  h1.setAttribute("id", "idh1");
  img.setAttribute("src", "media/caraocruz/moneda lanzada.gif");
  divPPT.appendChild(img);
  divPPT.appendChild(h1)
  img.setAttribute("style", "width:300px;height:300px");

  var imgid = document.getElementById("imgresult");
  var h1id = document.getElementById("idh1")
  // -----------------------------------------------------------------------------

  //Diferentes 1
  if (selecionIA === "cara" && eleccionJ1 === "cruz") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/caraocruz/cara.png");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    var contenidoh1 = document.createTextNode(`Elegiste: ${eleccionJ1}, la moneda cayo de ${selecionIA}. Has perdido`)
    divPPT.appendChild(h1)
    h1.appendChild(contenidoh1);
    h1.setAttribute('id','idh1')
    console.log("empate PIEDRA");
  }
  //Diferencia2
  else if (selecionIA === "cruz" && eleccionJ1 === "cara") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/caraocruz/cruz.png"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
    var contenidoh1 = document.createTextNode(`Elegiste: ${eleccionJ1}, la moneda cayo de ${selecionIA}. Has perdido`)
    divPPT.appendChild(h1)
    h1.appendChild(contenidoh1);
    h1.setAttribute('id','idh1')
    divPPT.appendChild(h1)
  }
  //Coinciden
  else if (selecionIA === "cara" && eleccionJ1 === "cara") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/caraocruz/cara.png"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
    var contenidoh1 = document.createTextNode(`Elegiste: ${eleccionJ1}, la moneda cayo de ${selecionIA}. Has ganado!!!`)
    divPPT.appendChild(h1)
    h1.appendChild(contenidoh1);
    h1.setAttribute('id','idh1')
  }
  else if (selecionIA === "cruz" && eleccionJ1 === "cruz") {
    h1id.parentNode.removeChild(h1id);
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/caraocruz/cruz.png"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
    var contenidoh1 = document.createTextNode(`Elegiste: ${eleccionJ1}, la moneda cayo de ${selecionIA}. Has Ganado!!!`)
    divPPT.appendChild(h1)
    h1.appendChild(contenidoh1);
    h1.setAttribute('id','idh1')
  }
}
=======
var misJuegos = [];

let arrayPiedraPapelTijera = {
  piedra: "piedra",
  tijera: "tijera",
  papel: "papel",
};
misJuegos.push(arrayPiedraPapelTijera);

arrayPiedraPapelTijeraLagartoSpok = {
  piedra: "piedra",
  tijera: "tijera",
  papel: "papel",
  lagarto: "lagarto",
  spok: "spok",
};
misJuegos.push(arrayPiedraPapelTijeraLagartoSpok);

arrayCaraCruz = {
  cara: "cara",
  cruz: "cruz",
};
misJuegos.push(arrayCaraCruz);

arrayMonkeyIsland = {
  mano0: "0",
  mano1: "1",
  mano2: "2",
  mano3: "3",
  mano4: "4",
  mano5: "5",
};
misJuegos.push(arrayMonkeyIsland);

arrayVaqueros = {
  recarga: "recarga",
  escudo: "escudo",
  dispara: "dispara",
};
misJuegos.push(arrayVaqueros);

array21cartas = {
  cartaAsh: "11",
  carta2: "2",
  carta3: "3",
  carta4: "4",
  carta5: "5",
  carta6: "6",
  carta7: "7",
  carta8: "8",
  carta9: "9",
  cartaJ: "10",
  cartaQ: "11",
  cartaK: "12",
};
misJuegos.push(array21cartas);

//Datos que usaremos en todas las funciones
//colores textos
var colorneonrosa = "rgb(255, 0, 212)";
var colorneonazul = "rgb(64, 201, 219)";

var SaltoLinea = document.createElement("br"); // Se declara los saltos de linea

function cargarDOM() {
  //generamos div1 en el body
  document.body.appendChild(div1);
  document.body.setAttribute("style", "background:url('media/fondo.jpg')");
  div1.setAttribute("style", "background:url('media/fondo.jpg')");

  //creamos los textos y el contenido

  var newH1 = document.createElement("h1");
  var contenteH1 = document.createTextNode(
    "Disfrutaras de los juegos clásicos"
  );
  var newH2 = document.createElement("h2");
  var newH3 = document.createElement("h3");
  var contentH2 = document.createTextNode("Reglas:");
  var contentTextoHome = document.createTextNode(
    "Deberás elegir el botón del juego al que desees jugar."
  );
  newH1.appendChild(contenteH1);
  /*newH1.setAttribute("style", "background-color: rgba(255, 255, 255, 0.5)")*/
  newH1.setAttribute("style", "color:" + colorneonrosa);
  newH2.setAttribute("style", "color:" + colorneonazul);
  newH3.setAttribute("style", "color:" + colorneonrosa);

  newH2.appendChild(contentH2);
  newH3.appendChild(contentTextoHome);
  newH1.setAttribute("align", "center");
  div1.setAttribute("id", "div1");
  console.log("Mis juegos: ", misJuegos);
  document.body.insertBefore(newH1, div1);
  document.body.insertBefore(newH2, div1);
  document.body.insertBefore(newH3, div1);

  //pruebas
  console.log("FOR IN: Array asociativo");
  for (let clave in arrayPiedraPapelTijera) {
    console.log(clave + " : " + arrayPiedraPapelTijera[clave]); //clave - valor
  }
  //ni caso a lo de arriba XD

  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  legend.setAttribute("style", "color:" + colorneonazul);
  legend.setAttribute("id", "legend1");
  fieldset.setAttribute("id", "fieldset1");
  fieldset.setAttribute("background", "none");

  var contentlegend = document.createTextNode("Elegir juego");
  legend.appendChild(contentlegend);

  fieldset.appendChild(legend); //se crea el parrafo
  div1.appendChild(fieldset); // se crea el fieldset

  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var li2 = document.createElement("li");
  var a1 = document.createElement("a");
  var a2 = document.createElement("a");
  var a3 = document.createElement("a");
  var a4 = document.createElement("a");
  var a5 = document.createElement("a");
  var a6 = document.createElement("a");
  var boton1 = document.createElement("button");
  var boton2 = document.createElement("button");
  var boton3 = document.createElement("button");
  var boton4 = document.createElement("button");
  var boton5 = document.createElement("button");
  var boton6 = document.createElement("button");
  var contenidoPPT = document.createTextNode("Piedra Papel o Tijera");
  var contenidoPPTLS = document.createTextNode(
    "Piedra Papel Tijera Lagarto Spock"
  );
  var contenido21 = document.createTextNode("21");
  var contenidoPistol = document.createTextNode("Pistolero");
  var contenidoCC = document.createTextNode("Cara o Cruz");
  var contenidoMonkey = document.createTextNode("Monkey");

  fieldset.appendChild(ul);
  ul.setAttribute("style", "display:inline-block");
  fieldset.appendChild(li);

  a1.setAttribute("href", "piedra1.html");
  li.appendChild(a1);
  a1.appendChild(boton1);
  boton1.appendChild(contenidoPPT);

  a2.setAttribute("href", "piedra2.html");
  li.appendChild(a2);
  a2.appendChild(boton2);
  boton2.appendChild(contenidoPPTLS);

  a3.setAttribute("href", "21cartas.html");
  li.appendChild(a3);
  a3.appendChild(boton3);
  boton3.appendChild(contenido21);

  fieldset.appendChild(li2);
  a4.setAttribute("href", "caracruz.html");
  li2.appendChild(a4);
  a4.appendChild(boton4);
  boton4.appendChild(contenidoCC);

  a5.setAttribute("href", "Vaqueros.html");
  li2.appendChild(a5);
  a5.appendChild(boton5);
  boton5.appendChild(contenidoPistol);

  a6.setAttribute("href", "Monkey.html");
  li2.appendChild(a6);
  a6.appendChild(boton6);
  boton6.appendChild(contenidoMonkey);

  var ahome = document.createElement("a");
  var botonHome = document.createElement("button");
  var contentbuttonhome = document.createTextNode("Menu principal");
  fieldset.appendChild(SaltoLinea);
  fieldset.appendChild(ahome);
  ahome.setAttribute("href", "home.html");
  ahome.appendChild(botonHome);
  botonHome.appendChild(contentbuttonhome);
}

function piedra1(eleccionJ1) {
  console.log("El jugador 1 a seleccionado " + eleccionJ1);

  //Seleccion de la IA
  const choices = ["piedra", "papel", "tijera"];
  const selecionIA = choices[Math.floor(Math.random() * choices.length)];

  console.log("La IA a seleccionado " + selecionIA);
  //declaracion de mensajes
  var img = document.createElement("img");
  var divPPT = document.createElement("div");
  var h1 = document.createElement("h1");
  document.body.appendChild(divPPT);
  divPPT.setAttribute("id", "result");
  divPPT.setAttribute(
    "style",
    "text-align: center; color:" + colorneonazul + ";" + "font-size:50px;"
  );
  //------------------------------------------------------------------------------
  //Funcionamiento del juego
  let result = "";

  if (eleccionJ1 === selecionIA) {
    result = "¡Es un empate!";
  } else if (
    (eleccionJ1 === "piedra" && selecionIA === "tijera") ||
    (eleccionJ1 === "papel" && selecionIA === "piedra") ||
    (eleccionJ1 === "tijera" && selecionIA === "papel")
  ) {
    result = "¡Ganaste!";
  } else {
    result = "¡Perdiste!";
  }
  var mensaje = (document.getElementById(
    "result"
  ).innerText = `Elegiste: ${eleccionJ1}, la IA eligió: ${selecionIA}. ${result}`);

  var contenidoh1 = document.createTextNode(mensaje);

  h1.appendChild(contenidoh1);
  divPPT.appendChild(SaltoLinea);
  img.setAttribute("id", "imgresult");
  img.setAttribute("src", "media/duelo pptls/titulo1.png");
  divPPT.appendChild(img);
  img.setAttribute("style", "width:300px;height:300px");

  var imgid = document.getElementById("imgresult");
  // -----------------------------------------------------------------------------

  //Empate Piedra
  if (selecionIA === "piedra" && eleccionJ1 === "piedra") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatepiedra.jpeg");

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate PIEDRA");
  }
  //Papel gana Piedra
  else if (selecionIA === "papel" && eleccionJ1 === "piedra") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/papelGanaPiedra.jpeg"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
  }
  //Tijeras pierden Piedra
  else if (selecionIA === "tijera" && eleccionJ1 === "piedra") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaTijera.jpeg"
    );

    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
  }
  
  //------------------------------------------------------------

  //Papel gana Piedra
  else if (selecionIA === "piedra" && eleccionJ1 === "papel") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/papelGanaPiedra.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", ha perdido");
  }
  //Empate papel
  else if (selecionIA === "papel" && eleccionJ1 === "papel") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatepapel.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Papel");
  }
  //Papel Pierde Tijera
  else if (selecionIA === "tijera" && eleccionJ1 === "papel") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/tijeraGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
  }

  //--------------------------------------------------------------

  //Tijera pierde
  else if (selecionIA === "piedra" && eleccionJ1 === "tijera") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/piedraGanaTijera.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("La IA a seleccionado " + selecionIA + ", te ha ganado");
  }
  //Gana Tijera
  else if (selecionIA === "papel" && eleccionJ1 === "tijera") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute(
      "src",
      "media/duelo pptls/resultados/tijeraGanaPapel.jpeg"
    );
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Tijera");
  }
  //empate tijera
  else if (selecionIA === "tijera" && eleccionJ1 === "tijera") {
    imgid.parentNode.removeChild(imgid);
    img.setAttribute("src", "media/duelo pptls/resultados/empatetijera.jpeg");
    img.setAttribute("style", "width:300px;height:300px");
    divPPT.appendChild(img);
    console.log("empate Tijera");
  }
  console.log("fin del if. IA: " + selecionIA + " J1: " + eleccionJ1);
}
>>>>>>> 6db2304730f897c68cb7c9120531e4fa88d06efc
