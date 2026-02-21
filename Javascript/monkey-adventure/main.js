(function () {
  var ui = {
    round: document.getElementById("round"),
    score: document.getElementById("score"),
    streak: document.getElementById("streak"),
    phase: document.getElementById("phase-text"),
    handOne: document.getElementById("hand-one"),
    handTwo: document.getElementById("hand-two"),
    questionBox: document.getElementById("question-box"),
    answers: document.getElementById("answers"),
    feedback: document.getElementById("feedback"),
    nextRound: document.getElementById("next-round"),
    restart: document.getElementById("restart"),
    history: document.getElementById("history"),
    token: document.getElementById("token"),
    boardStatus: document.getElementById("board-status")
  };

  var state = {
    round: 1,
    score: 0,
    streak: 0,
    progress: 0,
    firstValue: 1,
    secondValue: 1,
    firstPattern: [],
    secondPattern: [],
    waitingAnswer: false,
    gameOver: false,
    history: []
  };

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function samplePattern(count) {
    var all = [1, 2, 3, 4, 5];
    var chosen = [];
    while (chosen.length < count) {
      var idx = randomInt(0, all.length - 1);
      chosen.push(all[idx]);
      all.splice(idx, 1);
    }
    return chosen;
  }

  function renderHand(container, pattern) {
    container.innerHTML = "";

    var hand = document.createElement("div");
    hand.className = "hand";

    var palm = document.createElement("div");
    palm.className = "palm";
    hand.appendChild(palm);

    for (var i = 1; i <= 5; i += 1) {
      var finger = document.createElement("div");
      finger.className = "finger f" + i + " " + (pattern.indexOf(i) !== -1 ? "up" : "down");
      hand.appendChild(finger);
    }

    container.appendChild(hand);
  }

  function setStats() {
    ui.round.textContent = String(state.round);
    ui.score.textContent = String(state.score);
    ui.streak.textContent = String(state.streak);
  }

  function setFeedback(text, ok) {
    ui.feedback.textContent = text;
    ui.feedback.className = "feedback " + (ok ? "ok" : "ko");
  }

  function setAnswersEnabled(enabled) {
    var buttons = ui.answers.querySelectorAll("button");
    buttons.forEach(function (btn) { btn.disabled = !enabled; });
  }

  function renderProgress() {
    var minPos = -2;
    var maxPos = 5;
    var ratio = (state.progress - minPos) / (maxPos - minPos);
    var leftPercent = 8 + ratio * 82;
    ui.token.style.left = leftPercent + "%";

    if (state.progress <= -2) {
      ui.boardStatus.textContent = "Has caido al agua con tiburones.";
    } else if (state.progress >= 5) {
      ui.boardStatus.textContent = "Has alcanzado el tesoro del club.";
    } else {
      ui.boardStatus.textContent = "Posicion actual: " + state.progress;
    }
  }

  function buildAnswers() {
    ui.answers.innerHTML = "";
    for (var value = 1; value <= 5; value += 1) {
      (function (current) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "answer-btn";
        btn.textContent = String(current);
        btn.addEventListener("click", function () {
          resolveAnswer(current, btn);
        });
        ui.answers.appendChild(btn);
      })(value);
    }
  }

  function writeHistory(text) {
    state.history.unshift(text);
    state.history = state.history.slice(0, 6);

    ui.history.innerHTML = "";
    state.history.forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      ui.history.appendChild(li);
    });
  }

  function beginRound() {
    if (state.gameOver) return;

    state.firstValue = randomInt(1, 5);
    state.secondValue = randomInt(1, 5);
    state.firstPattern = samplePattern(state.firstValue);
    state.secondPattern = samplePattern(state.secondValue);
    state.waitingAnswer = false;

    ui.phase.textContent = "Memoriza el primer gesto...";
    ui.questionBox.classList.add("hidden");
    ui.handTwo.classList.add("hidden-hand");
    ui.nextRound.disabled = true;
    ui.feedback.textContent = "";
    ui.feedback.className = "feedback";

    renderHand(ui.handOne, state.firstPattern);
    renderHand(ui.handTwo, [1, 2, 3, 4, 5]);

    window.setTimeout(function () {
      if (state.gameOver) return;
      ui.phase.textContent = "Ahora mira el segundo gesto y responde.";
      renderHand(ui.handTwo, state.secondPattern);
      ui.handTwo.classList.remove("hidden-hand");
      ui.questionBox.classList.remove("hidden");
      setAnswersEnabled(true);
      state.waitingAnswer = true;
    }, 1500);
  }

  function endByProgress() {
    if (state.progress <= -2) {
      state.gameOver = true;
      ui.phase.textContent = "Derrota: caes del tablon directo a los tiburones.";
      ui.nextRound.disabled = true;
      setAnswersEnabled(false);
      return true;
    }

    if (state.progress >= 5) {
      state.gameOver = true;
      ui.phase.textContent = "Victoria: llegaste al tesoro del club secreto.";
      ui.nextRound.disabled = true;
      setAnswersEnabled(false);
      return true;
    }

    return false;
  }

  function resolveAnswer(choice, button) {
    if (!state.waitingAnswer || state.gameOver) return;

    state.waitingAnswer = false;
    setAnswersEnabled(false);
    ui.nextRound.disabled = false;

    var expected = state.firstValue;
    var correct = choice === expected;

    if (correct) {
      state.score += 1;
      state.streak += 1;
      state.progress += 1;
      button.classList.add("active-ok");
      setFeedback("Acertaste. Avanzas un paso por el tablon.", true);
      writeHistory("R" + state.round + ": acierto, avanzas a " + state.progress + ".");
    } else {
      state.streak = 0;
      state.progress -= 1;
      button.classList.add("active-ko");
      setFeedback("Fallaste. Retrocedes un paso.", false);
      writeHistory("R" + state.round + ": fallo, retrocedes a " + state.progress + ".");
    }

    ui.phase.textContent = "Preparate para la siguiente ronda.";
    setStats();
    renderProgress();
    endByProgress();
  }

  function nextRound() {
    if (state.gameOver) return;
    state.round += 1;
    setStats();
    beginRound();
  }

  function restartGame() {
    state.round = 1;
    state.score = 0;
    state.streak = 0;
    state.progress = 0;
    state.history = [];
    state.gameOver = false;
    setStats();
    renderProgress();
    ui.history.innerHTML = "";
    ui.nextRound.disabled = true;
    beginRound();
  }

  ui.nextRound.addEventListener("click", nextRound);
  ui.restart.addEventListener("click", restartGame);

  buildAnswers();
  setStats();
  renderProgress();
  beginRound();
})();
