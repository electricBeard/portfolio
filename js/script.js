"use strict";

// Pixel observer, used to track the user's scrolling progress thru the page via: https://css-tricks.com/using-intersectionobserver-to-check-if-page-scrolled-past-certain-point/

let observer = new IntersectionObserver(entries => {
    console.log(entries);

    if (entries[0].boundingClientRect.y < 0){
        console.log("Tracker pixel is past 100px!");
        document.body.classList.add("sticky-header")
    } else {
        console.log("Tracker pixel NOT past 100px...");
        document.body.classList.remove("stickey-header");
    }
});

observer.observe(document.querySelector("#pixel-to-watch"));