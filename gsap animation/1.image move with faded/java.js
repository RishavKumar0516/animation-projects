console.log("let's start coding");


$(document).ready(function() {
    $("#fullpage").fullpage({
       anchors: ["firstpage", "secondpage", "thirdpage"],
       menu: "#menu",
       autoScrolling:false
       //responsive width 750
    });
});

//scrollMagic: init controller
var controller = new ScrollMagic.controller();


//  tween section 2
var scene =new ScrollMagic.Scene({
    triggerElement: "#section2"
})
//animate color and top borderin relation to scroll position.
.setTween("#bg img",{
   maxWidth: "1200px",
   top:"30%",
   left:"80%",
   opacity:0.25
})//the tween durat7ion can be omitted and defaults to 1.
.addTo(controller);

