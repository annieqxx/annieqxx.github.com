'use strict'

let op = 0.1;
/*****Senior Chose page(page3)******/
const pg3Section = document.querySelector("#page3")
const parHide = document.querySelector('#par3')
const par3Trigger = document.querySelector('#click')
const divshow = document.querySelector('#selection3')

par3Trigger.addEventListener('click', function(){
    parHide.setAttribute('class', 'invisible');
    divshow.setAttribute('class', 'visible')    
    divshow.style.opacity = op;
    let tim = setInterval(function(){
        if (op >= 1){
            clearInterval(tim);
        }
        divshow.style.opacity = op;
        divshow.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 15)
  
})

/****Cupping Page*****/
const cuppingpgHide = document.querySelectorAll('#subPgcupping .invisible')
const img = document.querySelector('#cupImg')
img.addEventListener('mouseover', function(){
    for (let index = 0; index < cuppingpgHide.length; index++) {
        const element = cuppingpgHide[index];
        // console.log(element)
        element.setAttribute('class', 'visible');
        let op = 0.1;
        element.style.opacity = op;
        let time = setInterval(function(){
            if (op >= 1){
                clearInterval(time);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 30)
    }    
})

/********Physical Therapy pg****** */

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

let olderAdult = document.querySelectorAll("#subPgtherapy .visible")
let appear = document.querySelectorAll("#subPgtherapy .invisible")

function drop(ev) {
  ev.preventDefault();
  for (let index = 0; index < olderAdult.length; index++) {
    olderAdult[index].setAttribute('class', 'invisible')    
  }

  for (let index = 0; index < appear.length; index++) {
    appear[index].setAttribute('class', 'visible')  
    let opp = 0.1;
    appear[index].style.opacity = opp;
    let timer  = setInterval(function(){
        if (opp >= 1){
            clearInterval(timer);
        }
        appear[index].style.opacity = opp;
        appear[index].style.filter = 'alpha(opacity=' + opp * 100 + ")";
        opp += opp * 0.1;
    }, 10)  
  }
  
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));

}

/************Eat healthy page */

/***********Scroll */