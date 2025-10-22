
document.addEventListener("DOMContentLoaded", function(){
  // soft fade
  setTimeout(()=>document.body.classList.add("loaded"), 300);

  // tabs
  const buttons = document.querySelectorAll("[data-tab]");
  const panels = document.querySelectorAll(".tab-panel");
  function activate(id){
    panels.forEach(p=>p.hidden = (p.id !== id));
    buttons.forEach(b=>{
      if(b.getAttribute("data-tab")===id){ b.classList.add("active","green"); b.classList.remove("ghost"); }
      else { b.classList.remove("active","green"); b.classList.add("ghost"); }
    });
  }
  if(buttons.length){ buttons.forEach(b=>b.addEventListener("click",()=>activate(b.getAttribute("data-tab")))); activate(buttons[0].getAttribute("data-tab")); }

  // lightbox for galleries
  const lb = document.querySelector(".lightbox");
  if(lb){
    const lbImg = lb.querySelector("img");
    document.querySelectorAll(".gallery img").forEach(img=>{
      img.addEventListener("click", ()=>{ lbImg.src = img.src; lb.classList.add("show"); });
    });
    lb.addEventListener("click", ()=> lb.classList.remove("show"));
  }
});
