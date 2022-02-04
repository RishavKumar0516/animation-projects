console.log("we are rady for the javascript");

window.addEventListener('scroll', function(){
let star = document.getElementById("stars");
let moon = document.getElementById('moon');
let mountain_behind  = document.getElementById('mountain_behind');
let mountain_front = document.getElementById('mountain_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');
    let value = window.scrollY;
    console.log(value);
     star.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.5 + 'px';
    mountain_behind.style.top = value * 0.5 + 'px';
    mountain_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

})