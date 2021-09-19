var accordion = document.querySelectorAll(".question");
var paraText = document.querySelectorAll(".para");



for(let i = 0;i<accordion.length;i++){
    accordion[i].addEventListener("click", function(){
        paraText[i].classList.toggle("active");
        
        accordion[i].classList.toggle("active");
        
        
    })
}
