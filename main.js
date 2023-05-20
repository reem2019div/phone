$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var imge = document.querySelector('.imge');

function phones(phone){

    imge.src = phone;

}


function myfuntion(x){

var fullImg = document.getElementById("imageBox");
    fullImg.src = x.src;


}

 var circle = document.getElementById("circle");
 var press = document.getElementById("press");
 var presss = document.getElementById("presss");

var rotateValue = circle.style.transform;
var rotateSum ;


    press.onclick = function(){
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;

    }
    presss.onclick = function(){
        rotateSum = rotateValue + "rotate(90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;

    }















  







