
function piedra2(eleccionJ1){

    console.log("El jugador 1 a seleccionado " + eleccionJ1);
  
    //Seleccion de la IA
    const choices = ["piedra", "papel", "tijera","lagarto","spock"];
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
    divPPT.appendChild(h1)
    img.setAttribute("style", "width:300px;height:300px");
  
    var imgid = document.getElementById("imgresult");
    var h1id = document.getElementById("idh1")
    // -----------------------------------------------------------------------------
  
    //Empate Piedra
    if (selecionIA === "piedra" && eleccionJ1 === "piedra") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/empatepiedra.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      var contenidoh1 = document.createTextNode("Empate Piedra")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
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
      var contenidoh1 = document.createTextNode("Papel envuelve Piedra, Tu PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
      divPPT.appendChild(h1)
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
      var contenidoh1 = document.createTextNode("Piedra rompe Tijera, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
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
      var contenidoh1 = document.createTextNode("Papel envuelve Piedra, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
      
    }
    //Empate papel
    else if (selecionIA === "papel" && eleccionJ1 === "papel") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/empatepapel.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("empate Papel");
      var contenidoh1 = document.createTextNode("Empate de Papel")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
      
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
      var contenidoh1 = document.createTextNode("Tijera corta Papel, Tu PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
      
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
      var contenidoh1 = document.createTextNode("Piedra rompe Tijera, Tu PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
      
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
      var contenidoh1 = document.createTextNode("Tijera corta Papel, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    //empate tijera
    else if (selecionIA === "tijera" && eleccionJ1 === "tijera") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/empatetijera.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("empate Tijera");
      var contenidoh1 = document.createTextNode("Empate Tijeras")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
  
    //Spock rompe tijera
    else if (selecionIA === "spock" && eleccionJ1 === "tijera") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spokGanaTijera.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Spock rompe Tijera, TU PIERDES");
      var contenidoh1 = document.createTextNode("Spock rompe Tijera, Tu PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "tijera" && eleccionJ1 === "spock") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spokGanaTijera.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Spock rompe Tijera, TU GANAS"); 
      var contenidoh1 = document.createTextNode("Spock rompe Tijera, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "lagarto" && eleccionJ1 === "tijera") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/lagartoPierdeTijera.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Tijera corta Lagarto, TU GANAS"); 
      var contenidoh1 = document.createTextNode("Tijera corta a Lagarto, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "tijera" && eleccionJ1 === "lagarto") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/lagartoPierdeTijera.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Tijera corta Lagarto, TU PIERDES");  
      var contenidoh1 = document.createTextNode("Tijera corta a Lagarto, Tu PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    //Lagarto come papel
    else if (selecionIA === "papel" && eleccionJ1 === "lagarto") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/lagartoGanaPapel.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Lagarto se come el papel, TU GANAS");
      var contenidoh1 = document.createTextNode("Lagarto se come Papel, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    //Papel es comido por lagarto
    else if (selecionIA === "lagarto" && eleccionJ1 === "papel") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/lagartoGanaPapel.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Lagarto se come el papel, TU PIERDES");
      var contenidoh1 = document.createTextNode("Lagarto se come Papel, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "spock" && eleccionJ1 === "papel") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spokpierdepapel.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Papel desautoriza a Spock, TU GANAS");
      var contenidoh1 = document.createTextNode("Papel desautoriza a Spock, TU GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "papel" && eleccionJ1 === "spock") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spokpierdepapel.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Papel desautoriza a Spock, TU PIERDES");
      var contenidoh1 = document.createTextNode("Papel desautoriza a Spock, TU PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "spock" && eleccionJ1 === "piedra") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spokGanaPiedra.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Papel desautoriza a Spock, TU PIERDES");
      var contenidoh1 = document.createTextNode("Spock desintegra Piedra")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "piedra" && eleccionJ1 === "spock") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spokGanaPiedra.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Papel desautoriza a Spock, TU GANAS");
      var contenidoh1 = document.createTextNode("Spock Desintegra Piedra, TU GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    //lagarto envenena a spock
    else if (selecionIA === "spock" && eleccionJ1 === "lagarto") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spockPierdeLagarto.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Lagarto envenena a Spock, TU GANAS");
      var contenidoh1 = document.createTextNode("Lagarto envenena a Spock, TU GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "lagarto" && eleccionJ1 === "spock") {
          h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/spockPierdeLagarto.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Lagarto envenena a Spock, TU PIERDES");
      var contenidoh1 = document.createTextNode("Lagarto envenena a Spock, TU PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
      }
    //Piedra aplasta lagarto
    else if (selecionIA === "lagarto" && eleccionJ1 === "piedra") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/piedraGanaLagarto.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Piedra aplasta a Lagarto, TU PIERDES");
      var contenidoh1 = document.createTextNode("Piedra aplasta Lagarto, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "piedra" && eleccionJ1 === "lagarto") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/piedraGanaLagarto.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Piedra aplasta a Lagarto, TU PIERDES");
      var contenidoh1 = document.createTextNode("Piedra aplasta Lagarto,Tu PIERDES")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "spock" && eleccionJ1 === "tijera") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/piedraGanaLagarto.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("Piedra aplasta a Lagarto, TU PIERDES");
      var contenidoh1 = document.createTextNode("Spock rompe Tijera, Tu GANAS")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "spock" && eleccionJ1 === "spock") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/empateSpock.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("empate Spock");
      var contenidoh1 = document.createTextNode("Empate SPOCK's")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    else if (selecionIA === "lagarto" && eleccionJ1 === "lagarto") {
      h1id.parentNode.removeChild(h1id);
      imgid.parentNode.removeChild(imgid);
      img.setAttribute("src", "media/duelo pptls/resultados/empateLagarto.jpeg");
      img.setAttribute("style", "width:300px;height:300px");
      divPPT.appendChild(img);
      console.log("empate Lagarto");
      var contenidoh1 = document.createTextNode("Empate Lagartos")
      divPPT.appendChild(h1)
      h1.appendChild(contenidoh1);
      h1.setAttribute('id','idh1')
    }
    console.log("fin del if. IA: " + selecionIA + " J1: " + eleccionJ1);
  }
  