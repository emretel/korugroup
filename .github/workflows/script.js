// Smooth scroll
document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click", e=>{
    e.preventDefault();
    const target=document.querySelector(a.getAttribute("href"));
    window.scrollTo({ top: target.offsetTop-80, behavior:"smooth" });
  });
});

// Fade-in
const fadeEls=document.querySelectorAll(".fade-in");
function checkFade(){
  fadeEls.forEach(el=>{
    let rect=el.getBoundingClientRect();
    if(rect.top<window.innerHeight-80){ el.classList.add("visible"); }
  });
}
window.addEventListener("scroll",checkFade);
checkFade();

// Language Switcher
const langBtn=document.getElementById("lang-switcher");
let currentLang="tr";
langBtn.addEventListener("click",()=>{
  currentLang=currentLang==="tr"?"en":"tr";
  document.querySelectorAll(".lang-text").forEach(el=>{
    el.textContent=el.getAttribute(`data-${currentLang}`);
  });
  langBtn.textContent=currentLang==="tr"?"EN":"TR";
});
