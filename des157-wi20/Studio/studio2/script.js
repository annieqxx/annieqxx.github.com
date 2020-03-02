(function(){
    'use strict';

    var backpack = document.getElementsByClassName("backpack"); //select article backpack
    var container = document.getElementById("stuff"); //select invisible
    var backpackImg = document.querySelector("#backpack")
    var closebag = document.querySelector("#closeBag")

    backpackImg.addEventListener('click', function(){
        //container.innerHTML = `<p>${stuff}</p>`;
        container.setAttribute("class", "visible");
        closebag.setAttribute("class", "closeBag");
    })

    var pencil = document.querySelector("#pencil")
    var pencilText = document.querySelector("#pencilText")

    pencil.addEventListener('click', function(){
        pencilText.setAttribute("class", "text")
    })

    var headphone = document.querySelector("#headphone")
    var headphoneText = document.querySelector("#headphoneText")

    headphone.addEventListener('click', function(){
        headphoneText.setAttribute("class", "text")
    })

    var laptop = document.querySelector("#laptop")
    var laptopText = document.querySelector("#laptopText")

    laptop.addEventListener('click', function(){
        laptopText.setAttribute("class", "text")
    })

    closebag.addEventListener('click', function(){
        container.setAttribute("class", "invisible");
        closebag.setAttribute("class", "invisible");
        laptopText.setAttribute("class", "hide");
        headphoneText.setAttribute("class", "hide");
        pencilText.setAttribute("class", "hide");
    })


}())