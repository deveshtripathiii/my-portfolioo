/* ════════════════════════════════════════════════════
   main.js  —  Cursor · Scroll Reveal
   Cohesion: global interaction behaviour only.
   No Educare or section-specific logic here.
════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Custom cursor ── */
  const cursorDot  = document.getElementById("cursor");
  const cursorRing = document.getElementById("cursorRing");

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", function (e) {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.transform = "translate(" + (mx - 5) + "px, " + (my - 5) + "px)";
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.transform = "translate(" + (rx - 18) + "px, " + (ry - 18) + "px)";
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll("a, button").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      cursorRing.style.width  = "52px";
      cursorRing.style.height = "52px";
    });
    el.addEventListener("mouseleave", function () {
      cursorRing.style.width  = "36px";
      cursorRing.style.height = "36px";
    });
  });

  /* ── Scroll reveal ── */
  var reveals = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(function (el) { observer.observe(el); });
})();
