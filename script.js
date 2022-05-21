window.addEventListener("scroll",()=>{
   window.setTimeout(reveal,300)
});

function reveal(){
   let fromleft = document.querySelectorAll(".fromleft");

   for(let i=0;i<fromleft.length; i++){
      let windowheight = window.innerHeight;
      let reavealtop= fromleft[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if(reavealtop < windowheight - revealpoint){
         fromleft[i].classList.add("active")
      }
      else{
         fromleft[i].classList.remove("active")
      }
   }

   let fromright = document.querySelectorAll(".fromright");

   for(let i=0;i<fromright.length; i++){
      let windowheight = window.innerHeight;
      let reavealtop= fromright[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if(reavealtop < windowheight - revealpoint){
         fromright[i].classList.add("active")
      }
      else{
         fromright[i].classList.remove("active")
      }
   }
}