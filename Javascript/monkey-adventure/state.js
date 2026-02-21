(function () {
  var SAVE_KEY = window.MonkeyData.SAVE_KEY;

  function defaultState() {
    return {
      currentSceneId: "dock",
      selectedVerb: "look",
      inventory: [],
      flags: {
        captainClue: false,
        bardClue: false,
        mirrorClue: false,
        guardClue: false,
        clubOpen: false
      },
      clues: [],
      playerPos: { x: 28, y: 74 }
    };
  }

  var state = defaultState();

  window.MonkeyState = {
    getState: function () { return state; },
    resetState: function () { state = defaultState(); },
    setScene: function (sceneId, defaultPos) {
      state.currentSceneId = sceneId;
      if (defaultPos) state.playerPos = { x: defaultPos.x, y: defaultPos.y };
    },
    setVerb: function (verbId) { state.selectedVerb = verbId; },
    setPlayerPos: function (pos) { state.playerPos = { x: pos.x, y: pos.y }; },
    addItem: function (itemName) {
      if (state.inventory.indexOf(itemName) === -1) {
        state.inventory.push(itemName);
        return true;
      }
      return false;
    },
    addClue: function (clue) {
      if (state.clues.indexOf(clue) === -1) {
        state.clues.push(clue);
        return true;
      }
      return false;
    },
    setFlag: function (flagName, value) { state.flags[flagName] = value; },
    getFlag: function (flagName) { return Boolean(state.flags[flagName]); },
    saveGame: function () { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); },
    loadGame: function () {
      var raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return false;
      try {
        var parsed = JSON.parse(raw);
        state = Object.assign(defaultState(), parsed);
        state.inventory = Array.isArray(parsed.inventory) ? parsed.inventory : [];
        state.clues = Array.isArray(parsed.clues) ? parsed.clues : [];
        return true;
      } catch (e) {
        return false;
      }
    },
    clearSave: function () { localStorage.removeItem(SAVE_KEY); }
  };
})();
