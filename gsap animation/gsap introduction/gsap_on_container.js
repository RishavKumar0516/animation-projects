console.log("welcome to the programming");

gsap.registerPlugin(ScrollTrigger);

/* main events */
const t1 = gsap.timeline();

t1.to(".wrapper", 5, {x:-window.innerWidth})

ScrollTrigger.create({
    animation:t1,
    trigger:".wrapper",
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true
})