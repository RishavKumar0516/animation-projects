const flightPath = {
    curviness: 0.5,  //curviness parameter makes it smooth,whenever it jumps or flies.
    autoRotate: true,
    values: [
        {x:100, y: -20},
        {x:300, y: 10},
        {x:500, y: 100},
        {x:650, y: -180},
        {x:300, y: 70},
        {x:560, y: 120},
        {x:720, y: 90},
        {x:720, y: -130},
        {x: window.innerWidth, y: 10},
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".bool", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 800,
    triggerHook: 0
})

.setTween(tween)
.setPin('.animation')
.addTo(controller);