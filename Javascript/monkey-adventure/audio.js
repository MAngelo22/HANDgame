(function () {
  var audioContext;
  var ambientNodes = [];
  var ambientRunning = false;

  function ensureContext() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
  }

  function tone(cfg) {
    cfg = cfg || {};
    var freq = cfg.freq || 220;
    var duration = cfg.duration || 0.12;
    var type = cfg.type || "triangle";
    var gain = cfg.gain || 0.05;
    var when = cfg.when || 0;

    var ctx = ensureContext();
    var oscillator = ctx.createOscillator();
    var amp = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = freq;

    amp.gain.value = gain;
    amp.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + when + duration);

    oscillator.connect(amp).connect(ctx.destination);
    oscillator.start(ctx.currentTime + when);
    oscillator.stop(ctx.currentTime + when + duration);
  }

  function unlockAudio() {
    ensureContext();
    if (audioContext.state === "suspended") audioContext.resume();
  }

  function startAmbient() {
    unlockAudio();
    if (ambientRunning) return;

    ambientRunning = true;
    var ctx = ensureContext();
    var bpm = 92;
    var beat = 60 / bpm;

    function scheduleBar() {
      if (!ambientRunning) return;

      var start = ctx.currentTime + 0.03;
      var bassLine = [110, 110, 146.8, 123.5, 98, 123.5, 146.8, 110];

      bassLine.forEach(function (freq, i) {
        tone({ freq: freq, duration: beat * 0.75, gain: 0.03, type: "sawtooth", when: (start - ctx.currentTime) + i * beat });
      });

      tone({ freq: 392, duration: beat * 0.35, gain: 0.018, type: "triangle", when: (start - ctx.currentTime) + beat * 0.5 });
      tone({ freq: 440, duration: beat * 0.35, gain: 0.018, type: "triangle", when: (start - ctx.currentTime) + beat * 2.5 });
      tone({ freq: 392, duration: beat * 0.35, gain: 0.018, type: "triangle", when: (start - ctx.currentTime) + beat * 4.5 });
      tone({ freq: 523.25, duration: beat * 0.45, gain: 0.014, type: "triangle", when: (start - ctx.currentTime) + beat * 6.5 });

      var timeout = beat * 8 * 1000;
      var id = window.setTimeout(scheduleBar, timeout);
      ambientNodes.push(id);
    }

    scheduleBar();
  }

  function playSfx(kind) {
    unlockAudio();
    if (kind === "click") {
      tone({ freq: 480, duration: 0.06, gain: 0.04, type: "square" });
    } else if (kind === "pickup") {
      tone({ freq: 660, duration: 0.1, gain: 0.05, type: "triangle" });
      tone({ freq: 880, duration: 0.12, gain: 0.04, type: "triangle", when: 0.07 });
    } else if (kind === "success") {
      tone({ freq: 523.25, duration: 0.1, gain: 0.05, type: "triangle" });
      tone({ freq: 659.25, duration: 0.13, gain: 0.05, type: "triangle", when: 0.08 });
      tone({ freq: 783.99, duration: 0.15, gain: 0.045, type: "triangle", when: 0.18 });
    } else if (kind === "fail") {
      tone({ freq: 220, duration: 0.14, gain: 0.05, type: "sawtooth" });
      tone({ freq: 174.61, duration: 0.18, gain: 0.045, type: "sawtooth", when: 0.07 });
    } else if (kind === "talk") {
      tone({ freq: 310, duration: 0.05, gain: 0.02, type: "triangle" });
    }
  }

  window.MonkeyAudio = {
    unlockAudio: unlockAudio,
    startAmbient: startAmbient,
    playSfx: playSfx
  };
})();
