/* ════════════════════════════════════════════════════
   main.js — Loader · Cursor · Scroll Reveal · Tabs
════════════════════════════════════════════════════ */
(function(){
  "use strict";

  /* ── Loading screen ── */
  window.addEventListener("load", function(){
    setTimeout(function(){
      var loader = document.getElementById("loader");
      if(loader){ loader.classList.add("hidden"); }
    }, 2000);
  });

  /* ── Custom cursor ── */
  var dot  = document.getElementById("cursor");
  var ring = document.getElementById("cursorRing");
  var mx=0,my=0,rx=0,ry=0;

  document.addEventListener("mousemove",function(e){
    mx=e.clientX; my=e.clientY;
    dot.style.transform="translate("+(mx-5)+"px,"+(my-5)+"px)";
  });

  (function animRing(){
    rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
    ring.style.transform="translate("+(rx-18)+"px,"+(ry-18)+"px)";
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll("a,button").forEach(function(el){
    el.addEventListener("mouseenter",function(){ ring.style.width="52px"; ring.style.height="52px"; });
    el.addEventListener("mouseleave",function(){ ring.style.width="36px"; ring.style.height="36px"; });
  });

  /* ── Scroll reveal ── */
  var reveals = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add("visible"); });
  },{threshold:0.1});
  reveals.forEach(function(el){ observer.observe(el); });

  /* ── Testimonials tabs ── */
  document.querySelectorAll(".tab-btn").forEach(function(btn){
    btn.addEventListener("click",function(){
      var target = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-btn").forEach(function(b){ b.classList.remove("active"); });
      document.querySelectorAll(".testimonials-panel").forEach(function(p){ p.classList.remove("active"); });
      btn.classList.add("active");
      var panel = document.getElementById(target);
      if(panel) panel.classList.add("active");
    });
  });

})();
