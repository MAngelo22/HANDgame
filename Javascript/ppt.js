//Datos que usaremos en todas las funciones
//colores textos
var colorneonrosa = "rgb(255, 0, 212)";
var colorneonazul = "rgb(64, 201, 219)";

var SaltoLinea = document.createElement("br"); // Se declara los saltos de linea


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