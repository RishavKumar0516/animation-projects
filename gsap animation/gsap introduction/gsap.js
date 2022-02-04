console.log("Let's start coding!");
/*
-> to use these below animation first we have to add gsap  plugin to the head of the html. */
  /*triggered element should be written here
              |
              |
              |           
//  gsap.to(".b", {
//      x: 400,
//      rotation:360,
//      duration: 3
//  })

/*
-> to use these scrollTrigger animation first we have to add scroll trigger plugin to the head of the html.
so when we scroll, these below code will executed only for once. */

// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".c", {
//     scrollTrigger: ".c",
//     x: 400,
//     rotation:360,
//     duration: 3
// });

/*
-> but if we want to replay the animation every times whenever it enters the viewport again, but it stops whenever we leaves the viewport.  -  these can be done using toggleaction */

/*
-> by default toggleAction looks like,
toggleAction: "play none none none" 
it takes keyword as string and keyword can be
1. play
2. pause
3. resume
4. reverse
5. restart
6. reset
7. complete
8. none

 -> we are using first keyword as restart, whenever it reaches the viewport, animation restarts
 -> we are using second keyword as pause, whenever it reaches out of the viewport animation pauses
 -> we are using third keyword as resume, whenever it reaches again in the viewport, animation resumes again from where it paused. we can also use reverse keyword in place of resume, the animation reverse from end to start.
 -> we are using forth keyword as pause, whenever it reaches out of viewport it not animates the things. 
 */

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".c", {
//     scrollTrigger: {
//         trigger: ".c",   /* these will triggered */
//         toggleActions: "restart pause resume none"
//     },
//     x: 400,
//     rotation:360,
//     duration: 3
// });

/*
->  positioning in scrolltriggers with 'start' and 'end' property:
     By default scrollTriggers starts as soon as the triggered element(which is box c in these case) enters the viewport very bottom.(when we scroll to bottom the element scrolls up so when, it comes above the bottom viewport it animates. )
but we can tell it to start instead, when the top of the triggered element reaches center of the scroll or viewport. 
start: "top center"
-> you can use different properties to set the position
 1. top
 2. center
 3. botttom(by default)
 you can use pixels and percentages value which is always relative to top.
 start: "20px 80px"   what these means is animaion starts if 20px from the top of triggered element when reaches the 80% down from the viewport, scrollTrigger activates.


 gsap.registerPlugin(ScrollTrigger);

// gsap.to(".c", {
//     scrollTrigger: {
//         trigger: ".c",   /* these will triggered */
//         // start: "top, center",
//         start: "20px 80%",
//         markers:true,
//         toggleActions: "restart pause resume none"
//     },
//     x: 400,
//     rotation:360,
//     duration: 3
// });

/*
 -> end property:  by default when the bottom of the triggered element hits     the top of the viewport animation ends. but we can change them,
 end: "bottom 100px"
 -> the above code means is when the bottom of the triggered element, reaches the 100px down from the top of the viewport, scrolltrigger deactivates.
 end: "+=300"
 -> for the end values we can also make them relative to start. if we want to be 300px wherever the starts happen.(animation ends 300px from the start position of triggered element.)
 -> ew can also use function for dynamic values
 end: ()=> " +=" + document.querySelector(".c").offsetWidth,
*/
/*
-> marker: it gives a visual indicator of when animation should start. when the two green lines corsses each other, animation starts. */

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".c", {
//     scrollTrigger: {
//         trigger: ".c",   /* these will triggered */
//         // start: "top, center",
//         start: "20px 80%",
//         // end: "bottom 100px",
//         // end: "+=300",
//         end: () => "+=" +
//          document.querySelector(".c").offsetWidth,
//         markers:true,
//         toggleActions: "restart pause resume none"
//     },
//     x: 400,
//     rotation:360,
//     duration: 3
// });

/* 
-> we also has flexiblity to start strat animation relative to other elements,
we can completly use different element for start and end the scrollTrigger.
we say strating trigger should be "a" and ending trigger should be "b" and triggered element should be 'b'.
 */
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".b", {
//     scrollTrigger: {
//         trigger: ".a",   /* these will triggered */
//         start: "top 50px",/* difining where scrollTrigger starts */
//         endTrigger:".c",
//         end: "bottom 80%",/* difining where scrollTrigger ends */
//         markers:true,
//         toggleActions: "restart pause resume none"
//     },
//     x: 400,
//     rotation:360,
//     duration: 3
// });

/*     ------------------scrub animation-------------------      */
/* 
-> when we use scrub then the animation played locks between start and end. animation play relative to scroll bar.
scrub: "true",
animation gets locked and controlled with scroll bar.
 */
/* we can make these little bit smooth using numbers. these numbers are times in second takes the number of second to catch the animation. */

// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".c", {
//     scrollTrigger: {
//         trigger: ".c",   /* these will triggered */
//         start: "top center",/* difining where scrollTrigger starts */
//         end: "top 100px",/* difining where scrollTrigger ends */
//         // scrub: true,
//         // scrub: 1,
//         scrub: 3,
//         markers:true,
//         toggleActions: "restart pause resume none"
//     },
//     x: 400,
//     rotation:360,
//     ease: "none",
//     duration: 3
// });

/* we can also use scrollTrigger inside timeline */
// gsap.registerPlugin(ScrollTrigger);

// let t1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".c",   /* these will triggered */
//         start: "top center",/* difining where scrollTrigger starts */
//         end: "top 100px",/* difining where scrollTrigger ends */
//         // scrub: true,
//         // scrub: 1,
//         scrub: 3,
//         markers:true,
//         toggleActions: "restart pause resume none"
//     }
// });
// t1.to(".c", {
//     x: 400,
//     rotation:360,
//     ease: "none",
//     duration: 3
// })
// .to(".c", {
//     backgroundColor: "purple",
//     duration:3
// })
// .to(".c", {
//     x: 0,
//     duration:3
// });

/* -------------------  pinning  ------------------- */
/* when we have enabled the scrub, as we scroll up the page the elements also move up with the screen aswell, because we are scrolling the screen up. 
but, when we enabled the pin
pin: true, 
then, the element pin and placed.
Note:-  pinning is more usefull when dealing with section.
*/
 gsap.registerPlugin(ScrollTrigger);
 gsap.to(".c", {
     scrollTrigger: {
         trigger: ".c",   /* these will triggered */
         start: "top center",/* difining where scrollTrigger starts */
         end: "top 100px",/* difining where scrollTrigger ends */
         scrub: true,
         scrub: 3,
         pin: true,
         markers:true,
         toggleActions: "restart pause resume none"
     },
     x: 400,
     rotation:360,
     ease: "none",
     duration: 3
 });
