/* Funcion para manejar elementos el home de CotiderWeb segun el viewport: Hector Mujica 17/08/2019 
--------------------------------------------------------------- */
window.onloadstart = init();
window.addEventListener('resize',init);

// Evaluar elementos del dome segun el tamaño de la pantalla :Hector Mujica 17/08/2019 
function init(test){
  if(window.innerWidth<=767){
    document.querySelector("#logo").style.visibility="visible";
    document.querySelector("#logoTop").style.visibility="hidden";
    document.querySelector("#slider").style.display="none";
  }else{
    document.querySelector("#logoTop").style.visibility="visible";
    document.querySelector("#logo").style.visibility="hidden";
    document.querySelector("#slider").style.display="block";
  }
}
// Evaluar elementos al hacer scroll :Hector Mujica 17/08/2019 
window.addEventListener('scroll',()=>{
  if(pageYOffset>80 && window.innerWidth>=768){
    document.querySelector("#logo").style.visibility="visible";
  }else if(pageYOffset<80 && window.innerWidth>=768){
    document.querySelector("#logo").style.visibility="hidden";
    document.querySelector("#slider").style.display="block";
  }
})