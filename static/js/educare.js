/* ════════════════════════════════════════════════════
   educare.js  —  Countdown Timer · Slots Counter
   Cohesion: ONLY Educare section behaviour.
   Completely independent from main.js.
════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Countdown: 10 days from first visit ── */
  var STORAGE_KEY = "edu_deadline";
  var deadline;

  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    deadline = new Date(parseInt(stored, 10));
  } else {
    deadline = new Date();
    deadline.setDate(deadline.getDate() + 10);
    localStorage.setItem(STORAGE_KEY, deadline.getTime().toString());
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function updateCountdown() {
    var now  = new Date();
    var diff = deadline - now;
    if (diff <= 0) diff = 0;

    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((diff % (1000 * 60)) / 1000);

    var dEl = document.getElementById("cd-d");
    var hEl = document.getElementById("cd-h");
    var mEl = document.getElementById("cd-m");
    var sEl = document.getElementById("cd-s");

    if (dEl) dEl.textContent = pad(d);
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  /* ── Slots counter (social urgency) ── */
  var slotsEl = document.getElementById("edu-slots");
  if (slotsEl) {
    // Simulate 1 slot being taken after 40 seconds
    setTimeout(function () {
      slotsEl.textContent = "⚡ 2 Slots Remaining";
    }, 40000);
  }

})();
