var menu = document.querySelector(('.navmenu'), ':after');


menu.addEventListener("click", function(){ 
    document.querySelector(".navmenu ul").classList.toggle("show");

 });

//  window.addEventListener("click", function(){ 
//     if( document.querySelector(".navmenu ul").classList.contains('show')){
//        document.querySelector(".navmenu ul").classList.remove("show");
//     }
   
// });