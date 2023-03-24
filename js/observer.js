"use strict";

var elem = document.getElementById('sticky-header');

// Pixel observer, used to track the user's scrolling progress thru the page via: https://css-tricks.com/using-intersectionobserver-to-check-if-page-scrolled-past-certain-point/
// Visibility of divs via: https://stackoverflow.com/questions/9456289/how-to-make-a-div-visible-and-invisible-with-javascript#:~:text=To%20show%2Fhide%2C%20you%20can,which%20have%20slightly%20different%20effects%3A&text=It%20will%20automatically%20use%20the,selector%20such%20as%20%23id%20or%20.


if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in
    window.IntersectionObserverEntry.prototype
){

let observer = new IntersectionObserver(entries => {
    console.log(entries);

    if (entries[0].boundingClientRect.y < 0){
        console.log("Tracker pixel is past 100px!");
        elem.style.display = 'block';


    } else {
        console.log("Tracker pixel NOT past 100px...");
        elem.style.display = 'none';


    }
});

observer.observe(document.querySelector("#pixel-to-watch"));
}