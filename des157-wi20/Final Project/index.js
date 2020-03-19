'use strict';

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
let plate = document.querySelector(".plate")
console.log(plate)
let hidePlate = document.querySelector("#plate")

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
  
    plate.setAttribute('class', 'invisible')
    hidePlate.setAttribute('class', 'plate')

}

/************Eat healthy page */

let chicken = document.querySelector("#chicken")
let chickenName = chicken.getAttribute('id')
console.log(chickenName)

// document.getElementById("submit").addEventListener('click', function(){
//     let fatData = document.querySelectorAll("input[type=text]");

//     console.log("lala")
// })
let button = document.getElementById("submit")
console.log(button)
button.addEventListener('click', function(){
    
    let fatData = document.querySelector("input[type=text]");
    console.log(fatData.value)
        
})


    

/***********Scroll ***********/
const navLinks = document.querySelectorAll('a');

navLinks.forEach(function(eachLink){
    eachLink.addEventListener('click', smoothScroll);
})

function smoothScroll(event){
    event.preventDefault();

    const targetID = this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);

    // console.log(targetID)
    // console.log(targetAnchor)
    // console.log(targetAnchor.getBoundingClientRect().top);
    const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) -90;
    window.scrollBy({
        top:originalTop, left: 0, behavior: 'smooth'
    });

    if(targetID == "#eatHealthy"){
        window.scrollBy({
            top: Math.floor(targetAnchor.getBoundingClientRect().top), left: 0, behavior: 'smooth'
        });   
    } else if(targetID == "#subPgcupping"){
        window.scrollBy({
            top: Math.floor(targetAnchor.getBoundingClientRect().top) -50, left: 0, behavior: 'smooth'
        });   
    }


    console.log(originalTop);
    console.log(targetAnchor.getBoundingClientRect().top);
}



window.addEventListener('load', function(){
    const posts = document.querySelectorAll('section');
    const postTops = [];
    let lastPost = posts.length -1;
    let pagetop;
    let counter = 0;
    let prevCounter = 0;

    posts.forEach(function(post){
        postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
    });
   
    window.addEventListener('scroll', function(){
        pagetop = window.pageYOffset + 250;
        // console.log(pagetop);
        if(pagetop > postTops[counter +1]){
            counter++;
            console.log(`scrolling down ${counter}`);
        } else if(counter > 0 && pagetop < postTops[counter]){
            counter--;
            lastPost = posts.length -1;
            console.log(`scrolling up ${counter}`)
        } else if(pagetop > postTops[lastPost]){
            counter = lastPost;
            lastPost ++;
            console.log(`last post: ${counter}`)
        }

        if(counter!=prevCounter){
            navLinks.forEach(function(eachLink){
                eachLink.removeAttribute('class');
            })
            // var thisLInk = document.querySelector(`nav ul li:nth-child(${counter +1}) a`)
            // thisLInk.className = 'selected'
            prevCounter = counter;
        }
    });

    //console.log(posts[0].getBoundingClientRect().top)+window.pageYOffset;
})

let resizeId; 
window.addEventListener('resize', function(){
    clearTimeout(resizeId);
    resizeId = this.setTimeout(function(){
        window.onbeforeunload = function(){
            window.scrollTo(0,0);
        }; 
        window.location.reload(true);  
    }, 500);
})
