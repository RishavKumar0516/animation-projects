console.log(window);

window.addEventListener('scroll', reveal);
function reveal(){
  let image = document.querySelector("img");
  console.log(image);
    // let b = scrollX;
    // console.log(b);
    // let b = scrollY;
    // console.log(b);
    //  b = image.getBoundingClientRect().top;
      b = scrollY;
    console.log(b);
    // if(b >800){
    //   b = -b;
    // }
    /* agar b ka value positive hota hai tou downward move karega aur agar scroll ka value negative hoga tou upward move karega. */

        /* usse tarah jab negative value hoga tou left side move karega aur agar positive value hoga tou right side move karega. */
      image.style.top = + b + 100  + "px";
      image.style.transfom=rotate("360px");
    //  image.style.left = b + 40  + "px";
    // image.style.height = "400px";
}
