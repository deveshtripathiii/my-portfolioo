/* ════════════════════════════════════════════════════
   educare.js — Countdown · Slots Counter
════════════════════════════════════════════════════ */
(function(){
  "use strict";
  var KEY="edu_dl2";
  var dl;
  try{
    var s=localStorage.getItem(KEY);
    dl=s?new Date(parseInt(s,10)):null;
  }catch(e){dl=null;}
  if(!dl||isNaN(dl.getTime())){
    dl=new Date();dl.setDate(dl.getDate()+10);
    try{localStorage.setItem(KEY,dl.getTime().toString());}catch(e){}
  }
  function pad(n){return String(n).padStart(2,"0");}
  function tick(){
    var diff=Math.max(0,dl-new Date());
    var d=Math.floor(diff/864e5);
    var h=Math.floor(diff%864e5/36e5);
    var m=Math.floor(diff%36e5/6e4);
    var s=Math.floor(diff%6e4/1e3);
    ["cd-d","cd-h","cd-m","cd-s"].forEach(function(id,i){
      var el=document.getElementById(id);
      if(el)el.textContent=pad([d,h,m,s][i]);
    });
  }
  setInterval(tick,1000);tick();

  var sl=document.getElementById("edu-slots");
  if(sl){setTimeout(function(){sl.textContent="⚡ 2 Slots Remaining";},42000);}
})();
