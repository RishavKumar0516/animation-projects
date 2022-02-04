console.log("adding life to the javascript");
let ele = document.querySelector('section');
document.addEventListener('mousemove', function(e){
    this.querySelectorAll('.img').forEach(img => {
        let speed = img.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX*speed)/100;
        let y = (window.innerHeight - e.pageY*speed)/100;

        img.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})

window.addEventListener('scroll',revel);


function revel(){

    let element = document.querySelector('.content');
    let height =  window.innerHeight;
    console.log("height is: " + height);
    let reveltop = element.getBoundingClientRect().top;
    console.log("revel top is: " + reveltop);

     var revealpoint = 250;
     /* code for moving the rocket */
     let rocket = document.getElementById('rok1');
     if(reveltop < height -  revealpoint){
        rocket.style.transform = "translateY(-950px)";
     }
     else{
         rocket.style.transform = "translateY(0px)";
     }
/* code for moving the tower whose id is rok4. */
    let pointerEle = document.getElementById('rok4');
    if(reveltop < height -  revealpoint){
       pointerEle.style.transform = "rotateZ(-90deg)";
    }
    else{
        pointerEle.style.transform = "rotateZ(0deg)";
    }
/* code for moving the tower whose id is rok3. */
    let pointerEle2 = document.getElementById('rok3');
    if(reveltop < height -  revealpoint){
       pointerEle2.style.transform = "rotateZ(90deg)";
    }
    else{
        pointerEle2.style.transform = "rotateZ(0deg)";
    }
/* code for moving the tower whose id is rok2. */
    let pointerEle3 = document.getElementById('rok2');
    if(reveltop < height -  revealpoint){
       pointerEle3.style.transform = "rotateX(-90deg)";
    }
    else{
        pointerEle3.style.transform = "rotateX(0deg)";
    }
/* code for moving the fire whose id is rok5. */
    let fire5 = document.getElementById('rok5');
    if(reveltop < height -  revealpoint){
        
        fire5.style.visibility = "visible";
        fire5.style.transform = "translateY(-950px)";
     }
     else{

         fire5.style.transform = "translateY(0px)";
     }
/* code for moving the fire whose id is rok6. */
    let fire6 = document.getElementById('rok6');
    if(reveltop < height -  revealpoint){
        
        fire6.style.visibility = "visible";
        fire6.style.transform = "translateY(-950px)";
     }
     else{

         fire6.style.transform = "translateY(0px)";
     }
/* code for moving the fire whose id is rok7. */
    let fire7 = document.getElementById('rok7');
    if(reveltop < height -  revealpoint){
        
        fire7.style.visibility = "visible";
        fire7.style.transform = "translateY(-950px)";
     }
     else{

         fire7.style.transform = "translateY(0px)";
     }

/* code for moving the fire whose id is rok8. */
    let fire8 = document.getElementById('rok8');
    if(reveltop < height -  revealpoint){
        
        fire8.style.visibility = "visible";
        fire8.style.transform = "translateY(-950px)";
     }
     else{

         fire8.style.transform = "translateY(0px)";
     }
/* adding class animation to the element whose class is fire */
     let fireclass = document.querySelectorAll('.fires');
     fireclass.forEach(element => {
         element.classList.add('animation');
     });

}

window.addEventListener('scroll',function(){

     /* adding animation to the third container : here we move the element inside the container class. */
     let height =  window.innerHeight;
     var revealpoint = 250;
     let thirdsection = document.querySelector('.third-section');

     let reveltop2 = thirdsection.getBoundingClientRect().top;
     if(reveltop2 < height -  revealpoint){
        let a1 = -200;
        let b1 = 200;
        let ele = document.querySelectorAll('.imo');
        ele.forEach(element => {
              /* generating the random number. */
            let rand = a1 + (b1 - a1)*Math.random();
            // plane.style.display = 'block';
            // element.style.transform =`translateX(${-rand}px) translateY(${rand}px)`;
            // plane.style.transform =`translateX(${rand}px)`;

            if(element.index%2 == 0){
                element.style.transform =`translateX(${-rand}px) translateY(${-rand}px)`;
            }
            else{
                element.style.transform =`translateX(${rand}px) translateY(${rand}px)`;
            }
        });

     }
     else{

        plane.style.display = 'none';
     }
})

