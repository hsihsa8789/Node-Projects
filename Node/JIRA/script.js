const addBtn = document.querySelector(".add-btn");
const nodeCont = document.querySelector(".modal-cont");

let isModalPresent = false;
addBtn.addEventListener('click',function(){
    if(!isModalPresent){
        nodeCont.style.display = "flex";

    }else{
        nodeCont.style.display = "none";
    }
    isModalPresent = !isModalPresent;
})

const allPriorityColors = document.querySelectorAll(".priority-color");

allPriorityColors.forEach(function (colorElement){
    colorElement.addEventListener("click",function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
    });
});
// allPriorityColors