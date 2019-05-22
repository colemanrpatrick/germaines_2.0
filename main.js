/*==== nav function ====*/
var menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click",navFunction,false)

function navFunction(){
  var navMenu = document.getElementById("main-nav");

  if(navMenu.className === "main-nav"){
    navMenu.className += " active";
    idToggle("menu-btn","active");
  }else{
    navMenu.className = "main-nav";
    idToggle("menu-btn","active");
  }
}
//
var wrapper = document.getElementsByClassName('detail-wrapper');
function toggleOutside(e){
  if(e.target.classList.contains('active') && e.target !== e.target.firstChild){
    idToggle(this.id,'active');
  }
}

for (var i = 0 ; i < wrapper.length; i++) {
  wrapper[i].addEventListener('click',toggleOutside,false);
}
