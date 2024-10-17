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
  