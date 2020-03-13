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
    setInterval(function(){
        if (op >= 1){
            clearInterval(timer);
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
        setInterval(function(){
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 30)
    }    
})

/********Physical Therapy pg****** */



/************Eat healthy page */

/***********Scroll */