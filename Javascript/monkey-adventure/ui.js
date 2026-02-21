(function () {
  var data = window.MonkeyData;
  var DIALOGS = data.DIALOGS;
  var GESTURES = data.GESTURES;
  var SCENES = data.SCENES;
  var VERBS = data.VERBS;

  var el = {
    viewport: document.getElementById("scene-viewport"),
    inventory: document.getElementById("inventory"),
    description: document.getElementById("description"),
    verbs: document.getElementById("verbs"),
    dialogPanel: document.getElementById("dialog-panel"),
    dialogText: document.getElementById("dialog-text"),
    dialogOptions: document.getElementById("dialog-options"),
    clueTrack: document.getElementById("clue-track"),
    puzzleModal: document.getElementById("puzzle-modal"),
    puzzleSequence: document.getElementById("puzzle-sequence"),
    gestureButtons: document.getElementById("gesture-buttons"),
    puzzleFeedback: document.getElementById("puzzle-feedback")
  };

  function bindVerbSelection(onVerb) {
    el.verbs.querySelectorAll(".verb").forEach(function (button) {
      button.addEventListener("click", function () {
        onVerb(button.dataset.verb);
      });
    });
  }

  function updateVerbUI(selectedVerb) {
    el.verbs.querySelectorAll(".verb").forEach(function (button) {
      button.classList.toggle("active", button.dataset.verb === selectedVerb);
    });
  }

  function setDescription(text) { el.description.textContent = text; }

  function renderInventory(inventory) {
    el.inventory.innerHTML = "";
    if (!inventory.length) {
      var slot = document.createElement("div");
      slot.className = "inventory-item";
      slot.textContent = "(vacio)";
      el.inventory.append(slot);
      return;
    }
    inventory.forEach(function (item) {
      var slot = document.createElement("div");
      slot.className = "inventory-item";
      slot.textContent = item;
      el.inventory.append(slot);
    });
  }

  function renderClues(clues) {
    if (!clues.length) {
      el.clueTrack.textContent = "Aun no sabes la secuencia del club.";
      return;
    }
    var ordered = ["garra", "palma", "gancho", "pulgar"].map(function (id) {
      return clues.indexOf(id) !== -1 ? id : "?";
    });
    el.clueTrack.textContent = "Secuencia conocida: " + ordered.join(" -> ");
  }

  function renderScene(sceneId, state, handlers) {
    var scene = SCENES[sceneId];
    el.viewport.className = "scene-viewport";
    el.viewport.classList.add(scene.className);
    el.viewport.innerHTML = "";

    var back = document.createElement("div");
    back.className = "parallax-back";
    var front = document.createElement("div");
    front.className = "parallax-front";
    el.viewport.append(back, front);

    scene.npcs.forEach(function (npc) {
      var npcEl = document.createElement("div");
      npcEl.className = "character";
      npcEl.dataset.npcId = npc.id;
      npcEl.style.left = npc.x + "%";
      npcEl.style.top = npc.y + "%";

      var label = document.createElement("div");
      label.className = "hotspot-label";
      label.textContent = npc.name;
      npcEl.append(label);

      npcEl.addEventListener("click", function () { handlers.onNpcClick(npc); });
      el.viewport.append(npcEl);
    });

    scene.hotspots.forEach(function (spot) {
      if (spot.type === "item" && state.inventory.indexOf(spot.itemName) !== -1) return;
      if (spot.id === "club-door" && state.flags.clubOpen) return;

      var spotEl = document.createElement("button");
      spotEl.type = "button";
      spotEl.className = "hotspot";
      spotEl.dataset.hotspotId = spot.id;
      spotEl.style.left = spot.x + "%";
      spotEl.style.top = spot.y + "%";
      spotEl.style.width = spot.w + "%";
      spotEl.style.height = spot.h + "%";

      var label = document.createElement("span");
      label.className = "hotspot-label";
      label.textContent = spot.name;
      spotEl.append(label);

      spotEl.addEventListener("click", function () { handlers.onHotspotClick(spot); });
      el.viewport.append(spotEl);
    });

    if (state.flags.clubOpen && sceneId === "cliff") {
      var openDoor = document.createElement("div");
      openDoor.className = "hotspot door-open";
      openDoor.style.left = "60%";
      openDoor.style.top = "35%";
      openDoor.style.width = "22%";
      openDoor.style.height = "48%";
      var dlabel = document.createElement("span");
      dlabel.className = "hotspot-label";
      dlabel.textContent = "Puerta abierta";
      openDoor.append(dlabel);
      el.viewport.append(openDoor);
    }

    var player = document.createElement("div");
    player.className = "player";
    player.id = "player";
    player.style.left = state.playerPos.x + "%";
    player.style.top = state.playerPos.y + "%";
    el.viewport.append(player);

    setDescription(scene.description);
  }

  function animatePlayerTo(targetPos, onArrive) {
    var player = document.getElementById("player");
    if (!player) {
      onArrive();
      return;
    }
    player.classList.add("walking");
    player.style.left = targetPos.x + "%";
    player.style.top = targetPos.y + "%";
    window.setTimeout(function () {
      player.classList.remove("walking");
      onArrive();
    }, 730);
  }

  function setNpcTalking(npcId, talking) {
    var npc = el.viewport.querySelector('[data-npc-id="' + npcId + '"]');
    if (!npc) return;
    npc.classList.toggle("talking", talking);
  }

  function showDialog(dialogId, nodeId, handlers) {
    var dialog = DIALOGS[dialogId];
    var node = dialog[nodeId];
    if (!node) return null;

    el.dialogPanel.classList.remove("hidden");
    el.dialogText.textContent = node.text;
    el.dialogOptions.innerHTML = "";

    node.options.forEach(function (option) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = option.label;
      button.addEventListener("click", function () { handlers.onDialogOption(option, node); });
      el.dialogOptions.append(button);
    });
    return node;
  }

  function hideDialog() {
    el.dialogPanel.classList.add("hidden");
    el.dialogOptions.innerHTML = "";
  }

  function setupPuzzleUI(handlers) {
    el.gestureButtons.innerHTML = "";
    GESTURES.forEach(function (gesture) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = gesture.label;
      button.addEventListener("click", function () { handlers.onGesturePick(gesture.id); });
      el.gestureButtons.append(button);
    });

    document.getElementById("puzzle-submit").addEventListener("click", handlers.onPuzzleSubmit);
    document.getElementById("puzzle-clear").addEventListener("click", handlers.onPuzzleClear);
    document.getElementById("puzzle-close").addEventListener("click", handlers.onPuzzleClose);
  }

  function openPuzzle(picks) {
    el.puzzleModal.classList.remove("hidden");
    renderPuzzleSequence(picks);
    el.puzzleFeedback.textContent = "";
  }

  function closePuzzle() { el.puzzleModal.classList.add("hidden"); }

  function renderPuzzleSequence(picks) {
    el.puzzleSequence.innerHTML = "";
    for (var i = 0; i < 4; i += 1) {
      var slot = document.createElement("div");
      slot.className = "slot";
      var id = picks[i];
      if (!id) slot.textContent = "?";
      else {
        var gesture = GESTURES.find(function (g) { return g.id === id; });
        slot.textContent = gesture ? gesture.label : "?";
      }
      el.puzzleSequence.append(slot);
    }
  }

  function setPuzzleFeedback(text, type) {
    if (!type) type = "neutral";
    el.puzzleFeedback.textContent = text;
    el.puzzleFeedback.style.color = type === "error" ? "#ff9b9b" : type === "success" ? "#b8ffb3" : "#ffe7a6";
  }

  function getButtons() {
    return {
      save: document.getElementById("save-btn"),
      load: document.getElementById("load-btn"),
      reset: document.getElementById("reset-btn")
    };
  }

  function flashComicFail() {
    var player = document.getElementById("player");
    if (!player) return;
    player.classList.add("comic-fail");
    window.setTimeout(function () { player.classList.remove("comic-fail"); }, 820);
  }

  function sceneName(sceneId) {
    return SCENES[sceneId] ? SCENES[sceneId].name : "Escena desconocida";
  }

  function listVerbs() { return VERBS; }

  window.MonkeyUI = {
    bindVerbSelection: bindVerbSelection,
    updateVerbUI: updateVerbUI,
    setDescription: setDescription,
    renderInventory: renderInventory,
    renderClues: renderClues,
    renderScene: renderScene,
    animatePlayerTo: animatePlayerTo,
    setNpcTalking: setNpcTalking,
    showDialog: showDialog,
    hideDialog: hideDialog,
    setupPuzzleUI: setupPuzzleUI,
    openPuzzle: openPuzzle,
    closePuzzle: closePuzzle,
    renderPuzzleSequence: renderPuzzleSequence,
    setPuzzleFeedback: setPuzzleFeedback,
    getButtons: getButtons,
    flashComicFail: flashComicFail,
    sceneName: sceneName,
    listVerbs: listVerbs
  };
})();
