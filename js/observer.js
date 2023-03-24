"use strict";

// reach into the DOM and grab the sticky header
var elem = document.getElementById('sticky-header');

// check if we are in the view port window
if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in
    window.IntersectionObserverEntry.prototype
){

// use an observer to check for page scroll
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

// reach into the DOM and observe the tracker pixel
observer.observe(document.querySelector("#pixel-to-watch"));
}