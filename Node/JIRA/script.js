const addBtn = document.querySelector(".add-btn");
const nodeCont = document.querySelector(".modal-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ['lightpink','lightgreen','lightblue','black'];
let modalPriorityColor = colors[colors.length-1];
let textAreaCont = document.querySelector(".textarea-cont");
const mainCont = document.querySelector(".main-cont");


let isModalPresent = false;
addBtn.addEventListener('click',function(){
    if(!isModalPresent){
        nodeCont.style.display = "flex";

    }else{
        nodeCont.style.display = "none";
    }
    isModalPresent = !isModalPresent;
})

allPriorityColors.forEach(function (colorElement){
    colorElement.addEventListener("click",function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
        modalPriorityColor = colorElement.classList[0];
    });
});

nodeCont.addEventListener("keydown",function(e){
    let key = e.key;
    if(key=="Shift"){
        // console.log(modalPriorityColor);
        // console.log(textAreaCont.value);
        createTickate(modalPriorityColor,textAreaCont.value);
        nodeCont.style.display = "none";
        isModalPresent = false;
        textAreaCont.value = "";
        allPriorityColors.forEach(function (colorElem){
            colorElem.classList.remove("active");
        })
        // allPriorityColors[allPriorityColors.length-1].classList.add("action");
        
    }
});

function createTickate(tickateColor,data){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color ${tickateColor}"></div>
    <div class="ticket-id"></div>
    <div class="task-area">${data}</div>`;

    nodeCont.appendChild(ticketCont);
}